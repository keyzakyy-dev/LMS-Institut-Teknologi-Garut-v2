# Product Requirements Document (PRD)
# Website LMS — Institut Teknologi Garut (Landing Page)

## 1. Informasi Dokumen

| Item | Keterangan |
|---|---|
| Nama Produk | Landing Page LMS Institut Teknologi Garut |
| Versi Dokumen | 1.1 |
| Tanggal | 3 September 2026 |
| Status | Draft |
| Pemilik Produk | Tim Digital / IT Institut Teknologi Garut |
| Tipe Dokumen | Product Requirements Document |

---

## 2. Latar Belakang & Tujuan

### 2.1 Latar Belakang
Institut Teknologi Garut membutuhkan halaman muka (landing page) untuk sistem LMS (Learning Management System) kampus. Halaman ini menjadi pintu masuk pertama bagi mahasiswa, calon mahasiswa, dosen, dan pengunjung umum sebelum masuk ke sistem pembelajaran, sekaligus menjadi media informasi mengenai program studi dan pengumuman kampus.

### 2.2 Tujuan
- Menyediakan akses cepat dan jelas menuju sistem LMS bagi mahasiswa dan dosen.
- Memperkenalkan program studi yang tersedia di Institut Teknologi Garut.
- Menyampaikan pengumuman/informasi kampus secara terpusat.
- Mendukung aksesibilitas dua bahasa (Indonesia & Inggris) untuk menjangkau audiens yang lebih luas.
- Membangun citra digital kampus yang modern, profesional, dan mudah digunakan.

### 2.3 Tujuan Bisnis
- Meningkatkan efisiensi proses login mahasiswa/dosen ke LMS.
- Mengurangi pertanyaan repetitif terkait kendala login melalui jalur bantuan yang jelas.
- Meningkatkan keterlihatan (visibility) program studi untuk mendukung strategi PMB (Penerimaan Mahasiswa Baru).

---

## 3. Target Pengguna

| Persona | Deskripsi | Kebutuhan Utama |
|---|---|---|
| Mahasiswa Aktif | Menggunakan LMS untuk perkuliahan harian | Login cepat, akses jelas |
| Dosen | Mengelola kelas & materi di LMS | Login cepat, akses jelas |
| Calon Mahasiswa / Orang Tua | Mencari info program studi | Informasi program studi yang menarik & jelas |
| Pengunjung Umum | Mencari info kampus/pengumuman | Navigasi mudah, info pengumuman terkini |
| Pengguna Internasional | Kebutuhan bahasa Inggris | Language switcher (ID/EN) |

---

## 4. Ruang Lingkup

**Termasuk (In Scope):**
- Halaman landing page LMS (4 section: Navigasi, Hero, Program Studi, Footer)
- Dukungan dwibahasa (ID/EN) pada UI landing page
- Tautan menuju halaman login LMS (sistem LMS itu sendiri di luar cakupan dokumen ini)
- Desain responsif (desktop, tablet, mobile)
- Layanan backend untuk data dinamis (mis. pengumuman, data program studi)

**Tidak Termasuk (Out of Scope):**
- Pengembangan sistem LMS (dashboard kelas, nilai, materi, dsb.) — diasumsikan sudah ada/terpisah
- Modul pembelajaran, ujian, dan fitur akademik lain di dalam LMS
- CMS pengelolaan konten pengumuman berbasis GUI (kecuali ditentukan lain oleh tim kampus)

---

## 5. Arsitektur Teknologi (Tech Stack)

### 5.1 Frontend

| Komponen | Teknologi |
|---|---|
| Framework | React (dengan Vite sebagai build tool/dev server) |
| UI Component Library | shadcn/ui |
| Styling | Tailwind CSS (dasar dari shadcn/ui) |
| Skema Warna | Kombinasi putih (base/background) dan sky (aksen/primary), mengikuti palet default tema "sky" ala shadcn/ui |
| State Management | React state/hooks (Context API atau library ringan seperti Zustand, opsional sesuai kompleksitas) |
| Routing | React Router |
| i18n (dwibahasa) | Library i18n untuk React (mis. react-i18next) untuk switching ID/EN |

### 5.2 Backend

