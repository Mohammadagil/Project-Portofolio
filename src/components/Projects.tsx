import { projects } from "@/data/content";
import ProjectCard from "./ProjectCard";
import { profile } from "@/data/content";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-[1440px] px-5 pb-14 pt-16 md:px-24 md:pb-24 md:pt-28">
      <div className="mb-9 flex items-end justify-between md:mb-14">
        <div className="flex flex-col gap-3.5 md:gap-4">
          <span className="font-mono text-[13px] text-accent md:text-sm">01 — Projects</span>
          <h2 className="font-display text-[38px] font-bold leading-[1.05] tracking-[-0.03em] md:text-[52px]">
            Selected work
          </h2>
        </div>
        <a href={profile.github} target="_blank" rel="noreferrer" className="hidden py-3 text-muted hover:text-accent md:block">
          All repositories on GitHub ↗
        </a>
      </div>
      <div className="grid gap-5 md:grid-cols-2 md:gap-8">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}