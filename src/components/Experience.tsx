import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line">
      <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-24 md:py-24">
        <div className="mb-8 flex flex-col gap-3.5 md:mb-14 md:gap-4">
          <span className="font-mono text-[13px] text-accent md:text-sm">03 — Experience</span>
          <h2 className="font-display text-[38px] font-bold leading-[1.06] tracking-[-0.03em] md:text-[52px]">
            Where I&apos;ve worked
          </h2>
        </div>
        <div className="border-b border-line">
          {experience.map((e) => (
            <div key={e.title} className="flex flex-col gap-2.5 border-t border-line py-7 md:grid md:grid-cols-[240px_1fr] md:gap-8 md:py-9">
              <span className="font-mono text-[13px] text-muted md:pt-1.5 md:text-sm">{e.period}</span>
              <div className="flex flex-col gap-2.5">
                <h3 className="font-display text-2xl font-bold tracking-[-0.02em] md:text-[28px]">{e.title}</h3>
                <span className="text-accent md:text-[17px]">{e.org}</span>
                <p className="max-w-[620px] leading-[1.65] text-muted md:mt-1.5 md:text-[17px]">{e.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}