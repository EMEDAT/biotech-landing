# NexaGenesis Biosciences — Animated Landing Page

**Round 1 — Creative Frontend Developer (Task 01)**

A premium, clinical-stage biotech landing page for a fictional Series-C epigenetics company. Built to demonstrate animation craft, scientific visual identity, and frontend engineering quality — not a template.

---

## Live Demo

Deployed on Vercel via the `EMEDAT24` branch.

---

## Setup

**Requirements:** Node.js 25 (see `.nvmrc`), npm

```bash
git clone https://github.com/EMEDAT/biotech-landing.git
cd biotech-landing
nvm use 25
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # ESLint
```

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v3 |
| Scroll / micro animations | Framer Motion |
| Complex timelines | GSAP + ScrollTrigger |
| 3D / WebGL | React Three Fiber + Drei |
| Icons | Lucide React |
| Fonts | Space Grotesk (headings) · Inter (body) |
| Deployment | Vercel |

---

## Design Approach

### Identity — Not a Template
The brief required a real-feeling biotech company. Every decision was made to avoid generic biotech patterns:

- **Hero visual:** A low-poly EZH2 protein mesh (React Three Fiber) — not a DNA helix. The specific protein target signals actual scientific identity.
- **Color discipline:** One primary accent (cyan `#00C2FF`). Emerald only for clinical data. Amber only for early-stage pipeline markers. Violet removed entirely. Restraint signals premium.
- **Typography:** Space Grotesk for headings (scientific, modern), Inter for body, JetBrains Mono for clinical identifiers (trial IDs, phase labels, metric values).
- **Copy:** All text is specific to epigenetics, PRC2 pathway biology, FDA designations, NCT trial IDs — not marketing filler.

### Reference: DeepPiction (Principle-Derived, Not Copied)
The design was informed by studying DeepPiction's approach:
- Near-black background (`#04080F`) with restrained single accent
- Generous whitespace as the primary premium signal (`py-28 md:py-36 lg:py-44`)
- Scientific visuals over generic 3D decorations
- Two signature animated moments; everything else is subtle scroll reveals

---

## Animation Architecture

### Two Signature Moments (everything else is subtle)

**1. Hero Protein Mesh — React Three Fiber**
- EZH2-style low-poly sphere with wireframe shell overlay
- Auto-rotates on Y axis (0.003 rad/frame)
- Mouse parallax: mesh tilts ±8° on X/Y with cursor position (desktop)
- Ambient cyan point light — no bloom
- Mobile: static gradient orb fallback (no R3F load on mobile)

**2. Pipeline SVG Track — GSAP + ScrollTrigger**
- Custom SVG horizontal track across all four pipeline stages
- `stroke-dashoffset` animation tied to scroll position (`scrub: 1`) — feels tactile
- Program nodes scale in as the track line reaches them
- Phase labels stagger in after each node appears
- Click to expand detail card per program

### Scroll Reveals — Framer Motion
- `SectionWrapper` wraps every section: `opacity: 0, y: 28` → `opacity: 1, y: 0`, 0.6s easeOut
- `staggerChildren: 0.08` on direct children
- `once: true` — no replay on scroll-back
- `useReducedMotion()` checked globally; all transitions disabled when user prefers reduced motion

### Platform Tab Navigator — Framer Motion
- Numbered tab system (01 / 02 / 03) for HELIX-AI™ platform modules
- `AnimatePresence` for content panel transitions between tabs
- On each tab activate: animated Zajno-inspired dendrogram SVG — central spine draws, three branches grow outward, sub-branches extend, terminal nodes pop in (all via `pathLength: 0 → 1` sequentially)

### Programs Section — Ruled Row List
- Click-to-expand rows with `AnimatePresence` height animation
- Left accent rule appears on expand (Framer Motion opacity)
- Watermark index numbers shift accent color on expand

### Stats Section — Display Numbers
- `AnimatedCounter` component: count-up on intersection via `useInView`
- Numbers at `clamp(3.5rem, 6vw, 6rem)` — white→cyan gradient
- Full-width ruled strip: no card boxes, only 1px dividers

### Glow Discipline
- Glow **only** on: hero protein mesh (ambient radial) + primary CTA button (hover pulse)
- Nowhere else — overused glow is the most reliable marker of a template

---

## Component Structure

```
src/
  app/
    layout.tsx              — root layout, font loading, structured metadata
    page.tsx                — section assembly only, no logic
    globals.css             — CSS custom properties, Tailwind base

  components/
    layout/
      Navbar.tsx            — fixed, blur/border on scroll, mobile hamburger
      Footer.tsx            — columns: Company / Science / Pipeline / Investors
    sections/
      HeroSection.tsx       — full-viewport, R3F protein mesh, GSAP entrance
      PartnersStrip.tsx     — CSS marquee, text wordmarks only
      AboutSection.tsx      — founding story + timeline + ruled metric strip
      PlatformSection.tsx   — numbered tab navigator + branching SVG
      PipelineSection.tsx   — GSAP SVG track (Signature #2)
      ProgramsSection.tsx   — ruled row list with expand/collapse
      StatsSection.tsx      — display-scale number strip
      CTASection.tsx        — contained dark card + contact form
    ui/
      GlowButton.tsx        — primary/ghost variants
      SectionWrapper.tsx    — Framer Motion scroll-reveal wrapper
      AnimatedCounter.tsx   — count-up on intersection
      PhaseTag.tsx          — phase pill: color-coded, no hover glow
      GradientText.tsx      — heading gradient mask
      TrialTicker.tsx       — scrolling clinical trial strip
    three/
      ProteinMesh.tsx       — R3F: EZH2 sphere, auto-rotate, mouse parallax
      ChromatinField.tsx    — canvas: chromatin fiber background (~4% opacity)

  hooks/
    useScrollProgress.ts
    useInView.ts
    useReducedMotion.ts     — respects prefers-reduced-motion globally

  lib/
    animations.ts           — shared Framer Motion variants
    constants.ts            — ALL site copy and data (no strings hardcoded in JSX)

  types/
    index.ts                — PipelineProgram, PlatformModule, Stat, TherapeuticProgram
```

---

## Performance

- All R3F / Three.js: `dynamic(() => import(...), { ssr: false })` — prevents SSR failure
- `LazyMotion` with `domAnimation` feature set — saves ~16kb vs full bundle
- Partner strip: CSS `@keyframes` only, zero JS
- `useReducedMotion()` checked at hook level, not scattered in components
- No `will-change` on more than 3 elements simultaneously