| Komponen | Teknologi |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Arsitektur API | RESTful API (JSON) menghubungkan frontend dengan data pengumuman, program studi, dsb. |
| Autentikasi (jika diperlukan) | JWT untuk sesi terbatas terkait redirect/validasi ke LMS (detail lebih lanjut mengikuti kebutuhan integrasi dengan sistem LMS existing) |

### 5.3 Database

| Komponen | Teknologi |
|---|---|
| Jenis Database | MySQL |
| Contoh Entitas Data | `program_studi`, `pengumuman`, `pengaturan_kontak`, `pengguna` (jika autentikasi ditangani di sini) |

### 5.4 Diagram Alur Tingkat Tinggi

```
[React + Vite + shadcn/ui]  <-- REST API (JSON) -->  [Node.js/Express]  <-->  [MySQL]
        (Frontend)                                       (Backend)          (Database)
```

### 5.5 Pertimbangan Deployment (indikatif)
- Frontend: hasil build Vite (static assets) dapat di-hosting terpisah (mis. Nginx/static hosting) atau disajikan lewat Express.
- Backend: dijalankan sebagai service Node.js (PM2/Docker) dengan koneksi ke instance MySQL.
- Environment terpisah untuk development, staging, dan production disarankan.

---

## 6. Kebutuhan Fungsional per Elemen

### 6.1 Navigasi (Header)

**Layout:** Logo kampus di kiri, menu navigasi + kontrol di kanan. Sticky di atas layar saat scroll.

| ID | Requirement | Deskripsi |
|---|---|---|
| NAV-01 | Logo kampus | Menampilkan logo Institut Teknologi Garut di pojok kiri, klik logo mengarah ke Beranda |
| NAV-02 | Menu Beranda | Tautan ke halaman utama |
| NAV-03 | Menu Pengumuman | Tautan ke halaman/daftar pengumuman kampus (data diambil dari API backend) |
| NAV-04 | Menu Program Studi | Tautan/dropdown ke daftar program studi (data diambil dari API backend) |
| NAV-05 | Pilihan Bahasa | Toggle/dropdown ID ⇄ EN, mengubah seluruh teks UI landing page sesuai bahasa terpilih |
| NAV-06 | Tombol Login | Tombol menonjol (primary button, warna sky) mengarah ke halaman login LMS |
| NAV-07 | Responsif Mobile | Menu berubah menjadi hamburger menu (komponen shadcn/ui `Sheet`/`Drawer`) pada layar < 768px |
| NAV-08 | Sticky Navbar | Navbar tetap terlihat saat halaman di-scroll ke bawah |

**Acceptance Criteria:**
- Semua menu dapat diakses via keyboard (aksesibilitas)
- Perubahan bahasa tidak me-reload seluruh halaman
- Tombol Login memiliki kontras warna yang jelas (sky di atas latar putih)

---

### 6.2 Hero Section

**Layout:** Dua kolom — teks di kiri (headline, deskripsi, 2 tombol CTA), gambar berbentuk kotak rounded di kanan.

| ID | Requirement | Deskripsi |
|---|---|---|
| HERO-01 | Headline | Judul utama yang menonjol, menyampaikan value proposition LMS ITG |
| HERO-02 | Deskripsi singkat | 1–2 kalimat pendukung headline di bawahnya |
| HERO-03 | CTA Primer — "Mulai Belajar" | Tombol `Button` (variant primary/solid, warna sky) shadcn/ui, mengarah ke halaman login/dashboard LMS |
| HERO-04 | CTA Sekunder — "Butuh Bantuan Login?" | Tombol `Button` (variant outline/ghost) shadcn/ui, mengarah ke halaman FAQ/bantuan atau membuka `Dialog` |
| HERO-05 | Gambar Hero | Gambar/ilustrasi dengan sudut membulat (rounded-xl/2xl) di sisi kanan |
| HERO-06 | Responsif | Pada mobile, gambar & teks disusun vertikal (teks di atas, gambar di bawah atau sebaliknya) |

**Acceptance Criteria:**
- CTA utama memiliki 1 aksi yang jelas dan tidak ambigu
- Gambar memiliki alt text untuk aksesibilitas
- Elemen tetap seimbang secara visual di berbagai ukuran layar

