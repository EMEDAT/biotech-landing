# CLAUDE.md — NexaGenesis Biosciences Landing Page
> Architectural contract for this project. All code generation must align with this document.
> Do not deviate from decisions locked here without explicit user approval.
>
> PRIME DIRECTIVE: Every decision — copy, layout, interaction, visual — must be held against one test:
> "Does this look like a premium, real-world Series-B biotech company, or a template?"
> If it reads generic, rework it.

---

## 1. Project Identity

**Company Name:** NexaGenesis Biosciences  
**Tagline:** *Precision Medicine at the Molecular Scale*  
**Therapeutic Focus:** Epigenetic reprogramming for oncology and rare monogenic disease  
**Stage:** Clinical-stage (fictional Series-C biotech, ~$380M raised)  
**Origin story:** Spin-out from collaborative epigenomics research between Stanford and the Broad Institute (fictional)  
**Audience:** Investors, scientific partners, recruitment targets — not general consumers

This is not a "biotech startup with a cool idea." It is a clinical-stage company with FDA-designated programs and peer-reviewed science. Every word should reflect that weight.

---

## 2. Tech Stack (locked)

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 14 (App Router) | SSR, file-based routing, Image optimisation |
| Language | TypeScript (strict) | Type safety across all components |
| Styling | Tailwind CSS v3 | Utility-first, purges unused CSS |
| Animation (scroll / micro) | Framer Motion | Declarative, React-native, scroll-triggers |
| Animation (complex timelines) | GSAP + ScrollTrigger | Fine-grained control over staggered sequences |
| 3D / WebGL (Hero) | React Three Fiber + Drei | Three.js in React without boilerplate |
| Font | Space Grotesk (headings) + Inter (body) | Scientific, modern, legible at all sizes |
| Icons | Lucide React | Lightweight, consistent |
| Deployment | Vercel | Zero-config Next.js |

No other major libraries without approval.

---

## 3. Brand & Design System

### Reference Insights (Studied — Do Not Copy, Apply as Principles)
- **DeepPiction**: Scientific credibility through *restraint*. Near-black background, white/neutral grey text, ONE restrained accent. Generous whitespace IS the premium signal. Confident absence of decorative excess. Before/after scientific imagery over generic 3D.
- **Zajno shot 21281292**: Cinematic hero animation using an organic *branching tree / dendrogram* growth motif — not a DNA helix. Animation is the narrative, not decoration. One signature animated moment dominates.
- **Award-winning biotech (collective)**: 1–2 accent colors maximum. Custom scientific visuals always beat generic particles. Two signature animated moments per page; everything else = subtle scroll reveals and hover states only.

**Rule derived from references:** If an animation or visual element does not serve the scientific narrative of NexaGenesis, remove it. Restraint = premium. Clutter = template.

---

### Color Palette — Simplified (Reference-Informed)
Four roles only. Do not add colors beyond this.
```
Background:         #04080F   (near-black, blue undertone — deep, clinical)
Surface:            #080F1A   (card backgrounds, alternating sections)
Surface Elevated:   #0D1626   (hover states)
Border Subtle:      #142035   (default borders)
Border Active:      #1E3554   (hover borders, focused states)

PRIMARY Cyan:       #00C2FF   (the one brand accent — CTAs, active states, hero glow ONLY)
DATA Emerald:       #0EA96A   (clinical data ONLY — Phase II/III markers, positive metrics)
STAGE Amber:        #D97706   (pipeline Discovery/IND markers ONLY — not a general accent)

Text Primary:       #EEF4FF   (headings)
Text Secondary:     #8BA4C0   (body — deliberate blue-grey, not warm grey)
Text Muted:         #3D5470   (labels, legal, captions)
```
Violet is removed entirely. Three accent roles only. The discipline of one primary accent is what makes premium biotech sites look premium.

---

### Typography Scale
```
Display (hero):     7xl–9xl, font-bold, tracking-tight (-0.04em), Space Grotesk
H2 (section):       4xl–5xl, font-semibold, tracking-tight, Space Grotesk
H3 (card/module):   2xl, font-semibold, Space Grotesk
Body Large:         lg, font-normal, Inter, leading-relaxed (1.75)
Body:               base, font-normal, Inter, leading-relaxed
Label / Tag:        xs–sm, font-semibold, uppercase, tracking-widest (0.15em), Inter
Clinical / Data:    sm, font-mono (JetBrains Mono) — trial IDs, phase labels, metric values
```

