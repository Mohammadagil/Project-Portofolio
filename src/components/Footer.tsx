import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-360 flex-col gap-1 px-5 pb-8 pt-6 text-sm text-muted md:h-24 md:flex-row md:items-center md:justify-between md:px-24 md:py-0 md:text-[15px]">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <a href="#top" className="py-3 hover:text-accent">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