---

### 6.3 Section Program Studi (Bento Box Design)

**Layout:** Grid ala bento box (kartu `Card` shadcn/ui dengan ukuran/posisi bervariasi, tidak seragam) menampilkan 5 program studi, data diambil dari API `/api/program-studi`:
1. Teknik Informatika
2. Arsitektur
3. Sistem Informasi
4. Teknik Sipil
5. Teknik Industri

| ID | Requirement | Deskripsi |
|---|---|---|
| PRODI-01 | Judul Section | Judul & deskripsi singkat section (mis. "Program Studi Kami") |
| PRODI-02 | Kartu Program Studi | Komponen `Card` berisi: ikon/gambar representatif, nama program studi, deskripsi singkat |
| PRODI-03 | Bento Grid Layout | Kartu disusun dengan ukuran bervariasi (CSS Grid/Tailwind, 1 kartu besar unggulan + kartu-kartu lain lebih kecil) |
| PRODI-04 | Interaksi Hover | Efek hover (shadow/scale halus, aksen sky) menandakan kartu bisa diklik |
| PRODI-05 | Link Detail | Setiap kartu dapat diklik menuju halaman detail program studi |
| PRODI-06 | Responsif | Grid menyesuaikan menjadi 1–2 kolom pada mobile, tetap mempertahankan hierarki visual |

**Acceptance Criteria:**
- Semua 5 program studi tampil tanpa terpotong di seluruh breakpoint
- Kartu memiliki target klik yang cukup besar untuk mobile (min. 44x44px sesuai standar aksesibilitas)
- Data kartu dapat diperbarui dari backend tanpa perubahan kode frontend (data-driven)

---

### 6.4 Footer

**Layout:** 3 kolom sejajar.

| ID | Requirement | Deskripsi |
|---|---|---|
| FOOT-01 | Kolom Kiri — Identitas | Logo kampus + deskripsi singkat tentang Institut Teknologi Garut |
| FOOT-02 | Kolom Tengah — Navigasi | Daftar tautan seputar website (Beranda, Pengumuman, Program Studi, Tentang Kami, dll.) |
| FOOT-03 | Kolom Kanan — Kontak | Judul "Hubungi Kami" + info kontak (alamat, email, telepon) + ikon sosial media (Instagram, Facebook, YouTube, dll.) |
| FOOT-04 | Copyright | Baris bawah footer berisi teks hak cipta & tahun berjalan |
| FOOT-05 | Responsif | 3 kolom menjadi tersusun vertikal (stack) pada layar mobile |

**Acceptance Criteria:**
- Ikon sosial media membuka tautan di tab baru
- Semua tautan navigasi footer valid dan konsisten dengan menu utama

---

## 7. Kebutuhan Non-Fungsional

| Kategori | Kebutuhan |
|---|---|
| Responsif | Mendukung desktop, tablet, dan mobile (breakpoint umum: 1440px, 1024px, 768px, 375px) |
| Performa | Waktu muat halaman awal < 3 detik pada koneksi standar; manfaatkan code-splitting bawaan Vite |
| Aksesibilitas | Mengikuti panduan WCAG 2.1 level AA (kontras warna, navigasi keyboard, alt text); komponen shadcn/ui dibangun di atas Radix UI yang accessible secara default |
| Multi-bahasa | Struktur konten mendukung i18n (Bahasa Indonesia & English) |
| Kompatibilitas Browser | Chrome, Firefox, Safari, Edge (2 versi terakhir) |
| SEO | Meta title, meta description, struktur heading yang benar; pertimbangkan SSR/prerender jika SEO jadi prioritas tinggi (Vite SPA murni kurang optimal untuk SEO) |
| Keamanan | HTTPS end-to-end, validasi & sanitasi input di sisi Express, proteksi terhadap SQL Injection (gunakan parameterized query/ORM seperti Sequelize atau Prisma untuk MySQL) |
| Skalabilitas API | REST API backend didesain stateless agar mudah di-scale secara horizontal |

---

## 8. Panduan Desain (Design Guidelines)

