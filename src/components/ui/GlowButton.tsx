"use client";

import { motion } from "framer-motion";

interface GlowButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
  "aria-label"?: string;
}

export function GlowButton({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  "aria-label": ariaLabel,
}: GlowButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer select-none";

  const variants = {
    primary:
      "bg-cyan text-background hover:brightness-110 glow-primary focus-visible:outline-cyan",
    ghost:
      "border border-border-active text-text-primary hover:border-cyan hover:text-cyan focus-visible:outline-cyan",
  };

  const props = {
    className: `${base} ${variants[variant]} ${className}`,
    "aria-label": ariaLabel,
    onClick,
  };

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
