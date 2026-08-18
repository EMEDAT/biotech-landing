"use client";

import { useEffect, useReducer, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { GlowButton } from "@/components/ui/GlowButton";

export function Navbar() {
  const [menuOpen, toggleMenu] = useReducer((s: boolean) => !s, false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 40));
    return unsub;
  }, [scrollY]);

  // Close menu on resize to desktop
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768 && menuOpen) toggleMenu();
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  return (
    <>
      <motion.header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-background/90 backdrop-blur-md border-b border-border-active/30"
            : "bg-transparent"
        }`}
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav
          className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2.5"
            aria-label="NexaGenesis Biosciences home"
          >
            <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <circle cx="14" cy="14" r="13" stroke="#00C2FF" strokeWidth="1.2" />
              <path
                d="M9 8 Q14 12 19 8 M9 14 Q14 18 19 14 M9 20 Q14 24 19 20"
                stroke="#00C2FF"
                strokeWidth="1.2"
                strokeLinecap="round"
                fill="none"
                opacity="0.7"
              />
            </svg>
            <span className="font-display text-sm font-semibold text-text-primary tracking-wide">
              NexaGenesis<span className="text-cyan"> Biosciences</span>
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs font-semibold tracking-widest uppercase text-text-secondary hover:text-text-primary transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-cyan group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <GlowButton href="#investors" variant="ghost" className="text-xs px-4 py-2">
              Investor Relations
            </GlowButton>
            <GlowButton href="#pipeline" variant="primary" className="text-xs px-4 py-2">
              View Pipeline
            </GlowButton>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 text-text-secondary hover:text-text-primary transition-colors"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-x-0 top-16 z-40 bg-background/95 backdrop-blur-md border-b border-border-active/30 md:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <nav className="px-6 py-6 flex flex-col gap-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold tracking-widest uppercase text-text-secondary hover:text-text-primary transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-3 border-t border-border-active/30">
                <GlowButton href="#investors" variant="ghost" className="w-full justify-center text-xs py-2.5">
                  Investor Relations
                </GlowButton>
                <GlowButton href="#pipeline" variant="primary" className="w-full justify-center text-xs py-2.5">
                  View Pipeline
                </GlowButton>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
