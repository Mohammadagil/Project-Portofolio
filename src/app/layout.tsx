import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="bg-canvas font-sans text-fg antialiased">{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Mohammad Agil Rofiqul Zein — Fullstack & Backend Developer",
  description: "Portfolio of Mohammad Agil Rofiqul Zein: Laravel, Node.js, and Next.js projects.",
  openGraph: {
    title: "Mohammad Agil Rofiqul Zein — Fullstack & Backend Developer",
    description: "Laravel, Node.js, and Next.js projects.",
    type: "website",
  },
};
