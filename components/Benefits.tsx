import {
  Sprout,
  Droplets,
  Crown,
  Sun,
  HeartHandshake,
  Repeat,
} from "lucide-react";

const benefits = [
  { icon: Sprout, title: "Suitable for All Hair Types" },
  { icon: Droplets, title: "Natural Hair Care" },
  { icon: Crown, title: "Premium Hair Oil" },
  { icon: Sun, title: "Daily Hair Care" },
  { icon: HeartHandshake, title: "Helps Maintain Healthy-Looking Hair" },
  { icon: Repeat, title: "Easy Hair Care Routine" },
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-novira-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-novira-brown">
            Benefits
          </span>
          <h2 className="section-heading mt-3 text-novira-black">
            Made for Your Hair Care Routine
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
          {benefits.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="reveal flex flex-col items-center gap-3 rounded-2xl border border-novira-gold/25 bg-white px-4 py-8 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <Icon className="h-8 w-8 text-novira-gold" />
              <p className="text-sm font-medium text-novira-black/80 sm:text-base">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
