import { stack } from "@/data/content";

export default function StackStrip() {
  return (
    <section className="border-y border-line">
      <div className="mx-auto flex max-w-360 flex-col gap-4 px-5 py-7 md:flex-row md:items-center md:gap-10 md:px-24 md:py-8">
        <span className="shrink-0 font-mono text-xs uppercase tracking-[0.08em] text-muted md:text-[13px]">
          Stack
        </span>
        <ul className="flex flex-wrap gap-2.5 md:gap-3">
          {stack.map((s) => (
            <li key={s} className="rounded-full border border-line-strong px-3.5 py-1.5 font-mono text-[13px] md:px-4 md:py-2 md:text-sm">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}