import { Resend } from "resend";
import { contactSchema } from "@/lib/validation";

// Resend dibuat di dalam POST, supaya build tidak gagal saat kunci API belum diisi.

// Pembatas sederhana di memori: maksimal 3 pesan per 10 menit per IP.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 3;
const hits = new Map<string, number[]>();

function tooMany(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_HITS;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (tooMany(ip)) {
    return Response.json(
      { ok: false, error: "Too many messages. Please try again later." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!fields[key]) fields[key] = issue.message;
    }
    return Response.json({ ok: false, fields }, { status: 400 });
  }

  const { name, email, message, website } = parsed.data;
  if (website) return Response.json({ ok: true }); // bot: pura-pura berhasil

  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";
  if (!process.env.RESEND_API_KEY || !to) {
    console.error("RESEND_API_KEY or CONTACT_TO_EMAIL is missing");
    return Response.json({ ok: false, error: "Server is not configured." }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `Portfolio message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (error) {
    console.error(error);
    return Response.json(
      { ok: false, error: "Could not send your message. Please try again." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}