const steps = [
  {
    number: "01",
    title: "Apply",
    text: "Apply an appropriate amount of hair oil to the scalp and hair.",
  },
  {
    number: "02",
    title: "Massage",
    text: "Gently massage the scalp with your fingertips.",
  },
  {
    number: "03",
    title: "Care",
    text: "Leave for an appropriate period and wash according to your normal hair-care routine.",
  },
];

export default function HowToUse() {
  return (
    <section id="how-to-use" className="bg-novira-black py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-novira-gold">
            Simple Routine
          </span>
          <h2 className="section-heading mt-3 text-novira-cream">
            How to Use
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="reveal relative text-center">
              <span className="font-display text-6xl font-bold text-novira-gold/25 sm:text-7xl">
                {step.number}
              </span>
              <h3 className="-mt-6 font-display text-xl font-semibold text-novira-cream sm:text-2xl">
                {step.title}
              </h3>
              <p className="mx-auto mt-3 max-w-xs text-sm text-novira-cream/70 sm:text-base">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
