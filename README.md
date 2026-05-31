# AquaZone – Landing Page

Landing page untuk supplier Neon Tetra aquascape.  
Dibangun dengan **React 19 + Vite**, siap dikonversi ke **Next.js**.

---

## Menjalankan secara lokal (Vite)

```bash
npm install
npm run dev
```

Buka http://localhost:5173

---

## Build production

```bash
npm run build
npm run preview
```

---

## Konversi ke Next.js

### 1. Buat project Next.js baru
```bash
npx create-next-app@latest aquazone-next --app --no-tailwind --no-typescript
```

### 2. Copy folder berikut
```
src/components/  →  app/components/
src/data/        →  app/data/      (atau lib/)
src/hooks/       →  app/hooks/
```

### 3. Buat app/globals.css
Copy isi `src/index.css` ke `app/globals.css`.

### 4. Buat app/layout.jsx
```jsx
import './globals.css';

export const metadata = {
  title: 'AquaZone – Neon Tetra untuk Aquascape',
  description: 'Supplier Neon Tetra terpercaya, langsung dari peternak lokal.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### 5. Buat app/page.jsx
```jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FishSection from './components/FishSection';
import Features from './components/Features';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FishSection />
        <Features />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
```

### 6. Tambahkan 'use client' di komponen yang pakai hooks
Tambahkan `'use client';` di baris pertama file-file berikut:
- `Navbar.jsx` (pakai useState, useEffect)
- `Hero.jsx` (pakai FishParticles yang pakai useMemo)
- `FishParticles.jsx` (pakai useMemo)
- `FishSection.jsx` (pakai useInView)
- `Features.jsx` (pakai useInView)
- `About.jsx` (pakai useInView)
- `CTA.jsx` (pakai useInView)

---

## Struktur file

```
src/
├── App.jsx                    ← entry point (jadi app/page.jsx di Next.js)
├── index.css                  ← global styles (jadi app/globals.css)
├── main.jsx                   ← Vite entry (tidak diperlukan di Next.js)
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── FishParticles.jsx
│   ├── FishSection.jsx
│   ├── Features.jsx
│   ├── About.jsx
│   ├── CTA.jsx
│   └── Footer.jsx
├── data/
│   └── constants.js           ← nomor WA, data ikan, data fitur
└── hooks/
    └── useInView.js           ← IntersectionObserver hook
```

---

## Konfigurasi utama

Edit `src/data/constants.js` untuk mengubah:
- Nomor WhatsApp (`WA_NUMBER`)
- Pesan default WA (`WA_MSG`)
- Data ikan dan harga (`FISH`)
- Konten keunggulan (`FEATURES`)
