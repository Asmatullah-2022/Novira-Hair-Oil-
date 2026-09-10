"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Hello ${siteConfig.brandName}, my name is ${
      name || "[Your Name]"
    }. ${message || "I would like to know more about Novira Hair Oil."}`;
    window.open(buildWhatsAppUrl(text), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="bg-novira-cream py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-novira-brown">
            Contact
          </span>
          <h2 className="section-heading mt-3 text-novira-black">
            Order &amp; Contact Us on WhatsApp
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="reveal flex flex-col justify-center rounded-3xl border border-novira-gold/25 bg-novira-black p-8 text-center shadow-card sm:p-10">
            <h3 className="font-display text-2xl font-semibold text-novira-cream">
              {siteConfig.brandName}
            </h3>
            <p className="mt-2 text-sm uppercase tracking-widest text-novira-gold">
              WhatsApp
            </p>
            <p className="mt-1 text-2xl font-semibold text-novira-cream">
              {siteConfig.displayWhatsapp}
            </p>
            <a
              href={buildWhatsAppUrl(
                `Hello ${siteConfig.brandName}, I have a question about Novira Hair Oil.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn mx-auto mt-6"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="reveal flex flex-col gap-4 rounded-3xl border border-novira-gold/20 bg-white p-8 shadow-sm sm:p-10"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-sm font-medium text-novira-black/80"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ali Khan"
                className="w-full rounded-xl border border-novira-gold/30 bg-novira-cream px-4 py-3 text-sm text-novira-black outline-none transition-colors focus:border-novira-gold"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium text-novira-black/80"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us what you'd like to know..."
                className="w-full rounded-xl border border-novira-gold/30 bg-novira-cream px-4 py-3 text-sm text-novira-black outline-none transition-colors focus:border-novira-gold"
              />
            </div>
            <button type="submit" className="gold-btn mt-2 w-full">
              <MessageCircle className="h-4 w-4" />
              Send via WhatsApp
            </button>
            <p className="text-center text-xs text-novira-black/50">
              This opens WhatsApp with your message — we reply there directly.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
