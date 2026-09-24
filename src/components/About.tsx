import { about } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-14 md:grid-cols-2 md:gap-24 md:px-24 md:py-24">
        <div className="flex flex-col gap-6 md:gap-7">
          <span className="font-mono text-[13px] text-accent md:text-sm">02 — About</span>
          <h2 className="font-display text-[38px] font-bold leading-[1.06] tracking-[-0.03em] md:text-[52px]">
            {about.title}
          </h2>
          {about.paragraphs.map((p) => (
            <p key={p} className="text-[17px] leading-[1.7] text-muted md:text-lg">{p}</p>
          ))}
        </div>
        <dl className="border-b border-line md:mt-2">
          {about.facts.map((f) => (
            <div key={f.label} className="flex flex-col gap-2 border-t border-line py-5 md:grid md:grid-cols-[140px_1fr] md:gap-6 md:py-6">
              <dt className="font-mono text-xs text-muted md:pt-1 md:text-[13px]">{f.label}</dt>
              <dd className="leading-relaxed md:text-[17px]">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}