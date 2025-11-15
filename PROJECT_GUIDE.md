# 🚀 One‑Page Website Guide (Next.js + shadcn/ui)

## 📋 Table of Contents

1. Project Overview
2. Sections & Order
3. Tech Stack
4. Project Structure
5. Components Plan
6. Implementation Steps
7. shadcn/ui Setup
8. Content & Data Model
9. Deployment
10. Architecture & Principles
11. Performance
12. SEO
13. Roadmap

---

## 🎯 Project Overview

Build a single, high‑performance one‑page website using Next.js (App Router) and shadcn/ui. The site features a minimal, modern aesthetic with smooth but restrained motion, strong accessibility, and fast load times. Navigation is anchored to in‑page sections.

---

## 🧭 Sections & Order

Navbar anchors link to these sections in order:

- Hero (`#home`)
- Pricing (`#pricing`) with 3 main pricing cards
- Portfolio (`#portfolio`) showcase grid
- Services (`#services`) overview
- About Us (`#about`) mission and brief bio
- Let’s Work Together (`#contact`) with Telegram, Discord, and Email
- Footer (`#footer`)

Navbar items: Home, Pricing, Portfolio, Services, About, Contact

---

## 🧰 Tech Stack

- Framework: `Next.js 14+` (App Router)
- UI Library: `shadcn/ui` (Radix UI + Tailwind)
- Styling: `Tailwind CSS`
- Icons: `lucide-react`
- Animations: `framer-motion` (optional, use sparingly)
- Language/Tools: `TypeScript`, `ESLint`, `Prettier`
- Hosting: `Vercel` (recommended)

Design principles: minimal, content‑first, accessible (WCAG 2.1), responsive, light/dark mode.

---

## 📁 Project Structure

```
src/
├─ app/
│  ├─ layout.tsx          # Root layout (theme, fonts, SEO, navbar/footer shell)
│  └─ page.tsx            # One-page assembly of sections
│
├─ components/
│  ├─ layout/
│  │  ├─ Navbar.tsx
│  │  └─ Footer.tsx
│  ├─ sections/
│  │  ├─ Hero.tsx
│  │  ├─ Pricing.tsx
│  │  ├─ Portfolio.tsx
│  │  ├─ Services.tsx
│  │  ├─ About.tsx
│  │  └─ Contact.tsx      # “Let’s Work Together” section
│  └─ ui/                 # shadcn components (generated folder)
│
├─ lib/
│  ├─ data.ts             # Content/config for cards, links, services
│  └─ utils.ts
│
├─ styles/
│  └─ globals.css
```

---

## 🧩 Components Plan

- Navbar
  - Sticky, translucent background; anchor links; mobile menu.
  - Links: `#home`, `#pricing`, `#portfolio`, `#services`, `#about`, `#contact`.

- Hero
  - Headline, sub‑copy, primary CTA to Contact; optional secondary CTA to Pricing.
  - Background can be a subtle gradient; keep motion minimal.

- Pricing (3 Cards)
  - Three tiers: e.g., Starter, Pro, Enterprise.
  - Each card: title, price, features list, CTA button.
  - Highlight middle plan with accent border/background.

- Portfolio
  - Responsive grid of projects (image, title, short tag). Optional modal or external link.

- Services
  - Brief service cards with icon + short description. Link to Contact.

- About Us
  - Short mission statement, values, and team highlights (very concise).

- Let’s Work Together (Contact)
  - Buttons/links: Telegram, Discord, Email.
  - Use `shadcn/ui` `Button`/`Card` with icons.

- Footer
  - Copyright, minimal nav, social icons.

---

## 🛠️ Implementation Steps

1) Create Next.js app (App Router + TS + Tailwind)

```bash
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir
```

2) Install dependencies

```bash
npm install lucide-react framer-motion
```

3) Setup shadcn/ui

```bash
npx shadcn@latest init
```

4) Add core shadcn components

```bash
npx shadcn@latest add button card badge input tabs separator navigation-menu
```

5) Build layout
- Add `components/layout/Navbar.tsx` with anchor links.
- Add `components/layout/Footer.tsx`.
- Wire both in `app/layout.tsx`.

6) Build sections
- Implement `Hero.tsx`, `Pricing.tsx`, `Portfolio.tsx`, `Services.tsx`, `About.tsx`, `Contact.tsx` using shadcn/ui primitives.
- Give each section an `id` matching its anchor.

7) Assemble page
- In `app/page.tsx`, import and render sections in required order.

8) Content and config
- Centralize data in `lib/data.ts` for pricing cards, services, portfolio items, and contact links.

9) Polish
- Add light/dark mode support (class strategy), responsive spacing, and basic SEO metadata.
- Keep animations subtle; respect `prefers-reduced-motion`.

10) Deploy
- Connect repo to Vercel and deploy production.

---

