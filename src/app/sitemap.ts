import type { MetadataRoute } from "next";
import { projects } from "@/data/content";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base },
    ...projects.map((p) => ({ url: `${base}/projects/${p.slug}` })),
  ];
}