- **Gaya visual:** Modern, bersih, dengan sudut membulat (rounded corners) sebagai ciri khas (hero image, kartu program studi, tombol), konsisten dengan gaya default shadcn/ui.
- **Bento Box Grid:** Digunakan khusus pada section Program Studi — kombinasi kartu besar & kecil untuk menciptakan ritme visual yang tidak monoton.
- **Skema Warna:** Kombinasi **putih** sebagai warna dasar/background utama dan **sky** (biru muda) sebagai warna aksen/primary — mengikuti palet tema "sky" shadcn/ui (mis. `sky-500`/`sky-600` untuk tombol & elemen aktif, `sky-50`/`sky-100` untuk background aksen ringan, putih/`neutral-50` untuk background utama, `neutral-900` untuk teks).
- **Komponen UI:** Memanfaatkan komponen siap pakai shadcn/ui (`Button`, `Card`, `NavigationMenu`, `Sheet`, `DropdownMenu`, `Dialog`, dll.) agar konsisten dan mempercepat pengembangan.
- **Tipografi:** Font sans-serif modern (bawaan shadcn/ui, mis. Inter), hierarki jelas antara headline, subjudul, dan body text.
- **Konsistensi tombol:** Tombol primer (solid, warna sky) untuk aksi utama, tombol sekunder (outline/ghost) untuk aksi pendukung — diterapkan konsisten di Navigasi dan Hero.

---

## 9. Asumsi & Batasan

- Sistem LMS (proses belajar-mengajar) sudah tersedia secara terpisah; halaman ini hanya berfungsi sebagai landing page/pintu masuk yang terhubung ke backend Node.js/Express miliknya sendiri.
- Konten pengumuman dan data program studi dikelola melalui database MySQL yang diakses lewat REST API; pengelolaan konten (create/update) melalui endpoint API atau tool admin sederhana (di luar cakupan versi awal, kecuali ditentukan lain).
- Logo, warna resmi, dan aset brand Institut Teknologi Garut akan disediakan oleh pihak kampus, digunakan sebagai pelengkap skema warna putih & sky.
- Jumlah program studi yang ditampilkan di section Bento Box saat ini tetap pada 5 program studi sesuai kebutuhan awal; penambahan program studi baru cukup dilakukan lewat data di database tanpa perubahan kode.

---

## 10. Metrik Keberhasilan (Success Metrics)

| Metrik | Target Indikatif |
|---|---|
| Click-through rate tombol "Mulai Belajar" | > 40% pengunjung yang login |
| Bounce rate halaman utama | < 45% |
| Rata-rata waktu di halaman | > 45 detik |
| Penggunaan fitur ganti bahasa | Dipantau sebagai indikator kebutuhan pengguna internasional |
| Klik ke halaman Program Studi | > 20% dari total pengunjung |
| Waktu respons API backend | < 300ms rata-rata untuk endpoint data (pengumuman, program studi) |

---

## 11. Pertanyaan Terbuka (Open Questions)

1. Apakah pengumuman ditampilkan sebagai daftar statis atau terhubung penuh ke database MySQL (dinamis, dengan endpoint API)?
2. Apakah tombol "Butuh Bantuan Login?" mengarah ke halaman FAQ terpisah atau modal (`Dialog`) di halaman yang sama?
3. Apakah dropdown "Program Studi" di navigasi menampilkan daftar lengkap, atau hanya tautan ke section/halaman program studi?
4. Apakah dibutuhkan halaman detail terpisah untuk masing-masing program studi, atau cukup deskripsi singkat di kartu bento box?
5. Apa saja platform sosial media resmi kampus yang perlu ditampilkan di footer?
6. Apakah dibutuhkan SSR/prerendering (mis. Next.js) untuk kebutuhan SEO, atau SPA berbasis Vite sudah cukup untuk kebutuhan saat ini?
7. Apakah autentikasi login LMS ditangani sepenuhnya oleh sistem LMS existing, atau backend Express baru ini juga berperan dalam proses autentikasi/redirect?
8. ORM apa yang akan digunakan untuk mengakses MySQL (mis. Prisma, Sequelize, atau native query)?

---

*Dokumen ini adalah draf awal dan dapat direvisi sesuai masukan dari tim stakeholder Institut Teknologi Garut.*