---

### Visual Language — What Makes This NOT a Template

**SIGNATURE VISUAL 1 — Hero:** A rotating **EZH2 protein complex** mesh (low-poly sphere surface with wireframe overlay, not a DNA helix). DNA helices are on every template. A specific protein target signals actual scientific identity. Auto-rotates on Y axis, mouse parallax tilt on desktop.

**SIGNATURE VISUAL 2 — Pipeline Track:** A custom SVG horizontal track that draws in from left as the user scrolls (stroke dashoffset animation). Each program node pops in sequentially. This is the one-of-a-kind design element unique to this site — not a bar, not a table.

**Platform Section — Branching Visual (Zajno-inspired, original):** Between EpiScan → BindForge → ClinPath, an organic branching pathway (dendrogram lines) animates as each module enters view — referencing the Zajno growth motif without copying it. Lines grow outward from a central spine, left to right.

**Background Texture:** A faint **chromatin fiber network** — irregular organic filaments at ~4% opacity, SVG or canvas. Biological, irregular, not a hex grid.

**Glow discipline — STRICT:**
- Glow ONLY on: hero protein mesh (ambient radial), primary CTA button (on hover).
- Nowhere else. Not on cards, not on tags, not on section headings.
- Overused glow is the single most reliable marker of a template.

**Whitespace — GENEROUS:**
- Section padding: `py-28 md:py-36 lg:py-44` — let content breathe
- Max content width within sections: `max-w-5xl` for text blocks, `max-w-7xl` for full-width layouts
- No section should feel packed. If it does, add space.

**Partner strip:** Scrolling marquee of institutional partner names as TEXT WORDMARKS only (no icons, no logos). Monochrome, muted. The restraint makes it feel real.

**Clinical trial ticker:** Subtle animated strip below the hero CTAs. Real-looking NCT IDs, trial phases, indication names. One line. This single element signals "clinical-stage company" immediately.

---

## 4. Page Architecture

### Sections (in render order)

```
<Navbar />              — fixed, blur/border appears on scroll; includes "Pipeline" + "Investors" nav links
<HeroSection />         — full-viewport, EZH2 protein 3D mesh, headline, clinical trial ticker, dual CTA
<PartnersStrip />       — scrolling marquee: institutional + pharma partners (text wordmarks)
<AboutSection />        — founding story, mission specificity, animated key metrics strip
<PlatformSection />     — "The HELIX-AI™ Platform" — 3 named proprietary modules with animations
<PipelineSection />     — visual pipeline track: NXG-001 through NXG-004, phase markers, indications
<ProgramsSection />     — 3 focused therapeutic areas (not 6 generic service cards)
<StatsSection />        — 4 investor-grade metrics with animated counters + context labels
<CTASection />          — dual-audience final CTA: Investors column + Partners column
<Footer />              — nav, IR contact, legal, socials
```

**Why this order:** Mirrors how a real investor reading a biotech site proceeds — credibility signals (partners) → mission → technology differentiation → pipeline proof → therapeutic focus → quantified impact → action. Every section earns the right to the next.

---

## 5. Component Structure

