"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { PLATFORM } from "@/lib/constants";
import { SectionWrapper, FadeUp } from "@/components/ui/SectionWrapper";
import { GradientText } from "@/components/ui/GradientText";

const accentColors = ["#00C2FF", "#0EA96A", "#D97706"] as const;

/* ── Animated dendrogram SVG for the active module panel ── */
function BranchingViz({ accent, active }: { accent: string; active: boolean }) {
  return (
    <svg
      viewBox="0 0 320 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-xs opacity-70"
      aria-hidden="true"
    >
      {/* Central spine */}
      <motion.line
        x1="40" y1="80" x2="280" y2="80"
        stroke={accent}
        strokeWidth="1"
        strokeOpacity="0.3"
        initial={{ pathLength: 0 }}
        animate={active ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      {/* Branch 1 — top */}
      <motion.path
        d="M 120 80 L 160 40 L 260 40"
        stroke={accent}
        strokeWidth="1"
        strokeOpacity="0.6"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={active ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
      />

      {/* Branch 2 — center */}
      <motion.line
        x1="160" y1="80" x2="260" y2="80"
        stroke={accent}
        strokeWidth="1"
        strokeOpacity="0.8"
        initial={{ pathLength: 0 }}
        animate={active ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
      />

      {/* Branch 3 — bottom */}
      <motion.path
        d="M 120 80 L 160 120 L 260 120"
        stroke={accent}
        strokeWidth="1"
        strokeOpacity="0.6"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={active ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
      />

      {/* Terminal nodes */}
      {[
        { cx: 260, cy: 40 },
        { cx: 260, cy: 80 },
        { cx: 260, cy: 120 },
      ].map(({ cx, cy }, i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy}
          r="3"
          fill={accent}
          initial={{ scale: 0, opacity: 0 }}
          animate={active ? { scale: 1, opacity: 0.9 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.55 + i * 0.08 }}
        />
      ))}

      {/* Origin node */}
      <motion.circle
        cx="40" cy="80" r="4"
        fill={accent}
        initial={{ scale: 0, opacity: 0 }}
        animate={active ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.05 }}
      />

      {/* Sub-branches from top */}
      <motion.line
        x1="210" y1="40" x2="210" y2="20"
        stroke={accent}
        strokeWidth="0.75"
        strokeOpacity="0.35"
        initial={{ pathLength: 0 }}
        animate={active ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.65 }}
      />
      <motion.line
        x1="210" y1="40" x2="210" y2="60"
        stroke={accent}
        strokeWidth="0.75"
        strokeOpacity="0.35"
        initial={{ pathLength: 0 }}
        animate={active ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.7 }}
      />

      {/* Sub-branches from bottom */}
      <motion.line
        x1="210" y1="120" x2="210" y2="100"
        stroke={accent}
        strokeWidth="0.75"
        strokeOpacity="0.35"
        initial={{ pathLength: 0 }}
        animate={active ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.65 }}
      />
      <motion.line
        x1="210" y1="120" x2="210" y2="140"
        stroke={accent}
        strokeWidth="0.75"
        strokeOpacity="0.35"
        initial={{ pathLength: 0 }}
        animate={active ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.7 }}
      />
    </svg>
  );
}

