"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { HERO } from "@/lib/constants";
import { GlowButton } from "@/components/ui/GlowButton";
import { GradientText } from "@/components/ui/GradientText";
import { TrialTicker } from "@/components/ui/TrialTicker";
import { ChromatinField } from "@/components/three/ChromatinField";

// Dynamic import: R3F must not SSR
const ProteinMesh = dynamic(
  () => import("@/components/three/ProteinMesh").then((m) => m.ProteinMesh),
  { ssr: false }
);

const headline = "Precision Medicine\nat the Molecular\nScale";

export function HeroSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden bg-background"
    >
      {/* Chromatin background texture */}
      <ChromatinField />

      {/* Protein mesh — right half */}
      <div className="absolute inset-0 md:left-1/2">
        <ProteinMesh />
      </div>

      {/* Vignette gradient over mesh */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, #04080F 35%, #04080F66 65%, transparent 100%), linear-gradient(to top, #04080F 0%, transparent 30%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center flex-1 max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-10">
        {/* Eyebrow */}
        <motion.p
          className="font-mono text-xs font-semibold tracking-[0.25em] uppercase text-cyan mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {HERO.eyebrow}
        </motion.p>

        {/* Headline — clip-path reveal, word by word */}
        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.08] text-text-primary max-w-2xl mb-6">
          {headline.split("\n").map((line, li) => (
            <span key={li} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={prefersReduced ? false : { y: "102%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: prefersReduced ? 0 : 0.65,
                  ease: [0.22, 1, 0.36, 1],
                  delay: prefersReduced ? 0 : 0.35 + li * 0.1,
                }}
              >
                {li === 0 ? (
                  <>
                    <GradientText>Precision Medicine</GradientText>
                  </>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          className="text-sm md:text-base text-text-secondary max-w-xl leading-relaxed mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
        >
          {HERO.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <GlowButton href="#pipeline" variant="primary" aria-label="View our clinical pipeline">
            {HERO.cta_primary}
            <ArrowRight size={14} />
          </GlowButton>
          <GlowButton href="#platform" variant="ghost" aria-label="Learn about our platform">
            {HERO.cta_secondary}
          </GlowButton>
        </motion.div>

        {/* Series-C signal */}
        <motion.p
          className="mt-8 font-mono text-xs text-text-muted tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          Series-C · $380M Raised · NYSE: NXGB
        </motion.p>
      </div>

      {/* Clinical trial ticker */}
      <motion.div
        className="relative z-10 mt-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
      >
        <TrialTicker />
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        aria-hidden="true"
      >
        <span className="text-xs font-mono tracking-widest uppercase text-text-muted/60">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-text-muted/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
