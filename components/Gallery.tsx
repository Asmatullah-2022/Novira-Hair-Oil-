import Image from "next/image";
import { galleryImages } from "@/lib/siteConfig";

export default function Gallery() {
  return (
    <section className="bg-novira-beige py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-novira-brown">
            Gallery
          </span>
          <h2 className="section-heading mt-3 text-novira-black">
            Novira Hair Oil
          </h2>
        </div>

        <div className="mt-12 flex justify-center">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="reveal group relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-3xl border border-novira-gold/25 bg-white shadow-sm"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 90vw, 30vw"
                className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
