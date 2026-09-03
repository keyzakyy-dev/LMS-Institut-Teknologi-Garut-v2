# LMS Landing Page — Institut Teknologi Garut

Landing page untuk sistem LMS (Learning Management System) Institut Teknologi Garut. Halaman ini menjadi pintu masuk utama bagi mahasiswa, dosen, calon mahasiswa, dan pengunjung umum sebelum masuk ke sistem pembelajaran.

---

## Tech Stack

| Bagian | Teknologi |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Bahasa | TypeScript 6 |
| UI Components | shadcn/ui (Radix UI) |
| Styling | Tailwind CSS v4 |
| Animasi | tw-animate-css |
| Routing | React Router v7 |
| i18n | react-i18next |
| Font Utama | Space Grotesk (heading), DM Sans (body) |

## Fitur

- **Landing Page** — 4 section: Navigasi, Hero, Program Studi (bento grid), Footer
- **Dwibahasa** — Indonesia & Inggris, switch via tombol header
- **Login Page** — Halaman login terpisah dengan form validasi
- **Responsif** — Desktop, tablet, dan mobile
- **Animasi Scroll** — Fade-in + translate saat elemen masuk viewport
- **Pattern Grid** — Dekorasi kotak-kotak halus di Hero & Login
- **Smooth Scroll** — Anchor link navigasi

## Struktur Proyek

```
frontend/
├── public/
│   └── favicon.png
├── src/
│   ├── assets/
│   │   ├── prodi/          # Gambar program studi
│   │   ├── hero.png
│   │   └── logo-itg.png
│   ├── components/
│   │   ├── ui/             # shadcn/ui components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── ProgramStudi.tsx
│   │   ├── Faq.tsx
│   │   ├── Footer.tsx
│   │   ├── Logo.tsx
│   │   └── LanguageSwitcher.tsx
│   ├── hooks/
│   │   └── use-in-view.ts
│   ├── i18n/
│   │   ├── id.json
│   │   ├── en.json
│   │   └── index.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   └── LoginPage.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
├── components.json
└── tsconfig*.json
```

## Cara Menjalankan

```bash
# Clone repositori
git clone <repo-url>
cd frontend

# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build production
npm run build

# Preview build
npm run preview
```

## Halaman

| Route | Halaman |
|---|---|
| `/` | Landing page (Hero, Program Studi, FAQ, Footer) |
| `/login` | Halaman login |

## Warna

Skema warna berdasarkan logo Institut Teknologi Garut:

| Token | Warna | Hex |
|---|---|---|
| Primary | Biru logo | `#383B97` |
| Primary light | Biru medium | `#5660BC` |
| Background | Putih | `#FFFFFF` |
| Muted | Abu netral | `oklch(0.968 0.001 286.375)` |

## Lisensi

© Institut Teknologi Garut. Seluruh hak cipta dilindungi.