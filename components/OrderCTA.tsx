import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, getOrderMessage } from "@/lib/whatsapp";

export default function OrderCTA() {
  return (
    <section className="relative overflow-hidden bg-novira-charcoal py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-dark-radial" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="reveal font-display text-3xl font-bold text-novira-cream sm:text-4xl md:text-5xl">
          Ready to Give Your Hair Better Care?
        </h2>
        <p className="reveal mt-4 text-base text-novira-cream/75 sm:text-lg">
          Order Novira Hair Oil directly through WhatsApp.
        </p>
        <a
          href={buildWhatsAppUrl(getOrderMessage())}
          target="_blank"
          rel="noopener noreferrer"
          className="gold-btn reveal mt-8 w-full sm:w-auto"
        >
          <MessageCircle className="h-5 w-5" />
          Order Now on WhatsApp
        </a>
      </div>
    </section>
  );
}
