import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { heroImage, products } from "@/lib/siteConfig";

export default function Hero() {
  const product = products[0];

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-novira-black pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-dark-radial" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <div className="reveal order-2 text-center lg:order-1 lg:text-left">
          <span className="inline-block rounded-full border border-novira-gold/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-novira-gold">
            Premium Hair Care
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-novira-cream sm:text-5xl md:text-6xl">
            <span className="gold-underline">Stronger.</span> Thicker.
            <br className="hidden sm:block" /> Healthier.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base text-novira-cream/75 sm:text-lg lg:mx-0">
            Discover Novira Hair Oil — a premium hair care oil for your
            everyday hair-care routine.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#order" className="gold-btn w-full sm:w-auto">
              <MessageCircle className="h-4 w-4" />
              Order Now
            </a>
            <a href="#products" className="outline-btn w-full sm:w-auto">
              Explore Product
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="reveal order-1 flex justify-center lg:order-2">
          <div className="relative flex h-[340px] w-[260px] items-center justify-center sm:h-[420px] sm:w-[320px] lg:h-[520px] lg:w-[400px]">
            <div className="absolute inset-0 animate-pulseGlow rounded-full bg-novira-gold/20 blur-3xl" />
            <div className="relative h-full w-full animate-float">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                priority
                sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 400px"
                className="object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.55)]"
              />
            </div>

            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-novira-gold/40 bg-novira-black/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-novira-cream shadow-gold backdrop-blur sm:bottom-4">
              <span>{product.size}</span>
              <span className="h-3 w-px bg-novira-gold/40" />
              <span className="text-novira-gold">
                Rs. {product.price.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
