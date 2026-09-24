import Image from "next/image";
import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-360 gap-12 px-5 pb-14 pt-10 md:grid-cols-[1fr_500px] md:items-center md:gap-18 md:px-24 md:pb-26 md:pt-22">
      <div className="flex flex-col items-start gap-7 md:gap-8">
        <p className="flex items-center gap-2.5 rounded-full border border-line-strong px-4 py-2 font-mono text-xs text-muted md:text-[13px]">
          <span className="size-2 rounded-full bg-accent" />
          Open to fullstack &amp; backend roles
        </p>

        <h1 className="font-display text-[44px] font-bold leading-[1.03] tracking-[-0.035em] md:text-[76px]">
          I build <span className="text-accent">reliable backends</span> and the interfaces on top of them.
        </h1>

        <p className="max-w-140 text-[17px] leading-relaxed text-muted md:text-xl">
          {profile.name} — {profile.intro}
        </p>

        <div className="flex w-full flex-col gap-3 pt-2 md:w-auto md:flex-row md:gap-4">
          <a href="#projects" className="flex items-center justify-center gap-2.5 rounded-full bg-accent px-7 py-4 font-semibold text-accent-ink">
            View projects <span aria-hidden="true">↓</span>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2.5 rounded-full border border-line-strong px-7 py-4 font-medium">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="relative h-105 overflow-hidden rounded-3xl border border-line-strong bg-surface md:h-140 md:rounded-[28px]">
          <Image src={profile.photo} alt={`Portrait of ${profile.name}`} fill priority sizes="(min-width: 768px) 500px, 100vw" className="object-cover" />
        </div>

        <div className="relative ml-3.5 -mt-14 w-74 self-start overflow-hidden rounded-2xl border border-line-strong bg-surface font-mono shadow-2xl shadow-black/50 md:-ml-10 md:-mt-23 md:w-85">
          <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
            <span className="size-2 rounded-full bg-line-strong" />
            <span className="size-2 rounded-full bg-line-strong" />
            <span className="size-2 rounded-full bg-line-strong" />
            <span className="ml-2 text-xs text-muted">profile.ts</span>
          </div>
          <div className="px-4 pb-4 pt-3 text-xs leading-[1.8] md:px-4.5 md:text-[13px]">
            <div>
              <span className="text-[#8fa3c7]">const</span> agil = {"{"}
            </div>
            <div className="pl-4">
              role: <span className="text-accent">&quot;Fullstack / Backend&quot;</span>,
            </div>
            <div className="pl-4">
              stack: [<span className="text-accent">&quot;Laravel&quot;</span>, <span className="text-accent">&quot;Node.js&quot;</span>],
            </div>
            <div className="pl-4">
              openToWork: <span className="text-[#8fa3c7]">true</span>,
            </div>
            <div>{"};"}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
