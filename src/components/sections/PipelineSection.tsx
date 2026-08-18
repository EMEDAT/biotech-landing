"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PIPELINE_PROGRAMS } from "@/lib/constants";
import { PhaseTag } from "@/components/ui/PhaseTag";
import { SectionWrapper, FadeUp } from "@/components/ui/SectionWrapper";
import { GradientText } from "@/components/ui/GradientText";
import type { PipelineProgram } from "@/types";

gsap.registerPlugin(ScrollTrigger);

const STAGE_X: Record<string, number> = {
  Discovery: 80,
  "IND Filed": 280,
  "Phase I": 480,
  "Phase II": 680,
};
const TRACK_WIDTH = 760;
const TRACK_Y = 60;

function PipelineTrack() {
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const container = containerRef.current;
    if (!path || !container) return;

    const len = path.getTotalLength();
    gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });

    const tween = gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top 70%",
        end: "top 20%",
        scrub: 0.6,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === container) st.kill();
      });
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full overflow-x-auto">
      <div className="min-w-[800px] relative">
        <svg
          width="100%"
          height="120"
          viewBox={`0 0 ${TRACK_WIDTH} 120`}
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          {/* Background track */}
          <path
            d={`M 40 ${TRACK_Y} L ${TRACK_WIDTH - 40} ${TRACK_Y}`}
            stroke="#142035"
            strokeWidth="1.5"
            fill="none"
          />

          {/* Animated draw path */}
          <path
            ref={pathRef}
            d={`M 40 ${TRACK_Y} L ${TRACK_WIDTH - 40} ${TRACK_Y}`}
            stroke="#00C2FF"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            opacity="0.7"
          />

          {/* Stage nodes */}
          {PIPELINE_PROGRAMS.map((prog) => {
            const cx = STAGE_X[prog.stage] ?? 80;
            const isPhase2 = prog.stage === "Phase II";
            return (
              <g key={prog.id}>
                <circle
                  cx={cx}
                  cy={TRACK_Y}
                  r={isPhase2 ? 9 : 6}
                  fill={isPhase2 ? "#00C2FF" : "#080F1A"}
                  stroke={isPhase2 ? "#00C2FF" : "#00C2FF"}
                  strokeWidth="1.5"
                  opacity={isPhase2 ? 1 : 0.5}
                />
                {/* Program label below node */}
                <text
                  x={cx}
                  y={TRACK_Y + 22}
                  textAnchor="middle"
                  fill="#8BA4C0"
                  fontSize="10"
                  fontFamily="JetBrains Mono, monospace"
                  fontWeight="600"
                >
                  {prog.id}
                </text>
              </g>
            );
          })}

          {/* Stage labels above track */}
          {Object.entries(STAGE_X).map(([stage, cx]) => (
            <text
              key={stage}
              x={cx}
              y={TRACK_Y - 18}
              textAnchor="middle"
              fill="#3D5470"
              fontSize="9"
              fontFamily="JetBrains Mono, monospace"
              fontWeight="700"
              letterSpacing="2"
              textLength={stage.length * 6.5}
            >
              {stage.toUpperCase()}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
}

function ProgramCard({ prog }: { prog: PipelineProgram }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="border border-border-active/40 rounded-sm bg-surface overflow-hidden cursor-pointer group"
      whileHover={{ borderColor: "rgba(0,194,255,0.3)" }}
      onClick={() => setOpen((v) => !v)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setOpen((v) => !v)}
      aria-expanded={open}
      aria-label={`${prog.id} program details`}
    >
      <div className="p-5 flex items-start justify-between gap-4">
        <div className="flex flex-col gap-2.5">
          <PhaseTag stage={prog.stage} btd={prog.btd} />
          <div>
            <span className="font-mono text-xs text-text-muted mr-2">{prog.id}</span>
            <span className="font-display font-semibold text-text-primary">
              {prog.indication}
            </span>
          </div>
          <p className="font-mono text-xs text-text-secondary">
            Target: <span className="text-cyan">{prog.target}</span> ·{" "}
            {prog.mechanism}
          </p>
        </div>

        <motion.span
          className="text-text-muted/50 mt-1 shrink-0"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          +
        </motion.span>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 border-t border-border-active/30 pt-4 grid grid-cols-2 gap-3">
              <div>
                <p className="font-mono text-xs text-text-muted/60 mb-1 uppercase tracking-widest">
                  Mechanism
                </p>
                <p className="font-mono text-xs text-text-secondary">
                  {prog.mechanism}
                </p>
              </div>
              {prog.trialId && (
                <div>
                  <p className="font-mono text-xs text-text-muted/60 mb-1 uppercase tracking-widest">
                    ClinicalTrials.gov
                  </p>
                  <p className="font-mono text-xs text-emerald">{prog.trialId}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function PipelineSection() {
  return (
    <SectionWrapper
      id="pipeline"
      className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-10"
    >
      <div className="max-w-2xl mb-14">
        <FadeUp>
          <p className="font-mono text-xs font-semibold tracking-[0.25em] uppercase text-cyan mb-4">
            Clinical Pipeline
          </p>
        </FadeUp>
        <FadeUp>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary leading-tight">
            Four Programs.<br />
            <GradientText>One Epigenetic Platform.</GradientText>
          </h2>
        </FadeUp>
      </div>

      {/* GSAP SVG track — signature animation #2 */}
      <FadeUp>
        <div className="mb-12">
          <PipelineTrack />
        </div>
      </FadeUp>

      {/* Program cards */}
      <div className="grid sm:grid-cols-2 gap-4">
        {PIPELINE_PROGRAMS.map((prog) => (
          <ProgramCard key={prog.id} prog={prog} />
        ))}
      </div>
    </SectionWrapper>
  );
}
