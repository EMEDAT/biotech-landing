"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({
  children,
  className = "",
  id,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
    >
      {children}
    </motion.section>
  );
}

export function FadeUp({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
