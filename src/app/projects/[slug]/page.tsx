import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProject, projects, profile } from "@/data/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${profile.name}`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const meta = [
    { label: "ROLE", value: project.role },
    { label: "TIMELINE", value: project.timeline },
    { label: "STACK", value: project.tags.join(" · ") },
  ];

  return (
    <div id="top">
      <Navbar />
      <main className="mx-auto max-w-[1440px] px-5 pb-16 pt-6 md:px-24 md:pb-24 md:pt-10">
        <Link href="/#projects" className="inline-block py-3 text-muted hover:text-fg">
          ← All projects
        </Link>

        <div className="mt-4 flex flex-col items-start gap-5 md:gap-7">
          <span className="font-mono text-[13px] text-accent md:text-sm">{project.category}</span>
          <h1 className="font-display text-5xl font-bold leading-none tracking-[-0.04em] md:text-[96px]">{project.title}</h1>
          <p className="max-w-[760px] text-lg leading-relaxed text-muted md:text-[22px]">{project.summary}</p>
        </div>

        <dl className="mt-10 grid gap-6 border-y border-line py-7 md:mt-14 md:grid-cols-4 md:gap-8 md:py-8">
          {meta.map((m) => (
            <div key={m.label} className="flex flex-col gap-2.5">
              <dt className="font-mono text-[13px] text-muted">{m.label}</dt>
              <dd className="text-lg">{m.value}</dd>
            </div>
          ))}
          <div className="flex flex-col gap-2.5">
            <dt className="font-mono text-[13px] text-muted">LINKS</dt>
            <dd className="flex gap-6 text-lg text-accent">
              {project.repos.map((r) => (
                <a key={r.url} href={r.url} target="_blank" rel="noreferrer" className="py-2.5 hover:text-accent">
                  {r.label}
                </a>
              ))}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="py-2">
                  Live ↗
                </a>
              )}
            </dd>
          </div>
        </dl>

          {project.image && (
            <div className="relative mt-12 aspect-[5/2] overflow-hidden rounded-3xl border border-line bg-well md:mt-18">
              <Image src={project.image} alt={project.imageAlt ?? project.title} fill priority sizes="(min-width: 1440px) 1248px, 100vw" className="object-cover object-top" />
            </div>
          )}

        <section className="mt-16 grid gap-6 md:mt-24 md:grid-cols-[320px_1fr] md:gap-16">
          <h2 className="font-display text-3xl font-bold tracking-[-0.02em] md:text-4xl">Overview</h2>
          <div className="flex flex-col gap-5">
            {project.overview.map((p) => (
              <p key={p} className="max-w-[720px] text-[17px] leading-[1.7] text-muted md:text-[19px]">
                {p}
              </p>
            ))}
          </div>
        </section>

        {project.decisions.length > 0 && (
          <section className="mt-16 grid gap-6 md:mt-24 md:grid-cols-[320px_1fr] md:gap-16">
            <h2 className="font-display text-3xl font-bold tracking-[-0.02em] md:text-4xl">Key decisions</h2>
            <div className="grid gap-5 md:grid-cols-3">
              {project.decisions.map((d, i) => (
                <div key={d.title} className="flex flex-col gap-3.5 rounded-[18px] border border-line bg-surface p-7">
                  <span className="font-mono text-[13px] text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-[22px] font-bold tracking-[-0.01em]">{d.title}</h3>
                  <p className="leading-relaxed text-muted">{d.text}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <Link href="/#projects" className="mt-20 flex items-center justify-between rounded-3xl border border-line bg-surface px-6 py-8 hover:border-accent md:mt-28 md:px-12 md:py-10">
          <span className="flex flex-col gap-2.5">
            <span className="font-mono text-[13px] text-muted">MORE WORK</span>
            <span className="font-display text-3xl font-bold tracking-[-0.03em] md:text-[40px]">Back to all projects</span>
          </span>
          <span aria-hidden="true" className="text-3xl text-accent md:text-4xl">
            →
          </span>
        </Link>
      </main>
      <Footer />
    </div>
  );
}
