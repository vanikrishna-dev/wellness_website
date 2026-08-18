# Bovi Wellness — Landing Page

Pixel-perfect implementation of the Bovi wellness brand landing page. Built with Vite + React + TypeScript + Tailwind CSS.

## Stack

- **Vite** — build tool / dev server
- **React 18 + TypeScript** — UI
- **Tailwind CSS v3** — styling with custom brand tokens
- **lucide-react** — icons

## Brand tokens

Defined in `tailwind.config.js`:

- `brand-green` — `#02643C`
- `brand-lime` — `#A8D500`
- `brand-bg` — `#F2F7F5`

Fonts: Instrument Serif (display) + Montserrat (sans).

## Getting started

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build
npm run preview  # preview production build
```

## Structure

```
src/
├── assets/                 # images (compressed)
├── components/
│   ├── layout/             # Header, Footer, AnnouncementBar, ShopMegaMenu
│   └── sections/           # Hero, Intro, SupportGrid, TrueCraft, Marquee,
│                           #  ProductFeature, ProductTabs, GoalsCard,
│                           #  Testimonial, BlogCards, FAQ, SocialGrid
├── App.tsx
├── main.tsx
└── index.css
```

## Responsive

Desktop is pixel-fixed. Mobile styles are layered on top via Tailwind's `md:` prefix — any class without a prefix applies mobile-only; any `md:` class is the desktop value. Header collapses into a hamburger + slide-in drawer below 768px.
