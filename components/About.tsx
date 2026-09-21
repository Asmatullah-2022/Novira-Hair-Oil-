import Image from "next/image";
import { heroImage } from "@/lib/siteConfig";

export default function About() {
  return (
    <section id="about" className="bg-novira-cream py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="reveal relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl border border-novira-gold/25 bg-white shadow-card">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            sizes="(max-width: 1024px) 90vw, 40vw"
            className="object-contain p-8"
          />
        </div>

        <div className="reveal text-center lg:text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-novira-brown">
            About Novira
          </span>
          <h2 className="section-heading mt-3 text-novira-black">
            Simple Hair Care. Premium Experience.
          </h2>
          <p className="mt-5 text-base text-novira-black/70 sm:text-lg">
            Novira Hair Oil is designed to bring a simple, natural-inspired
            hair-care experience into your everyday routine.
          </p>
        </div>
      </div>
    </section>
  );
}
