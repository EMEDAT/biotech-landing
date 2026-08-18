"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "@/lib/constants";
import { SectionWrapper, FadeUp } from "@/components/ui/SectionWrapper";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import type { Stat } from "@/types";

function StatItem({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      className="px-8 py-14 md:py-20 flex flex-col gap-3"
    >
      {/* Giant counter */}
      <div
        className="font-display font-bold tracking-tight leading-none"
        style={{
          fontSize: "clamp(3.5rem, 6vw, 6rem)",
          background: "linear-gradient(135deg, #EEF4FF 60%, #00C2FF 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        <AnimatedCounter
          value={stat.value}
          suffix={stat.suffix ?? ""}
          prefix={stat.suffix === "M" ? "$" : ""}
          duration={2200}
        />
      </div>

      {/* Label */}
      <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-text-secondary">
        {stat.label}
      </p>

      {/* Context */}
      <p className="font-mono text-xs text-text-muted leading-relaxed">
        {stat.context}
      </p>
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <SectionWrapper id="stats" className="py-28 md:py-36 bg-surface/20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Eyebrow — left-aligned, no headline competes with the numbers */}
        <FadeUp>
          <p className="font-mono text-xs font-semibold tracking-[0.3em] uppercase text-cyan mb-16 md:mb-20">
            IMPACT
          </p>
        </FadeUp>

        {/* Full-width ruled stat strip — no card boxes, only ruled lines */}
        <div className="border-t border-border-active/50">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border-active/50">
            {STATS.map((stat, i) => (
              <StatItem key={stat.label} stat={stat} index={i} />
            ))}
          </div>
          <div className="border-t border-border-active/50" />
        </div>

        {/* Floor label */}
        <FadeUp>
          <p className="font-mono text-xs text-text-muted/50 mt-6 tracking-widest">
            THE NUMBERS BEHIND THE SCIENCE
          </p>
        </FadeUp>
      </div>
    </SectionWrapper>
  );
}
