"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { THERAPEUTIC_PROGRAMS } from "@/lib/constants";
import { SectionWrapper, FadeUp } from "@/components/ui/SectionWrapper";
import { GradientText } from "@/components/ui/GradientText";
import type { TherapeuticProgram } from "@/types";

const accentByArea: Record<string, string> = {
  "Hematologic Oncology": "#00C2FF",
  "Epigenetic Rare Disease": "#0EA96A",
  "Solid Tumor Epigenomics": "#D97706",
};

function ProgramRow({
  program,
  index,
}: {
  program: TherapeuticProgram;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const accent = accentByArea[program.area] ?? "#00C2FF";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
      className="relative border-b border-border-active/40 last:border-b-0 group"
    >
      {/* Left accent rule — visible on hover */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-px"
        style={{ background: accent }}
        animate={{ opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        aria-hidden="true"
      />

      <button
        className="w-full text-left py-10 pl-8 pr-6 md:pl-10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan group-hover:bg-surface/40 transition-colors duration-300"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        aria-label={`Toggle ${program.area} details`}
      >
        <div className="grid md:grid-cols-[80px_1fr_auto] items-start gap-6 md:gap-10">
          {/* Watermark index */}
          <span
            className="font-display font-bold text-5xl md:text-7xl leading-none select-none transition-colors duration-300"
            style={{ color: expanded ? `${accent}30` : "#142035" }}
            aria-hidden="true"
          >
            0{index + 1}
          </span>

          {/* Area name + tag */}
          <div className="flex flex-col gap-2">
            <p
              className="font-mono text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-200"
              style={{ color: expanded ? accent : "#3D5470" }}
            >
              {program.description}
            </p>
            <h3 className="font-display font-semibold text-xl md:text-2xl text-text-primary leading-snug">
              {program.area}
            </h3>

            <AnimatePresence>
              {expanded && (
                <motion.p
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="text-sm text-text-secondary leading-relaxed overflow-hidden max-w-xl"
                >
                  {program.detail}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Toggle indicator */}
          <div
            className="shrink-0 w-8 h-8 rounded-full border border-border-active/50 flex items-center justify-center transition-all duration-300 mt-1"
            style={{
              borderColor: expanded ? `${accent}60` : undefined,
              background: expanded ? `${accent}10` : undefined,
            }}
            aria-hidden="true"
          >
            <motion.span
              className="font-mono text-xs leading-none"
              style={{ color: expanded ? accent : "#3D5470" }}
              animate={{ rotate: expanded ? 45 : 0 }}
              transition={{ duration: 0.25 }}
            >
              +
            </motion.span>
          </div>
        </div>
      </button>
    </motion.div>
  );
}

export function ProgramsSection() {
  return (
    <SectionWrapper id="programs" className="py-28 md:py-36 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <FadeUp>
              <p className="font-mono text-xs font-semibold tracking-[0.25em] uppercase text-emerald mb-4">
                THERAPEUTIC FOCUS
              </p>
            </FadeUp>
            <FadeUp>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-text-primary leading-tight">
                <GradientText from="#0EA96A" to="#00C2FF">Where the</GradientText>
                <br />
                Science Points.
              </h2>
            </FadeUp>
          </div>

          <FadeUp>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs md:text-right">
              Our programs are not portfolio bets — they are the direct clinical
              translation of fifteen years of epigenetic mechanism research.
            </p>
          </FadeUp>
        </div>

        {/* Ruled row list */}
        <div className="border-t border-border-active/40">
          {THERAPEUTIC_PROGRAMS.map((prog, i) => (
            <ProgramRow key={prog.id} program={prog} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
