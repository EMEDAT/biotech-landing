"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import type { PlatformModule as PlatformModuleType } from "@/types";

interface PlatformModuleProps {
  module: PlatformModuleType;
  index: number;
}

const accentColors = ["#00C2FF", "#0EA96A", "#D97706"] as const;

export function PlatformModule({ module, index }: PlatformModuleProps) {
  const accent = accentColors[index % 3];

  return (
    <motion.div
      variants={fadeUp}
      className="relative flex flex-col gap-4 p-6 border border-border-active/40 rounded-sm bg-surface hover:border-border-active transition-colors duration-300 group"
    >
      {/* Branching SVG line — Zajno-inspired organic connector */}
      <svg
        className="absolute -top-px left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        width="2"
        height="24"
        viewBox="0 0 2 24"
        fill="none"
        aria-hidden="true"
      >
        <motion.line
          x1="1"
          y1="0"
          x2="1"
          y2="24"
          stroke={accent}
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </svg>

      <div className="flex items-start justify-between gap-4">
        <div>
          <p
            className="text-xs font-mono font-semibold tracking-widest uppercase mb-1"
            style={{ color: accent }}
          >
            {module.tagline}
          </p>
          <h3 className="text-lg font-display font-semibold text-text-primary">
            {module.name}
          </h3>
        </div>
        {/* Index badge */}
        <span className="shrink-0 w-7 h-7 rounded-sm border border-border-active flex items-center justify-center font-mono text-xs text-text-muted">
          0{index + 1}
        </span>
      </div>

      <p className="text-sm text-text-secondary leading-relaxed">
        {module.description}
      </p>
    </motion.div>
  );
}