```
src/
  app/
    layout.tsx              — root layout, font loading, structured metadata (og:, twitter:)
    page.tsx                — section assembly only, no logic
    globals.css             — CSS custom properties, Tailwind base, custom scrollbar

  components/
    layout/
      Navbar.tsx            — logo, nav links, "Investor Relations" CTA, mobile hamburger
      Footer.tsx            — columns: Company / Science / Pipeline / Investors + legal
    sections/
      HeroSection.tsx
      PartnersStrip.tsx     — CSS marquee animation, no JS scroll library needed
      AboutSection.tsx
      PlatformSection.tsx
      PipelineSection.tsx   — the signature section: custom SVG pipeline track
      ProgramsSection.tsx
      StatsSection.tsx
      CTASection.tsx
    ui/
      GlowButton.tsx        — primary/ghost variants, cyan glow pulse on primary only
      SectionWrapper.tsx    — Framer Motion scroll-reveal wrapper
      AnimatedCounter.tsx   — count-up on intersection, supports decimal and suffix
      PhaseTag.tsx          — pill tag: "Phase II", "IND Filed", "Discovery" with color coding; NO hover glow — clinical data is not playful
      PlatformModule.tsx    — reusable card for HELIX-AI platform modules with SVG branch line
      GradientText.tsx      — heading text with cyan gradient mask
      TrialTicker.tsx       — animated clinical trial ID strip in hero (CSS marquee, monospace)
    three/
      ProteinMesh.tsx       — R3F: EZH2-style low-poly protein sphere, wireframe shell, auto-rotate, mouse parallax
      ChromatinField.tsx    — canvas: ambient chromatin fiber background texture (~4% opacity)

  hooks/
    useScrollProgress.ts
    useInView.ts            — thin Framer Motion useInView wrapper
    useReducedMotion.ts     — respects prefers-reduced-motion globally

  lib/
    animations.ts           — shared Framer Motion variants (fadeUp, stagger, clipReveal)
    constants.ts            — ALL site copy, pipeline data, partner names, stats — never hardcode in JSX

  types/
    index.ts                — PipelineProgram, PlatformModule, Stat, TherapeuticProgram interfaces
```

---

## 6. Animation Strategy

### The Prime Rule (Reference-Derived)
**There are exactly two SIGNATURE animated moments on this page. Everything else is subtle.**
1. **Hero protein mesh** — the cinematic opening visual, 3D, continuous
2. **Pipeline SVG track draw** — the scroll-tied tactile signature moment

No other section competes with these two. If an animation causes you to ask "is this too much?" — it is. Remove it.

---

### Hero (GSAP — sequential on mount)
1. Protein mesh fades in, begins slow Y-axis rotation (R3F — starts at load)
2. Eyebrow label `CLINICAL-STAGE EPIGENOMICS` fades up (100ms)
3. Headline reveals word-by-word via staggered clip-path: `clipPath: 'inset(0 100% 0 0)' → 'inset(0 0% 0 0)'`
4. Subheadline fades up (200ms after headline completes)
5. CTA buttons scale in sequentially (`scale: 0.95 → 1`)
6. Clinical trial ticker slides up from below (last element)
Total entrance: ~1.8s. Cinematic, not rushed.

### Protein Mesh — React Three Fiber
- EZH2-style low-poly sphere with wireframe shell overlay
- Auto-rotates slowly on Y axis (0.003 rad/frame)
- Mouse parallax: mesh tilts ±8° on X/Y with cursor position (desktop only)
- Ambient cyan-tinted point light — soft surface glow, no bloom effect
- Mobile: static gradient orb (no R3F) + CSS radial pulse animation

### Scroll Reveals (Framer Motion — all non-signature sections)
- `SectionWrapper`: `initial: { opacity: 0, y: 28 }` → `animate: { opacity: 1, y: 0 }`, `duration: 0.6`, `ease: 'easeOut'`
- `staggerChildren: 0.08` on direct children
- `once: true` — no replay on scroll-back
- Viewport threshold: `0.12`

### Pipeline Track (GSAP + ScrollTrigger — SIGNATURE #2)
- SVG `stroke-dashoffset` animation: track line draws left → right tied to scroll position
- `scrub: 1` — feels tactile, responds to scroll speed
- Each program node: `scale(0) → scale(1)` + fade as track line reaches it
- Phase labels: `y: 10 → 0` + fade in sequence after node appears
- Hover on node: detail card expands with indication, MOA, trial ID

### Platform Section — Branching Paths (Framer Motion + SVG)
- 3 module cards stagger in on scroll (scroll reveal only — no extra decorative animation)
- As each card enters: SVG branch lines grow outward from a central spine (`pathLength: 0 → 1`, 0.6s)
- References Zajno organic growth motif — does not copy it

### Micro-Interactions (hover only — no decorative auto-animation on non-signature elements)
- `GlowButton` primary: cyan `box-shadow` pulse on hover, `scale(1.02)`
- `GlowButton` ghost: border → cyan, text brightens
- Pipeline node: cursor → crosshair, `scale(1.12)`, tooltip appears
- Platform module card: `border-top-color` → cyan, icon `scale(1.04)`
- Partner strip: `animation-play-state: paused` on hover
- Navbar: `backdrop-filter: blur(16px)` + bottom border at `scrollY > 60`
- `PhaseTag`: NO hover animation — clinical data should not feel playful

