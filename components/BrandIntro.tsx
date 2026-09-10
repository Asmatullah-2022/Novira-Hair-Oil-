import { Leaf, ShieldCheck, Sparkles } from "lucide-react";

const points = [
  { icon: Leaf, label: "100% Natural" },
  { icon: ShieldCheck, label: "Chemical Free" },
  { icon: Sparkles, label: "Pure & Organic" },
];

export default function BrandIntro() {
  return (
    <section className="bg-novira-cream py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="section-heading text-novira-black reveal">
          Your Hair Deserves Better Care
        </h2>
        <p className="reveal mx-auto mt-5 max-w-2xl text-base text-novira-black/70 sm:text-lg">
          Novira Hair Oil is a pure and organic hair oil, made without harsh
          chemicals and suitable for all hair types. Simple, natural-inspired
          care — for hair that feels stronger, thicker, and healthier.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {points.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="reveal flex flex-col items-center gap-3 rounded-2xl border border-novira-gold/20 bg-white/60 px-6 py-8 shadow-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-gradient text-novira-black">
                <Icon className="h-6 w-6" />
              </div>
              <span className="font-display text-lg font-semibold text-novira-black">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
