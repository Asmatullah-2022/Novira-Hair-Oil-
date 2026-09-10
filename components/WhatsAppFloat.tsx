"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, getGeneralOrderMessage } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppUrl(getGeneralOrderMessage())}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order Novira Hair Oil on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-300 hover:scale-110 animate-pulseGlow sm:h-16 sm:w-16"
    >
      <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" fill="white" strokeWidth={0} />
      <span className="sr-only">Order Novira Hair Oil on WhatsApp</span>
    </a>
  );
}