### Performance Rules
- All R3F: `dynamic(() => import(...), { ssr: false, loading: () => <ProteinFallback /> })`
- `useReducedMotion()` checked at app root, passed via context — disables all transitions
- Partner strip: CSS `@keyframes` only, no JS
- Framer Motion `LazyMotion` with `domAnimation` features (saves ~16kb)
- No `will-change` on more than 3 elements simultaneously

---

## 7. Responsiveness

| Breakpoint | Tailwind | Key Behavior |
|---|---|---|
| Mobile (<640px) | sm | Single column; protein mesh replaced by static gradient orb; pipeline scrolls horizontally on touch; ticker hidden |
| Tablet (640–1024px) | md | Two-column where applicable; reduced particle count; pipeline track scales down |
| Desktop (>1024px) | lg | Full layout, all animations active |
| Wide (>1280px) | xl | Max-width container 1280px, centered; hero protein mesh larger |

---

## 8. Content & Copy

### Navbar
- Logo: "NexaGenesis" wordmark + small hexagonal N glyph
- Links: Science · Pipeline · Programs · About · Investors
- CTA: "Contact IR" (ghost button, right side)

### Hero
- **Eyebrow label:** `CLINICAL-STAGE EPIGENOMICS`
- **Headline:** "Precision Medicine at the Molecular Scale"
- **Subheadline:** "We apply epigenetic reprogramming and AI-driven target biology to build a new class of precision therapeutics — advancing four clinical programs across oncology and rare disease."
- **CTA 1:** "View Our Pipeline" (primary, cyan glow)
- **CTA 2:** "Our Platform" (ghost)
- **Clinical trial ticker (below CTAs):**
  `NXG-001 · r/r AML · Phase II · NCT05124823  ·  NXG-002 · Solid Tumors · Phase I · NCT05398217  ·  NXG-003 · MDS · IND Filed  ·  NXG-004 · CMT2 · Discovery`

### Partners Strip
Scrolling wordmarks (fictional but realistic institutional names):
`Broad Institute · Mayo Clinic Ventures · Pfizer Oncology · Wellcome Trust · NIH NCI · Lilly Research Labs · Mass General Brigham · AstraZeneca R&D`

### About — "Founded in Science. Built for Patients."
- **Body:** "NexaGenesis Biosciences was founded in 2019 as a spin-out from collaborative epigenomics research at the Broad Institute and Stanford School of Medicine. We identified a druggable class of epigenetic regulators — the Polycomb Repressive Complex — implicated in treatment-resistant cancers and rare neuromuscular conditions. Today we are advancing four clinical-stage programs built on that foundational science."
- **Metrics strip:** `Founded 2019 · $380M Raised (Series A–C) · 4 Clinical Programs · 2 FDA Breakthrough Therapy Designations · 68 Peer-Reviewed Publications`

### Platform — "One Platform. Three Discoveries." (structure borrowed from DeepPiction's "One Platform — Three Impacts")
- **Section eyebrow:** `THE HELIX-AI™ PLATFORM`
- **Headline:** "One Platform. Three Discoveries."
- **Intro:** "Our integrated discovery engine compresses the path from epigenetic target hypothesis to clinical candidate — combining multi-omic profiling, AI-guided molecular design, and adaptive patient stratification into a single connected workflow."
- **DeepPiction-inspired capability proof:** Above the three module cards, a visual split panel showing: LEFT — "Conventional target identification: fragmented assays, 3–5 year timelines" (sparse data scatter viz) vs RIGHT — "HELIX-AI: integrated multi-omic signal, 14-month median to IND" (clean converging node graph). This is the technology's proof moment — not decorative, functional.
- **Module 1 — EpiScan™:** `Uncovering Disease Mechanisms` — Multi-omic epigenetic target identification across disease cohorts using ATAC-seq, ChIP-seq, and methylation profiling integrated with patient-derived organoid models.
- **Module 2 — BindForge™:** `Accelerating Discovery` — AI-driven small molecule and biologic design engine trained on 14M+ protein-ligand interactions, 3D structure prediction, and in-silico ADMET filtering.
- **Module 3 — ClinPath™:** `Programmable Therapy` — Adaptive biomarker-driven patient stratification that continuously refines responder predictions using real-world trial data.

