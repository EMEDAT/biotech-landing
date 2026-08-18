# NexaGenesis Biosciences — Biotech Animated Landing Page

Round 1 submission for the Creative Frontend Developer role.

I built a full landing page for a fictional clinical-stage biotech company called NexaGenesis Biosciences. The brief said biotech — so I went deep: real-sounding science, real pipeline programs, real clinical trial IDs, FDA designations, the whole thing. I didn't want it to look like someone dropped a Framer template and called it a day.

---

## Getting it running

You'll need Node 25 (there's an `.nvmrc` in the root).

```bash
git clone https://github.com/EMEDAT/biotech-landing.git
cd biotech-landing
nvm use 25
npm install
npm run dev
```

Hit `http://localhost:3000` and you're good.

```bash
npm run build   # production build
npm run lint    # ESLint
```

---

## Stack

- **Next.js 14** (App Router) — SSR, file-based routing
- **TypeScript** strict mode throughout
- **Tailwind CSS** — no inline styles unless Framer/GSAP needs them
- **Framer Motion** — scroll reveals, tab transitions, SVG path animations
- **GSAP + ScrollTrigger** — the pipeline track (scroll-scrubbed SVG draw)
- **React Three Fiber + Drei** — the 3D protein mesh in the hero
- **Lucide React** — icons
- **Space Grotesk + Inter** — headings and body respectively

---

## Design decisions

The first thing I decided was: no DNA helix. Every biotech template uses a DNA helix. Instead, the hero has a low-poly EZH2 protein mesh — a specific epigenetic target that actually matters to the company's science. Small detail, but it's the difference between looking real and looking like a template.

Color-wise, I kept it to one primary accent (cyan). Emerald only for positive clinical data, amber only for early-stage pipeline markers. The restraint is intentional — overloading a palette with purples and blues and gradients everywhere is what makes sites feel generic. One accent, used well, reads premium.

I studied how DeepPiction approaches scientific design — not to copy it, but to pull out principles. Generous whitespace, near-black backgrounds, confidence in what you're NOT showing. That thinking is all over this build.

---

## Animation approach

I set two rules for myself upfront:
1. Two signature animation moments. Everything else is subtle.
2. If an animation doesn't serve the science narrative, cut it.

**Signature moment 1 — Hero protein mesh (React Three Fiber)**
The EZH2 mesh auto-rotates on the Y axis and tilts with your mouse position on desktop. There's an ambient cyan point light giving it some surface depth. On mobile it falls back to a static gradient orb — no Three.js loaded at all on mobile.

**Signature moment 2 — Pipeline SVG track (GSAP + ScrollTrigger)**
This one I'm proud of. The pipeline track is a custom SVG that draws left to right as you scroll — `stroke-dashoffset` tied to scroll position with `scrub: 1` so it feels completely tactile. Each program node pops in as the line reaches it. Click a node and a detail card expands with the mechanism of action, indication, trial ID. It's the most "this site is different" moment on the page.

**Everything else** uses Framer Motion scroll reveals — `opacity: 0, y: 28` fading up with staggered children. I used `once: true` everywhere so animations don't replay on scroll-back, which I think feels more polished.

**Platform section** has a numbered tab navigator (01 / 02 / 03) for the three platform modules. Each tab switch triggers a branching dendrogram SVG — lines grow outward from a central spine using `pathLength: 0 → 1`. This was inspired by a Zajno design I studied, but built from scratch.

**Stats section** — I scrapped the typical card grid and just used full-width ruled lines with the numbers at display scale. Giant `clamp(3.5rem, 6vw, 6rem)` with a white-to-cyan gradient. The numbers become the visual, not the container.

**Programs section** — ruled full-width rows instead of cards. Click a row to expand the detail text. The index number (01, 02, 03) shifts to the area's accent color on expand.

**CTA section** — single contained `rounded-2xl` card split into two columns: investor pitch on the left, a partner contact form on the right. Felt more functional and intentional than two bordered boxes with buttons.

---

## A few things I was strict about

- All copy lives in `lib/constants.ts` — nothing hardcoded in JSX
- All Three.js/R3F components are dynamically imported with `ssr: false` — SSR would silently break otherwise
- `useReducedMotion()` is checked globally and kills all transitions when the user has that preference set
- Glow only appears on the hero mesh and the primary CTA button hover. Nowhere else. Glow on cards and headings is a template tell.

---

## Project structure

```
src/
  app/               — layout, page, globals
  components/
    layout/          — Navbar, Footer
    sections/        — one file per section
    ui/              — reusable: GlowButton, AnimatedCounter, PhaseTag, etc.
    three/           — ProteinMesh (R3F), ChromatinField (canvas)
  hooks/             — useScrollProgress, useInView, useReducedMotion
  lib/               — animations.ts (Framer variants), constants.ts (all copy)
  types/             — shared TypeScript interfaces
```
