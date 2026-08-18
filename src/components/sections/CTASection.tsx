"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { CTA } from "@/lib/constants";
import { SectionWrapper, FadeUp } from "@/components/ui/SectionWrapper";
import { GlowButton } from "@/components/ui/GlowButton";

function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Static site — no backend; acknowledge submission visually
    setSent(true);
  }

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-3 py-8"
      >
        <div className="w-8 h-8 rounded-full border border-emerald/40 flex items-center justify-center">
          <span className="text-emerald text-sm">✓</span>
        </div>
        <p className="font-display text-sm font-semibold text-text-primary">
          Message received.
        </p>
        <p className="font-mono text-xs text-text-muted leading-relaxed">
          A member of our partnerships team will be in touch within 2 business days.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cta-name" className="font-mono text-xs text-text-muted tracking-widest uppercase">
            Name
          </label>
          <input
            id="cta-name"
            type="text"
            required
            autoComplete="name"
            placeholder="Dr. Jane Smith"
            className="bg-background/60 border border-border-active/40 rounded-sm px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-emerald/50 transition-colors duration-200"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cta-email" className="font-mono text-xs text-text-muted tracking-widest uppercase">
            Work Email
          </label>
          <input
            id="cta-email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@institution.edu"
            className="bg-background/60 border border-border-active/40 rounded-sm px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-emerald/50 transition-colors duration-200"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cta-org" className="font-mono text-xs text-text-muted tracking-widest uppercase">
          Organization
        </label>
        <input
          id="cta-org"
          type="text"
          autoComplete="organization"
          placeholder="Academic center, biotech, or pharma"
          className="bg-background/60 border border-border-active/40 rounded-sm px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-emerald/50 transition-colors duration-200"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cta-message" className="font-mono text-xs text-text-muted tracking-widest uppercase">
          Message
        </label>
        <textarea
          id="cta-message"
          required
          rows={4}
          placeholder="Tell us about your research focus or collaboration interest…"
          className="bg-background/60 border border-border-active/40 rounded-sm px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-emerald/50 transition-colors duration-200 resize-none"
        />
      </div>

      <button
        type="submit"
        className="self-start flex items-center gap-2 px-6 py-3 rounded-sm bg-emerald/10 border border-emerald/30 text-emerald text-sm font-semibold hover:bg-emerald/15 hover:border-emerald/50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald"
        aria-label="Send collaboration message"
      >
        Send Message
        <ArrowRight size={14} />
      </button>
    </form>
  );
}

export function CTASection() {
  return (
    <SectionWrapper id="investors" className="py-28 md:py-40 relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(0,194,255,0.03) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        {/* Contained dark card — DeepPiction's contact section pattern */}
        <FadeUp>
          <div className="rounded-2xl border border-border-active/30 bg-surface overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left — Investors */}
              <div className="relative p-10 md:p-14 border-b md:border-b-0 md:border-r border-border-active/30 flex flex-col gap-8">
                {/* Top accent rule */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-40"
                  style={{ background: "linear-gradient(90deg, #00C2FF, transparent)" }}
                  aria-hidden="true"
                />

                <div className="flex flex-col gap-4">
                  <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-cyan">
                    {CTA.investors.label}
                  </p>
                  <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary leading-tight">
                    Advancing Epigenetic
                    <br />
                    Medicine Together
                  </h2>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {CTA.investors.body}
                  </p>
                </div>

                <div className="flex flex-col gap-4 mt-auto">
                  {/* IR quick stats */}
                  <div className="grid grid-cols-2 gap-4 py-6 border-t border-border-active/30">
                    <div>
                      <p className="font-display font-bold text-xl text-text-primary">$380M</p>
                      <p className="font-mono text-xs text-text-muted mt-1">Series A – C</p>
                    </div>
                    <div>
                      <p className="font-display font-bold text-xl text-text-primary">2</p>
                      <p className="font-mono text-xs text-text-muted mt-1">FDA Breakthrough Designations</p>
                    </div>
                  </div>

                  <GlowButton href="#" variant="primary" aria-label="Go to investor relations">
                    {CTA.investors.cta}
                    <ArrowRight size={14} />
                  </GlowButton>
                </div>

                {/* Corner ambient */}
                <div
                  className="absolute bottom-0 left-0 w-48 h-48 pointer-events-none opacity-10"
                  style={{ background: "radial-gradient(circle at bottom left, #00C2FF, transparent 70%)" }}
                  aria-hidden="true"
                />
              </div>

              {/* Right — Partner contact form */}
              <div className="relative p-10 md:p-14 flex flex-col gap-8 bg-surface/60">
                {/* Top accent rule */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-30"
                  style={{ background: "linear-gradient(90deg, #0EA96A, transparent)" }}
                  aria-hidden="true"
                />

                <div className="flex flex-col gap-3">
                  <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-emerald">
                    {CTA.partners.label}
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {CTA.partners.body}
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </SectionWrapper>
  );
}
