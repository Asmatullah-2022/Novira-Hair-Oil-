import { HeartHandshake, Sun, Sprout, Repeat } from "lucide-react";

const benefits = [
  { icon: HeartHandshake, title: "Helps maintain healthy-looking hair" },
  { icon: Sun, title: "Suitable for everyday hair care" },
  { icon: Sprout, title: "Designed for all hair types" },
  { icon: Repeat, title: "Easy to include in your hair-care routine" },
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

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {benefits.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="reveal flex items-center gap-4 rounded-2xl border border-novira-gold/25 bg-white px-5 py-6 shadow-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-novira-black text-novira-gold">
                <Icon className="h-5 w-5" />
              </span>
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
