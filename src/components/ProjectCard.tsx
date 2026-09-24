import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/content";

export default function ProjectCard({ project }: { project: Project }) {
  const host = project.liveUrl ? new URL(project.liveUrl).host : "project preview";

  return (
    <article className="flex flex-col overflow-hidden rounded-[18px] border border-line bg-surface md:rounded-[20px]">
      <div className="border-b border-line bg-well px-4 pt-4 md:px-6 md:pt-6">
        <div className="overflow-hidden rounded-t-xl border border-b-0 border-line-strong">
          <div className="flex h-[30px] items-center gap-1.5 border-b border-line-strong bg-[#181c25] px-2.5 md:h-[34px] md:px-3">
            <span className="size-[7px] rounded-full bg-[#3a4256]" />
            <span className="size-[7px] rounded-full bg-[#3a4256]" />
            <span className="size-[7px] rounded-full bg-[#3a4256]" />
            <span className="ml-2 rounded-full bg-well px-3.5 py-0.5 font-mono text-[10px] text-muted md:text-[11px]">{host}</span>
          </div>
          <div className="relative aspect-[5/2] bg-well">
            {project.image ? (
              <Image src={project.image} alt={project.imageAlt ?? project.title} fill sizes="(min-width: 768px) 560px, 100vw" className="object-cover object-top" />
            ) : (
              <div className="flex h-full items-center justify-center font-mono text-sm text-muted">
                {"<"} {project.title} {"/>"}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-[22px] md:gap-3.5 md:px-8 md:pb-[30px] md:pt-7">
        <span className="font-mono text-xs text-accent md:text-[13px]">{project.category}</span>
        <h3 className="font-display text-[26px] font-bold tracking-[-0.02em] md:text-[30px]">{project.title}</h3>
        <p className="leading-relaxed text-muted">{project.summary}</p>
        <ul className="mt-auto flex flex-wrap gap-2 pt-1">
          {project.tags.map((t) => (
            <li key={t} className="rounded-full border border-line-strong px-3 py-1.5 font-mono text-xs text-muted md:text-[13px]">
              {t}
            </li>
          ))}
        </ul>
        <div className="flex gap-6 pt-1.5 text-[15px] font-medium md:gap-7">
          <Link href={`/projects/${project.slug}`} className="py-2.5 text-accent">
            Case study →
          </Link>
          {project.repos.map((r) => (
            <a key={r.url} href={r.url} target="_blank" rel="noreferrer" className="py-2.5 hover:text-accent">
              {r.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
