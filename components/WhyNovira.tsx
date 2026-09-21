import { Gem, Leaf, Users, CalendarCheck } from "lucide-react";

const cards = [
  {
    icon: Gem,
    title: "Premium Hair Care",
    text: "An elegant, premium-feel product from bottle to formula.",
  },
  {
    icon: Users,
    title: "For All Hair Types",
    text: "Designed to work as part of any hair care routine.",
  },
  {
    icon: Leaf,
    title: "Natural-Inspired Formula",
    text: "Pure and organic, made without harsh chemicals.",
  },
  {
    icon: CalendarCheck,
    title: "Easy Everyday Hair Care",
    text: "A simple addition to your daily or weekly routine.",
  },
];

export default function WhyNovira() {
  return (
    <section className="bg-novira-beige py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-novira-brown">
            Our Promise
          </span>
          <h2 className="section-heading mt-3 text-novira-black">
            Why Choose Novira?
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="reveal flex flex-col items-start gap-4 rounded-2xl border border-novira-gold/30 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-novira-black text-novira-gold">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold text-novira-black">
                {title}
              </h3>
              <p className="text-sm text-novira-black/65">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