## 🧪 shadcn/ui Setup Notes

- Follow CLI prompts to configure Tailwind and component paths.
- Keep component overrides minimal; prefer Tailwind utilities for spacing and layout.
- Suggested primitives: `Button`, `Card`, `Badge`, `Separator`, `Tabs`, `NavigationMenu`.

Example usage patterns:
- Pricing cards: `Card` + `CardHeader`/`CardContent`/`CardFooter` with `Button` CTA.
- Contact buttons: `Button` with `variant="outline"` and icon from `lucide-react`.
- Services: simple grid of `Card` with icon + text.

---

## 🧱 Content & Data Model

lib/data.ts

```ts
export const pricing = [
  {
    name: 'Starter',
    price: '$99',
    features: ['Feature A', 'Feature B', 'Email support'],
    cta: { label: 'Get Started', href: '#contact' },
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$199',
    features: ['Everything in Starter', 'Feature C', 'Priority support'],
    cta: { label: 'Choose Pro', href: '#contact' },
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Custom scope', 'SLA', 'Dedicated support'],
    cta: { label: 'Contact Sales', href: '#contact' },
    highlight: false,
  },
];

export const services = [
  { title: 'Design', desc: 'Minimal, user‑first design system.' },
  { title: 'Development', desc: 'Fast, accessible Next.js builds.' },
  { title: 'Optimization', desc: 'SEO, performance, and analytics.' },
];

export const portfolio = [
  { title: 'Project One', image: '/images/one.jpg', href: '#' },
  { title: 'Project Two', image: '/images/two.jpg', href: '#' },
  { title: 'Project Three', image: '/images/three.jpg', href: '#' },
];

export const contactLinks = {
  telegram: 'https://t.me/yourhandle',
  discord: 'https://discord.com/users/yourid',
  email: 'mailto:hello@example.com',
};
```

---

## 🧠 Architecture & Principles

Design with reuse, clarity, and maintainability in mind. Favor composition, clear boundaries, and small, focused units.

- Reuse Strategy
  - Prefer composition over inheritance; assemble sections from small shadcn primitives (`Card`, `Button`, `Separator`).
  - Centralize content in `lib/data.ts`; keep section components presentational and stateless.
  - Share styles via utility functions and Tailwind composition; avoid duplicating class strings.
  - Create small, focused hooks for behaviors (e.g., `useInView`, `useReducedMotion`).

- shadcn/ui Patterns
  - Use `variant` and `size` props (via cva) to extend components without modification.
  - Leverage `asChild` to compose with Next.js `Link` while preserving semantics.
  - Keep component wrappers thin; prefer using shadcn primitives directly in sections.

- Design Patterns
  - Provider/Context: Theme and site‑wide config only; avoid overusing context.
  - Adapter: Wrap external services or APIs behind simple functions (e.g., contact link builders).
  - Facade: Single module (`lib/analytics.ts`) to abstract analytics calls.
  - Repository: If fetching data later, create a data access layer (`lib/repo/...`) decoupled from UI.
  - Strategy: When behaviors vary (e.g., pricing highlight rules), inject functions via props.

- SOLID for React + TS
  - Single Responsibility: Each component/section does one thing; UI logic separate from data/config.
  - Open/Closed: Extend via props and slots; avoid editing component internals for variants.
  - Liskov Substitution: Respect expected prop contracts; avoid narrowing types that break substitutability.
  - Interface Segregation: Prefer small prop interfaces and focused hooks over “god” props.
  - Dependency Inversion: Depend on abstractions (interfaces, callbacks) not concrete modules; inject handlers and config.

- Code Organization
  - `components/ui`: shadcn primitives; no business logic.
  - `components/sections`: presentational sections; pull data from `lib/data`.
  - `components/layout`: page shell (Navbar/Footer).
  - `lib`: data, utilities, adapters, and optional facades.
  - `hooks`: cross‑cutting behaviors (animations, viewport, theme helpers).

- Reuse Checklist
  - Before creating a new component: can an existing shadcn primitive + Tailwind compose the UI?
  - If similar elements repeat: extract a small presentational component or hook.
  - If props grow large: split into smaller components or introduce variant patterns (cva).

- Quality & Performance
  - Keep motion subtle and respect `prefers-reduced-motion`.
  - Only memoize (`React.memo`, `useMemo`) for proven hotspots; measure first.
  - Keep accessibility first: semantic elements, label controls, focus states.

---

## ⚡ Performance

- Core Web Vitals targets: LCP < 2.5s, CLS < 0.1, INP < 200ms.
- Prefer Server Components; make components Client only when needed.
- Images: use `next/image` with `sizes`; `priority` only for Hero; lazy-load others.
- Fonts: use `next/font`, limit weights, `display: swap`, preload only critical.
- Scripts: `next/script` with `strategy="afterInteractive"` or `"lazyOnload"`; defer analytics.
- Code splitting: dynamic import heavy/optional UI (e.g., complex animations); avoid unused libs.
- Caching: static generate the page; if dynamic later, set `revalidate` and cache headers.
- Motion: respect `prefers-reduced-motion`; keep transitions under ~300ms.
- Measure: run Lighthouse and Web Vitals on Vercel; fix regressions promptly.

