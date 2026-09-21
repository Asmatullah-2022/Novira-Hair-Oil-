"use client";

import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/siteConfig";
import { buildWhatsAppUrl, getOrderMessage } from "@/lib/whatsapp";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-novira-black/95 shadow-card backdrop-blur"
          : "bg-novira-black/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-wide text-novira-cream sm:text-xl"
        >
          NOVIRA <span className="text-novira-gold">HAIR OIL</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide text-novira-cream/90 transition-colors hover:text-novira-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={buildWhatsAppUrl(getOrderMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-btn"
          >
            <MessageCircle className="h-4 w-4" />
            Order Now
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-novira-cream lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-novira-gold/20 bg-novira-black px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-novira-cream/90 transition-colors hover:bg-novira-gold/10 hover:text-novira-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={buildWhatsAppUrl(getOrderMessage())}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="gold-btn mt-4 w-full"
          >
            <MessageCircle className="h-4 w-4" />
            Order Now on WhatsApp
          </a>
          <p className="mt-3 text-center text-xs text-novira-cream/60">
            {siteConfig.displayWhatsapp}
          </p>
        </div>
      )}
    </header>
  );
}
