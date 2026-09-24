"use client";

import { useState } from "react";
import { profile } from "@/data/content";

type Status = "idle" | "sending" | "sent" | "error";

const input =
  "w-full rounded-xl border border-line-strong bg-canvas px-4 text-base text-fg placeholder:text-muted/70 focus:border-accent focus:outline-none";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget; // simpan sebelum await
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    setErrors({});
    setFormError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        setStatus("sent");
        form.reset();
        return;
      }
      setErrors(json.fields ?? {});
      setFormError(json.error ?? "");
      setStatus("error");
    } catch {
      setFormError("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-[1440px] px-5 pb-14 md:px-24 md:pb-24">
      <div className="grid gap-8 rounded-[22px] border border-line bg-surface px-5 py-10 md:grid-cols-[1fr_560px] md:items-start md:gap-[72px] md:rounded-[28px] md:p-[72px]">
        <div className="flex flex-col items-start gap-5 md:gap-6">
          <span className="font-mono text-[13px] text-accent md:text-sm">04 — Contact</span>
          <h2 className="font-display text-[38px] font-bold leading-[1.06] tracking-[-0.035em] md:text-[56px]">
            Let&apos;s build something reliable together.
          </h2>
          <p className="text-[17px] leading-relaxed text-muted md:text-[19px]">
            Open to fullstack and backend roles. Send a message and I&apos;ll get back to you.
          </p>
          <div className="flex flex-col gap-2 pt-2">
            <span className="font-mono text-xs text-muted md:text-[13px]">OR EMAIL ME DIRECTLY</span>
            <span className="text-lg md:text-xl">{profile.email}</span>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-full border border-line-strong px-6 py-3.5 font-medium hover:border-accent">GitHub ↗</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-line-strong px-6 py-3.5 font-medium hover:border-accent">LinkedIn ↗</a>
          </div>
        </div>

        <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5 rounded-2xl border border-line bg-well p-5 md:rounded-[20px] md:p-8">
          <div className="grid gap-5 md:grid-cols-2 md:gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[15px] font-medium">Name</label>
              <input id="name" name="name" type="text" autoComplete="name" placeholder="Your name" aria-invalid={!!errors.name} className={`${input} h-[52px]`} />
              {errors.name && <p role="alert" className="text-sm text-[#ff8a80]">{errors.name}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[15px] font-medium">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" placeholder="you@company.com" aria-invalid={!!errors.email} className={`${input} h-[52px]`} />
              {errors.email && <p role="alert" className="text-sm text-[#ff8a80]">{errors.email}</p>}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-[15px] font-medium">Message</label>
            <textarea id="message" name="message" placeholder="Tell me about the role or project" aria-invalid={!!errors.message} className={`${input} h-36 resize-none py-3.5 leading-normal md:h-40`} />
            {errors.message && <p role="alert" className="text-sm text-[#ff8a80]">{errors.message}</p>}
          </div>

          {/* kolom jebakan: manusia tidak melihatnya, bot biasanya mengisinya */}
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <button type="submit" disabled={status === "sending"} className="flex h-14 items-center justify-center gap-2.5 rounded-full bg-accent font-semibold text-accent-ink disabled:opacity-60">
            {status === "sending" ? "Sending…" : <>Send message <span aria-hidden="true">→</span></>}
          </button>

          {status === "sent" && <p role="status" className="text-sm text-accent">Thanks! Your message has been sent.</p>}
          {formError && <p role="alert" className="text-sm text-[#ff8a80]">{formError}</p>}
          {status !== "sent" && !formError && <p className="text-sm text-muted">Your message goes straight to my inbox.</p>}
        </form>
      </div>
    </section>
  );
}