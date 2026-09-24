"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/#projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-line">
      <div className="mx-auto flex h-16 max-w-360 items-center justify-between px-5 md:h-22 md:px-24">
        <Link href="/" className="font-mono text-lg font-medium">
          agil<span className="text-accent">.dev</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="py-3 text-muted hover:text-fg">
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="rounded-full border border-line-strong px-5 py-3 font-medium hover:border-accent"
          >
            Get in touch
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex size-11 items-center justify-center rounded-xl border border-line-strong md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
            <path d="M3 6h14M3 10h14M3 14h14" />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-line px-5 py-2 md:hidden">
          {[...links, { href: "/#contact", label: "Get in touch" }].map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-muted hover:text-fg">
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}