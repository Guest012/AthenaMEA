# ATHENA MEA — Project Context (Read This First)

> **Purpose:** Quick-load file for any AI assistant resuming work on this project.
> **Last updated:** March 9, 2026 — after complete website rebuild (v2).

---

## What Is This Project?

**ATHENA MEA** is a market entry advisory website for companies expanding into **India & the Middle East**. It's a marketing/branding site (not a SaaS app) — static pages, no auth, no database.

---

## Tech Stack

| Tech | Version | Notes |
|------|---------|-------|
| Next.js | 15.3.2 | App Router, `output: "export"` (static HTML) |
| React | 19.0.0 | Client components (`"use client"`) |
| Tailwind CSS | 3.4.17 | Extended with custom design tokens |
| Framer Motion | 12.23.12 | Available but CSS-first animation approach |
| Lucide React | 0.537+ | SVG icons (Footer, SocialMediaPanel) |
| RemixIcon | 4.5.0 | Icon font via CDN (components) |
| Fonts | Google Fonts | Self-hosted via `next/font` |

**Build:** `npm run dev` → localhost:3000 | `npm run build` → static `out/` folder

---

## Design System — Token Reference

### Fonts (defined in `app/layout.tsx`)
- **DM Sans** → `font-sans` (default body) — weights: 300–700 — var: `--font-dm-sans`
- **Space Grotesk** → `font-display` (headings) — weights: 400–700 — var: `--font-space-grotesk`
- **JetBrains Mono** → `font-mono` (code/data) — weights: 400, 500 — var: `--font-jetbrains`

### Colors (defined in `tailwind.config.js`)
**Brand (amber/gold):** 50–900 scale. **400: `#F8B830`** is PRIMARY.
**Midnight (dark neutrals):** 50–950 scale. **900: `#1A2332`** is standard dark bg. **950: `#0D1219`** is deepest.

### Key Custom Classes (globals.css)
**Buttons:** `.btn-primary` (gold gradient), `.btn-secondary` (white border), `.btn-ghost` (transparent border)
**Cards:** `.card-elevated` (white, shadow, hover lift)
**Glass:** `.glass` (light), `.glass-dark` (dark)
**Text:** `.gradient-text`, `.gradient-text-shimmer`
**Labels:** `.section-label` (light pill), `.section-label-dark` (dark pill)
**Patterns:** `.dot-pattern`, `.grid-pattern`, `.noise`

### Scroll Animation System (CSS-only, no library)
- `.reveal` / `.reveal.visible` — fade up on scroll
- `.reveal-left` / `.reveal-right` — horizontal reveals
- `.reveal-scale` — scale reveal
- `.stagger-children.visible` — auto-staggers child elements (80ms intervals)
- All driven by IntersectionObserver adding `visible` class
- All respect `prefers-reduced-motion`

### Tailwind Animation Tokens
`animate-fade-in`, `animate-fade-up`, `animate-slide-up`, `animate-scale-in`, `animate-float`, `animate-pulse-glow`, `animate-marquee`, `animate-reveal-up`, `animate-reveal-left`, `animate-line-grow`, `animate-text-shimmer`

### Shadows
`shadow-card`, `shadow-card-hover`, `shadow-elevated`, `shadow-dramatic`, `shadow-glow-amber`, `shadow-glow-blue`, `shadow-inner-glow`

---

## File Map

```
app/
├── layout.tsx              ← Root layout, fonts, Navbar + SocialMediaPanel
├── globals.css             ← Full design system CSS
├── page.tsx                ← Homepage composition
├── about-us/page.tsx       ← Storytelling about page (hero, mission, services, CTA)
├── case-studies/page.tsx   ← Immersive case study cards (Grupo Bimbo, ALVIC)
├── faq/page.tsx            ← Elegant accordion FAQ (7 items)
├── insights/page.tsx       ← Magazine layout (featured + 6 article grid + newsletter)
└── contact/page.tsx        ← Contact form (unchanged from original)

components/
├── Navbar.tsx              ← Premium glass nav, mega dropdown, mobile drawer, gold accent line
├── Hero.tsx                ← Cinematic asymmetric hero, animated shimmer heading, stat pills
├── Statistics.tsx          ← Asymmetric layout, animated counters, colored accent lines
├── Services.tsx            ← 6 cards in 3-col grid, colored accent bars, stagger reveal
├── About.tsx               ← Dark section, split layout, floating stat badges
├── Process.tsx             ← 4-step horizontal timeline, auto-cycling, connecting line
├── CTA.tsx                 ← Split form + social proof, consultation booking
├── Footer.tsx              ← 4-column dark footer, lucide icons, newsletter-ready
├── SocialMediaPanel.tsx    ← Minimal fixed side panel, lucide icons, vertical text
└── LogoCrousel.tsx         ← Infinite CSS marquee, grayscale→color hover, edge masks

Config:
├── tailwind.config.js      ← Full token system + animation keyframes
├── next.config.ts          ← Static export, image unoptimization
└── package.json            ← Dependencies
```

---

## Design Philosophy (v2 Rebuild)

1. **NOT a typical AI template** — no single-page scroll-everything, no generic infographics
2. **Multi-page architecture** — distinct pages for About, Case Studies, FAQs, Insights
3. **Asymmetric layouts** — content not always centered, creates visual interest
4. **Authority-establishing** — dark hero sections, premium typography, floating stat badges
5. **CSS-driven animations** — scroll reveals via IntersectionObserver + CSS classes (no heavy JS)
6. **Contextual Unsplash imagery** — India/Dubai skylines, business meetings, data dashboards
7. **Consistent page structure** — each subpage has: dark hero banner → content sections → CTA → Footer
8. **Color commitment** — brand-400 gold is the ONLY accent color, midnight-900/950 for all dark sections

---

## What's Been Done (as of March 9, 2026)

### v2 (Complete Rebuild) — CURRENT
- [x] Enhanced globals.css with scroll reveal system, patterns, new utilities
- [x] Enhanced tailwind.config.js with animation tokens, new shadows
- [x] New Navbar: gold accent line, premium glass effect, mega dropdown
- [x] New Hero: cinematic asymmetric layout, shimmer text, floating stat pills
- [x] New Statistics: asymmetric grid, animated counters, accent lines
- [x] New Services: 6 cards with colored accent bars, clean professional style
- [x] New About (homepage): dark section, floating badges, grid pattern
- [x] New Process: horizontal timeline, auto-cycling, connecting line
- [x] New CTA: split form + social proof cards
- [x] New Footer: 4-column, lucide icons, premium dark design
- [x] New About Us page: storytelling hero, mission split, services grid
- [x] New Case Studies page: immersive full-width cards (Grupo Bimbo, ALVIC)
- [x] New FAQ page: elegant accordion, single-open behavior
- [x] New Insights page: magazine layout with featured + grid + newsletter
- [x] TypeScript: ZERO errors (npx tsc --noEmit passes clean)

### Not Done / Known Issues
- [ ] Cannot build/serve in sandbox VM — run `npm run dev` locally
- [ ] Contact page unchanged from original
- [ ] No responsive testing — verify on mobile devices
- [ ] Images use external Unsplash URLs — consider downloading for production
- [ ] No Lighthouse/performance audit
- [ ] No SEO meta tags per page (only root layout has metadata)

---

## How to Resume Work

1. Read THIS file first
2. For token details → `tailwind.config.js` + `app/globals.css`
3. For component details → specific `components/*.tsx` file
4. Design system doc (v1) → `ATHENA-MEA-Design-System-Handoff.docx`
