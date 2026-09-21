import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { products } from "@/lib/siteConfig";
import { buildWhatsAppUrl, getOrderMessage } from "@/lib/whatsapp";

export default function Products() {
  return (
    <section id="products" className="bg-novira-black py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-novira-gold">
            Our Product
          </span>
          <h2 className="section-heading mt-3 text-novira-cream">
            Novira Hair Oil
          </h2>
        </div>

        <div className="mt-12 flex justify-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="reveal group flex w-full max-w-md flex-col overflow-hidden rounded-3xl border border-novira-gold/20 bg-novira-charcoal shadow-card transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative flex h-72 items-center justify-center bg-novira-beige/5 p-6 sm:h-80">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="(max-width: 640px) 90vw, 45vw"
                  className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-novira-cream sm:text-2xl">
                    {product.name}
                  </h3>
                  <span className="rounded-full bg-gold-gradient px-3 py-1 text-xs font-bold uppercase text-novira-black">
                    {product.size}
                  </span>
                </div>

                <p className="mt-3 text-sm text-novira-cream/70 sm:text-base">
                  {product.description}
                </p>

                <dl className="mt-5 space-y-2 rounded-2xl border border-novira-gold/15 bg-novira-black/40 p-4 text-sm">
                  <div className="flex items-center justify-between text-novira-cream/80">
                    <dt>Product Price</dt>
                    <dd>Rs. {product.price.toLocaleString()}</dd>
                  </div>
                  <div className="flex items-center justify-between text-novira-cream/80">
                    <dt>Delivery Charges</dt>
                    <dd>Rs. {product.deliveryCharges.toLocaleString()}</dd>
                  </div>
                  <div className="flex items-center justify-between border-t border-novira-gold/15 pt-2 font-display text-base font-semibold text-novira-gold">
                    <dt>Total</dt>
                    <dd>Rs. {product.total.toLocaleString()}</dd>
                  </div>
                </dl>

                <a
                  href={buildWhatsAppUrl(getOrderMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-btn mt-6 w-full"
                >
                  <MessageCircle className="h-4 w-4" />
                  Order on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
