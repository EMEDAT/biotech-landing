import { FOOTER, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border-active/30 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        {/* Top row: logo + columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true">
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
              <span className="font-display text-xs font-semibold text-text-primary tracking-wide">
                NexaGenesis
              </span>
            </div>
            <p className="text-xs text-text-muted leading-relaxed max-w-[160px]">
              Epigenetic reprogramming at the molecular scale.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER.columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-mono font-semibold tracking-widest uppercase text-text-muted mb-4">
                {col.heading}
              </h3>
              <ul className="space-y-2.5" role="list">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-text-secondary hover:text-text-primary transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border-active/20 pt-8 space-y-4">
          {/* Forward-looking statement */}
          <p className="text-xs text-text-muted leading-relaxed max-w-3xl">
            <span className="font-semibold text-text-muted/80">
              Forward-Looking Statements:{" "}
            </span>
            {FOOTER.disclaimer} Actual results could differ materially from those expressed or implied by such forward-looking statements. NexaGenesis Biosciences undertakes no obligation to update forward-looking statements.
          </p>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-xs text-text-muted font-mono">{FOOTER.copyright}</p>
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms of Use", "Accessibility"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs text-text-muted hover:text-text-secondary transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
