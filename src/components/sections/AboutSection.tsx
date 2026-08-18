"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ABOUT } from "@/lib/constants";
import { SectionWrapper, FadeUp } from "@/components/ui/SectionWrapper";
import { GradientText } from "@/components/ui/GradientText";

const MILESTONES = [
  { year: "2019", label: "Spin-out", detail: "Broad Institute · Stanford School of Medicine" },
  { year: "2021", label: "Series A & B", detail: "$120M raised · First IND submission" },
  { year: "2023", label: "Breakthrough Designation", detail: "FDA BTD granted · NXG-001 · r/r AML" },
  { year: "2025", label: "Series C · Phase II", detail: "$380M total raised · 4 active programs" },
];

function FoundingTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="relative flex flex-col gap-0">
      {MILESTONES.map((m, i) => (
        <div key={m.year} className="relative flex gap-6 pb-10 last:pb-0">
          {/* Vertical spine */}
          {i < MILESTONES.length - 1 && (
            <div className="absolute left-[11px] top-6 bottom-0 w-px bg-border-active/40" aria-hidden="true">
              <motion.div
                className="w-full bg-cyan/40 origin-top"
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 + i * 0.15 }}
                style={{ height: "100%" }}
              />
            </div>
          )}

          {/* Node */}
          <motion.div
            className="relative z-10 shrink-0 w-6 h-6 rounded-full border border-border-active flex items-center justify-center mt-0.5"
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.1 + i * 0.15 }}
            style={{ background: "#04080F" }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-cyan/60" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 + i * 0.15 }}
            className="flex flex-col gap-1 pt-0.5"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-xs font-bold text-cyan/70 tracking-widest">
                {m.year}
              </span>
              <span className="font-display font-semibold text-sm text-text-primary">
                {m.label}
              </span>
            </div>
            <p className="font-mono text-xs text-text-muted leading-relaxed">
              {m.detail}
            </p>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

function MetricStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="border-t border-border-active/40 mt-20 md:mt-24">
      <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-border-active/40">
        {ABOUT.metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
            className="px-6 py-10 flex flex-col gap-2"
          >
            <span className="font-display font-bold text-2xl md:text-3xl text-text-primary tracking-tight">
              {metric.value}
            </span>
            <span className="font-mono text-xs text-text-muted tracking-[0.15em] uppercase">
              {metric.label}
            </span>
            {metric.detail && (
              <span className="font-mono text-xs text-text-muted/50">
                {metric.detail}
              </span>
            )}
          </motion.div>
        ))}
      </div>
      <div className="border-t border-border-active/40" />
    </div>
  );
}

export function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      className="py-28 md:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Two-column: story left, founding timeline right */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left: founding story */}
          <div>
            <FadeUp>
              <p className="font-mono text-xs font-semibold tracking-[0.25em] uppercase text-cyan mb-4">
                Our Foundation
              </p>
            </FadeUp>
            <FadeUp>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-text-primary leading-tight mb-8">
                <GradientText>Founded in Science.</GradientText>
                <br />
                Built for Patients.
              </h2>
            </FadeUp>
            <FadeUp>
              <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-8">
                {ABOUT.body}
              </p>
            </FadeUp>

            {/* Institutions */}
            <FadeUp>
              <div className="flex items-center gap-6 pt-4 border-t border-border-active/30">
                <div className="flex flex-col gap-0.5">
                  <span className="font-mono text-xs text-text-muted/60 tracking-widest uppercase">
                    Origin
                  </span>
                  <span className="font-mono text-xs text-text-secondary">
                    Broad Institute · Stanford School of Medicine
                  </span>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right: founding timeline */}
          <div className="pt-1 md:pt-10">
            <FadeUp>
              <p className="font-mono text-xs font-semibold tracking-[0.25em] uppercase text-text-muted mb-8">
                COMPANY MILESTONES
              </p>
            </FadeUp>
            <FoundingTimeline />
          </div>
        </div>

        {/* Full-width ruled metric strip */}
        <MetricStrip />
      </div>
    </SectionWrapper>
  );
}
