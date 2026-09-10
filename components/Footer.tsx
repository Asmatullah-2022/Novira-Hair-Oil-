import { navLinks, siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-novira-black py-12 text-novira-cream/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-display text-xl font-bold text-novira-cream">
              NOVIRA <span className="text-novira-gold">HAIR OIL</span>
            </p>
            <p className="mt-1 text-sm uppercase tracking-widest text-novira-gold/80">
              Stronger &bull; Thicker &bull; Healthier
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-novira-cream/70 transition-colors hover:text-novira-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 border-t border-novira-gold/15 pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm text-novira-cream/60">
            WhatsApp: {siteConfig.displayWhatsapp}
          </p>
          <p className="text-xs text-novira-cream/50">
            &copy; 2026 {siteConfig.brandName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