---

## 🔎 SEO

- Metadata: define `metadata` in `app/layout.tsx` (title template, description, canonical).
- Social: Open Graph and Twitter Card with valid `og:image` (1200×630).
- Structured data: JSON‑LD for `Organization` and `WebSite` in layout.
- Semantics: single H1 in Hero; logical H2s per section; alt text for images.
- Navigation: anchor IDs for sections; manage focus on hash navigation; include `sitemap` and `robots.txt`.
- Mobile: set viewport meta; performance optimizations directly benefit SEO.

Lighthouse Checklist

- Performance
  - Use `next/image` with width/height or fill + sizes; lazy‑load non‑critical.
  - Self‑host fonts via `next/font`; limit variants; preconnect to font host if external.
  - Reduce JS: prefer Server Components; dynamic import heavy/optional parts.
  - Enable compression (Vercel brotli/gzip) and long‑lived caching for static assets.
  - Avoid layout shifts: set stable dimensions for media and UI.

- Accessibility
  - One H1 in Hero; logical heading order; label form controls.
  - Sufficient color contrast; focus outlines visible; keyboard navigation passes.
  - Respect `prefers-reduced-motion`; provide alt text for images.

- Best Practices
  - HTTPS only; no mixed content; avoid deprecated APIs and console errors.
  - Images not pixelated; proper aspect ratios; responsive viewport meta tag.

- SEO
  - Title and meta description present and unique.
  - Links crawlable; sitemap and robots configured; canonical set.
  - Social previews valid (OG/Twitter) with correct dimensions.

app/layout.tsx Examples

```tsx
// app/layout.tsx
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: { default: 'Acme Studio', template: '%s | Acme Studio' },
  description: 'Minimal, fast one‑page portfolio with pricing and services.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://example.com',
    title: 'Acme Studio',
    description: 'Minimal, fast one‑page portfolio with pricing and services.',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acme Studio',
    description: 'Minimal, fast one‑page portfolio with pricing and services.',
    images: ['/og.jpg'],
  },
  robots: { index: true, follow: true },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

const org = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Acme Studio',
  url: 'https://example.com',
  logo: 'https://example.com/logo.png',
  sameAs: [
    'https://twitter.com/acme',
    'https://www.linkedin.com/company/acme',
  ],
}

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Acme Studio',
  url: 'https://example.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://example.com/?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
        <Script id="ld-org" type="application/ld+json" strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
        />
        <Script id="ld-website" type="application/ld+json" strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
        />
      </body>
    </html>
  )
}
```

---

## 🗺️ Roadmap

Sprint 1 — Foundation & shadcn setup (1–2 days)
- Scaffold Next.js (App Router, TS, Tailwind), repo, ESLint/Prettier.
- Initialize shadcn/ui; add `button`, `card`, `separator`, `navigation-menu`.
- Create `Navbar`, `Footer`, wire `app/layout.tsx`.

Sprint 2 — Section skeletons & data model (1–2 days)
- Add sections with IDs: Hero, Pricing, Portfolio, Services, About, Contact.
- Centralize copy/config in `lib/data.ts`.
- Implement sticky Navbar with anchors + mobile menu.

Sprint 3 — Content & visuals (2–3 days)
- Implement Pricing (3 cards), Portfolio grid, Services cards, About copy, Contact CTAs.
- Icons (lucide-react), spacing, responsive layout, light/dark mode.
- Minimal motion with framer-motion where needed.

Sprint 4 — Performance & SEO (1–2 days)
- Convert images to `next/image`, mark Hero image `priority`.
- Add `metadata`, OG image, JSON‑LD; generate `sitemap` and `robots`.
- Dynamic import heavy parts; verify CWV targets with Lighthouse.

Sprint 5 — QA & Launch (1–2 days)
- A11y: keyboard, focus states, contrast, reduced motion.
- SEO checks, final copy pass, error/empty states.
- Vercel deploy, domain, analytics, and monitoring.

---

## 🚀 Deployment

- Add metadata in `app/layout.tsx` (title, description, Open Graph).
- Optimize images via Next.js `Image` component.
- Verify Core Web Vitals on Vercel.
- Configure custom domain and analytics.

---

## ✅ Summary

This project is a single one‑page website built with Next.js and shadcn/ui. It includes a navbar and the following sections in order: Hero, Pricing (3 cards), Portfolio, Services, About, Let’s Work Together (Telegram/Discord/Email), and Footer. The structure, component plan, and steps above guide a clean, minimal, production‑ready implementation.
