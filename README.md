# Portofolio — Mohammad Agil Rofiqul Zein

Website portofolio pribadi untuk role **Fullstack / Backend Developer**. Berisi profil, daftar tech stack, project beserta halaman case study, pengalaman, dan form kontak yang mengirim email.

Dibuat sebagai bagian dari Harisenin Fullstack Developer Bootcamp.

## Tech stack

| Bagian | Teknologi |
|---|---|
| Framework | Next.js 16 (App Router), React 19 |
| Bahasa | TypeScript |
| Styling | Tailwind CSS v4 |
| Font | `next/font` (Bricolage Grotesque, DM Sans, JetBrains Mono) |
| Form kontak | Route handler Next.js + [Resend](https://resend.com) untuk kirim email, [Zod](https://zod.dev) untuk validasi |
| Deploy | Vercel |

## Fitur

- **Beranda** berisi Hero, Stack, Projects, About, Experience, dan Contact dalam satu halaman, dengan navbar sticky.
- **Halaman case study** per project di `/projects/[slug]`, dibuat statis saat build lewat `generateStaticParams`.
- **Form kontak** dengan validasi di server, pembatas 3 pesan per 10 menit per IP, dan kolom jebakan (honeypot) untuk bot.
- **SEO**: metadata dan Open Graph, `sitemap.xml` otomatis, serta favicon dari `src/app/icon.svg`.
- **Responsif** untuk HP dan desktop.

## Struktur folder

```
src/
├── app/
│   ├── page.tsx                  # beranda: menyusun semua section
│   ├── layout.tsx                # layout utama, font, metadata
│   ├── globals.css               # import Tailwind + token warna & font (@theme)
│   ├── icon.svg                  # favicon
│   ├── sitemap.ts                # sitemap.xml
│   ├── projects/[slug]/page.tsx  # halaman detail project
│   └── api/contact/route.ts      # API form kontak (POST)
├── components/                   # Navbar, Hero, StackStrip, Projects, ProjectCard,
│                                 # About, Experience, Contact, Footer
├── data/content.ts               # SEMUA isi teks & data project
└── lib/validation.ts             # skema Zod untuk form kontak
public/images/                    # foto profil & gambar project
```

## Menjalankan di komputer sendiri

**Syarat:** Node.js 20.9 atau lebih baru, dan npm.

```bash
git clone https://github.com/Mohammadagil/Project-Portofolio.git
cd Project-Portofolio
npm install
```

Salin `.env.example` menjadi `.env`, lalu isi nilainya:

```env
RESEND_API_KEY=re_xxxxxxxx
CONTACT_TO_EMAIL=email-tujuan@example.com
CONTACT_FROM_EMAIL=Portfolio <onboarding@resend.dev>
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

| Variabel | Keterangan |
|---|---|
| `RESEND_API_KEY` | API key dari dashboard Resend. Tanpa ini form kontak mengembalikan error 500, tapi halaman lain tetap jalan. |
| `CONTACT_TO_EMAIL` | Email yang menerima pesan dari form kontak. |
| `CONTACT_FROM_EMAIL` | Pengirim email. `onboarding@resend.dev` hanya bisa mengirim ke email akun Resend sendiri. Jangan dibiarkan kosong: hapus barisnya kalau tidak dipakai. |
| `NEXT_PUBLIC_SITE_URL` | URL website tanpa `/` di akhir. Dipakai untuk Open Graph dan sitemap. |

Jalankan server development:

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

### Script

| Perintah | Kegunaan |
|---|---|
| `npm run dev` | Server development dengan hot reload |
| `npm run lint` | Cek kode dengan ESLint |
| `npm run build` | Build production (sekaligus cek TypeScript) |
| `npm run start` | Menjalankan hasil build (jalankan `build` dulu) |

## Mengubah isi portofolio

Semua teks dan data ada di [`src/data/content.ts`](src/data/content.ts). Komponen hanya menampilkannya, jadi untuk mengganti isi website cukup edit file ini.

**Menambah project:** tambahkan objek baru ke array `projects`:

```ts
{
  slug: "nama-project",                // dipakai di URL: /projects/nama-project
  title: "Nama Project",
  category: "Backend · REST API",
  summary: "Satu kalimat ringkasan.",
  tags: ["Node.js", "MySQL"],
  image: "/images/projects/nama-project.png",  // opsional
  imageAlt: "Deskripsi gambar",                // opsional
  repos: [{ label: "GitHub", url: "https://github.com/..." }],
  liveUrl: "https://...",              // opsional
  role: "Backend Developer",
  timeline: "Jan 2026 — Mar 2026",
  overview: ["Paragraf masalah.", "Paragraf bagian yang dikerjakan."],
  decisions: [{ title: "Keputusan teknis", text: "Alasannya." }],  // boleh []
}
```

- Gambar disimpan di `public/images/projects/` dengan rasio sekitar **5:2** (misalnya 1500×600 px). Kalau `image` tidak diisi, kartu menampilkan placeholder.
- Halaman `/projects/nama-project` dibuat otomatis saat build.

**Mengubah warna atau font:** edit blok `@theme` di [`src/app/globals.css`](src/app/globals.css). Misalnya `--color-accent` otomatis menjadi class `bg-accent`, `text-accent`, `border-accent`.

## Alur branch & deploy

```
main        → tempat edit & commit sehari-hari
  ↓ merge
staging     → uji coba (Vercel Preview)
  ↓ merge
production  → website utama (Vercel Production)
```

```bash
# 1. kerja di main
git checkout main
git add . && git commit -m "..." && git push

# 2. naikkan ke staging, lalu cek di URL preview
git checkout staging && git merge main && git push

# 3. kalau sudah oke, naikkan ke production
git checkout production && git merge staging && git push
git checkout main
```

Perubahan selalu mengalir satu arah: `main` → `staging` → `production`. Jangan commit langsung di `staging` atau `production`.

**Pengaturan Vercel:**
- *Production Branch* diatur ke `production`.
- Environment variables diisi terpisah untuk **Production** dan **Preview** (`staging`). `NEXT_PUBLIC_SITE_URL` diisi dengan URL masing-masing.
- Setelah mengubah environment variable, lakukan **Redeploy**.

## Langkah pembuatan

1. **Setup:** membuat project dengan `create-next-app` (TypeScript, Tailwind CSS, ESLint, App Router, folder `src/`).
2. **Tema:** mendefinisikan token warna dan font di `@theme` pada `globals.css`, lalu memuat font Google lewat `next/font` di `layout.tsx`.
3. **Data:** memisahkan semua isi ke `src/data/content.ts` dengan tipe `Project`, supaya konten bisa diubah tanpa menyentuh komponen.
4. **Komponen dasar:** membuat Navbar (dengan menu mobile), Hero, StackStrip, dan Footer.
5. **Beranda:** menyusun section Projects (dengan `ProjectCard`), About, dan Experience di `page.tsx`.
6. **Case study:** membuat halaman dinamis `projects/[slug]` dengan `generateStaticParams`, `generateMetadata`, dan `notFound()`.
7. **Form kontak:** membuat komponen Contact dan route `api/contact` yang memvalidasi input dengan Zod, membatasi jumlah kiriman, lalu mengirim email lewat Resend.
8. **Penyempurnaan:** navbar sticky, favicon, sitemap, metadata Open Graph, dan gambar opsional dengan placeholder.
9. **Deploy:** menghubungkan repo ke Vercel dengan alur branch `main` → `staging` → `production`.

## Kontak

- GitHub: [Mohammadagil](https://github.com/Mohammadagil)
- LinkedIn: [mohammad-agil-rofiqul-zein](https://www.linkedin.com/in/mohammad-agil-rofiqul-zein/)
