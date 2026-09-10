import { PackageCheck, BadgeCheck, Users2, MessageCircle } from "lucide-react";

const items = [
  { icon: PackageCheck, label: "Premium Packaging" },
  { icon: BadgeCheck, label: "Quality-Focused" },
  { icon: Users2, label: "All Hair Types" },
  { icon: MessageCircle, label: "WhatsApp Ordering" },
];

export default function Trust() {
  return (
    <section className="border-y border-novira-gold/15 bg-novira-black py-12 sm:py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="reveal flex flex-col items-center gap-2 text-center"
          >
            <Icon className="h-7 w-7 text-novira-gold" />
            <span className="text-xs font-semibold uppercase tracking-wide text-novira-cream/80 sm:text-sm">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
