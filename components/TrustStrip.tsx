import { Leaf, ShieldCheck, Users, Crown } from "lucide-react";

const points = [
  { icon: Leaf, label: "100% Natural*" },
  { icon: ShieldCheck, label: "Chemical Free*" },
  { icon: Users, label: "For All Hair Types" },
  { icon: Crown, label: "Premium Hair Care" },
];

export default function TrustStrip() {
  return (
    <section className="bg-novira-cream py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {points.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="reveal flex flex-col items-center gap-3 rounded-2xl border border-novira-gold/20 bg-white/60 px-4 py-6 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 sm:px-6 sm:py-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-gradient text-novira-black">
                <Icon className="h-5 w-5" />
              </div>
              <span className="font-display text-sm font-semibold text-novira-black sm:text-base">
                {label}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-novira-black/50">
          * As stated on Novira Hair Oil packaging.
        </p>
      </div>
    </section>
  );
}