### Pipeline — "Our Clinical Programs"
| Program | Target | Mechanism | Indication | Stage | Trial ID |
|---|---|---|---|---|---|
| NXG-001 | EZH2 | PRC2 inhibitor | r/r AML, BTD | Phase II | NCT05124823 |
| NXG-002 | BRD4 | PROTAC degrader | Solid Tumors | Phase I | NCT05398217 |
| NXG-003 | DNMT3A | Corrector / stabilizer | MDS | IND Filed | — |
| NXG-004 | HDAC6 | Selective inhibitor | Charcot-Marie-Tooth 2 | Discovery | — |

Phase color coding: Discovery → Amber · IND Filed → Text Muted (no accent) · Phase I → Cyan · Phase II → Emerald · BTD badge on NXG-001 (Emerald, bold border)

### Therapeutic Programs — "Where the Science Points"
- **Section eyebrow:** `THERAPEUTIC FOCUS`
- **Headline:** "Where the Science Points"
- **Subtext:** "Our programs are not portfolio bets — they are the direct clinical translation of fifteen years of epigenetic mechanism research."
1. **Hematologic Oncology** — Treatment-resistant AML, MDS, and lymphoma through PRC2 pathway modulation. Lead program NXG-001 holds FDA Breakthrough Therapy Designation.
2. **Epigenetic Rare Disease** — Rare neuromuscular and metabolic disorders driven by aberrant chromatin silencing — an underserved area with outsized epigenetic signal.
3. **Solid Tumor Epigenomics** — Extending BET bromodomain degradation into solid tumor indications where epigenetic dysregulation drives treatment resistance.

### Stats — "The Numbers Behind the Science"
- **Section eyebrow:** `IMPACT`
- **Headline:** "The Numbers Behind the Science"
| Metric | Value | Context label |
|---|---|---|
| Capital Raised | $380M | Series A through C |
| FDA Designations | 2 | Breakthrough Therapy (NXG-001) |
| Publications | 68 | Nature · Cell · NEJM · Cancer Cell |
| Clinical Sites | 24 | US, EU, and APAC |

### Final CTA — "Contact Us for Collaborations" (DeepPiction-informed: direct, B2B, no consumer language)
Two-column layout — audience-split:
- **Left — Investors:** "We are building a multi-asset epigenetic platform with pipeline depth across two high-value therapeutic areas." → `"Investor Relations"`
- **Right — Partners:** "We collaborate with academic medical centers, biotech, and pharma on target discovery, biomarker development, and co-development arrangements." → `"Contact Us for Collaborations"`

### Footer
- Columns: Company · Science · Pipeline · Investors · Careers
- Legal: © 2025 NexaGenesis Biosciences, Inc. · Privacy Policy · Terms of Use
- Disclaimer: "This website contains forward-looking statements..." (1 line — authentic touch)

---

## 9. Coding Rules

1. **TypeScript strict** — no `any`, no `@ts-ignore` without a one-line comment stating why
2. **No inline styles** — Tailwind for static; Framer/GSAP for animated values only
3. **No comments explaining what** — only WHY if non-obvious (a constraint, workaround, invariant)
4. **One component per file** — named exports
5. **All copy in `lib/constants.ts`** — no strings hardcoded in JSX
6. **Dynamic imports for all R3F/Three.js** — SSR will fail silently without this
7. **Accessibility** — `aria-label` on all interactive elements; WCAG AA contrast minimum
8. **No placeholder images** — all visuals are SVG, canvas, or CSS; no stock photos
9. **`useReducedMotion`** checked at the animation hook level, not scattered in components

---

## 10. File Naming

- Components: `PascalCase.tsx`
- Hooks: `useCamelCase.ts`
- Lib / utils: `camelCase.ts`
- Sections: `[Name]Section.tsx`

---

## 11. Dev Commands

```bash
npm run dev          # local dev (port 3000)
npm run build        # production build
npm run lint         # ESLint
npm run type-check   # tsc --noEmit
```

---

## 12. Deployment

- Platform: **Vercel**
- Branch: `EMEDAT24` → auto-deploy on push
- No environment variables required

---

*This file is the source of truth. Check here before writing any component.*

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