/* ── Comparison panel ── */
function ComparisonPanel() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      className="grid md:grid-cols-2 gap-px bg-border-active/20 border border-border-active/20 rounded-sm overflow-hidden mb-16"
    >
      {/* Before */}
      <div className="bg-surface p-8 flex flex-col gap-4">
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-text-muted">
          Conventional
        </span>
        <p className="font-display text-sm font-semibold text-text-secondary">
          {PLATFORM.comparison.before.label}
        </p>
        <p className="font-mono text-xs text-text-muted/70 leading-relaxed">
          {PLATFORM.comparison.before.detail}
        </p>
        <div className="mt-2 flex items-center gap-4">
          <span className="font-mono text-xs text-text-muted/50">Time to IND</span>
          <div className="flex-1 h-px bg-border-active/30 relative">
            <motion.div
              className="absolute inset-y-0 left-0 bg-text-muted/25"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              style={{ transformOrigin: "left" }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            />
          </div>
          <span className="font-mono text-xs text-text-muted shrink-0">3–5 yrs</span>
        </div>
      </div>

      {/* After */}
      <div className="bg-surface/60 p-8 flex flex-col gap-4 relative">
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-cyan">
          HELIX-AI™
        </span>
        <p className="font-display text-sm font-semibold text-text-primary">
          {PLATFORM.comparison.after.label}
        </p>
        <p className="font-mono text-xs text-text-secondary/70 leading-relaxed">
          {PLATFORM.comparison.after.detail}
        </p>
        <div className="mt-2 flex items-center gap-4">
          <span className="font-mono text-xs text-text-muted/50">Median to IND</span>
          <div className="flex-1 h-px bg-border-active/30 relative">
            <motion.div
              className="absolute inset-y-0 left-0 bg-cyan"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              style={{ transformOrigin: "left", width: "28%" }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.6 }}
            />
          </div>
          <span className="font-mono text-xs text-cyan shrink-0">14 mo</span>
        </div>

        <div
          className="absolute top-0 right-0 w-24 h-24 pointer-events-none opacity-15"
          style={{ background: "radial-gradient(circle at top right, #00C2FF, transparent 70%)" }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

/* ── Main section ── */
export function PlatformSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeModule = PLATFORM.modules[activeIndex];
  const accent = accentColors[activeIndex];

  return (
    <SectionWrapper id="platform" className="py-28 md:py-36 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <FadeUp>
            <p className="font-mono text-xs font-semibold tracking-[0.25em] uppercase text-cyan mb-4">
              {PLATFORM.eyebrow}
            </p>
          </FadeUp>
          <FadeUp>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-text-primary leading-tight mb-5">
              <GradientText>One Platform.</GradientText> Three Discoveries.
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
              {PLATFORM.intro}
            </p>
          </FadeUp>
        </div>

        {/* Comparison panel */}
        <FadeUp>
          <ComparisonPanel />
        </FadeUp>

        {/* Numbered tab navigator */}
        <FadeUp>
          <div className="grid md:grid-cols-[280px_1fr] gap-px bg-border-active/20 border border-border-active/20 rounded-sm overflow-hidden">
            {/* Left — tab list */}
            <div className="flex flex-col divide-y divide-border-active/20 bg-surface">
              {PLATFORM.modules.map((mod, i) => {
                const tabAccent = accentColors[i];
                const isActive = i === activeIndex;
                return (
                  <button
                    key={mod.id}
                    onClick={() => setActiveIndex(i)}
                    aria-pressed={isActive}
                    aria-label={`Select ${mod.name} module`}
                    className="relative text-left px-7 py-7 group transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan"
                    style={{
                      background: isActive ? "rgba(13,22,38,0.9)" : undefined,
                    }}
                  >
                    {/* Active left border */}
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-px"
                      style={{ background: tabAccent }}
                      animate={{ opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                      aria-hidden="true"
                    />

                    <div className="flex items-start gap-4">
                      {/* Number */}
                      <span
                        className="font-mono text-xs font-bold shrink-0 mt-0.5 transition-colors duration-200"
                        style={{ color: isActive ? tabAccent : "#3D5470" }}
                      >
                        0{i + 1}
                      </span>

                      <div>
                        <p
                          className="font-display font-semibold text-sm leading-snug transition-colors duration-200"
                          style={{ color: isActive ? "#EEF4FF" : "#8BA4C0" }}
                        >
                          {mod.name}
                        </p>
                        <p
                          className="font-mono text-xs mt-1 transition-colors duration-200"
                          style={{ color: isActive ? tabAccent : "#3D5470", opacity: isActive ? 1 : 0.7 }}
                        >
                          {mod.tagline}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right — content panel */}
            <div className="relative bg-surface/60 p-10 md:p-14 min-h-[320px] flex flex-col justify-between overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex flex-col gap-5 flex-1"
                >
                  {/* Module name — large */}
                  <div>
                    <p
                      className="font-mono text-xs font-semibold tracking-[0.2em] uppercase mb-3"
                      style={{ color: accent }}
                    >
                      {activeModule.tagline}
                    </p>
                    <h3 className="font-display font-bold text-3xl md:text-4xl text-text-primary">
                      {activeModule.name}
                    </h3>
                  </div>

                  <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-lg">
                    {activeModule.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Branching viz — bottom right */}
              <div className="flex justify-end mt-8">
                <BranchingViz accent={accent} active={true} key={activeIndex} />
              </div>

              {/* Background accent corner */}
              <div
                className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at top right, ${accent}08, transparent 60%)`,
                }}
                aria-hidden="true"
              />
            </div>
          </div>
        </FadeUp>
      </div>
    </SectionWrapper>
  );
}
