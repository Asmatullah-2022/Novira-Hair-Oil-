"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the size of Novira Hair Oil?",
    answer: "Novira Hair Oil is available on this website in a 120 ml bottle.",
  },
  {
    question: "How much does Novira Hair Oil cost?",
    answer: "The product price is Rs. 800.",
  },
  {
    question: "What are the delivery charges?",
    answer: "Delivery charges are Rs. 200.",
  },
  {
    question: "How can I place an order?",
    answer: "Complete the order form and continue to WhatsApp.",
  },
  {
    question: "What hair types is it suitable for?",
    answer: "The product is presented as suitable for all hair types.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-novira-cream py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-novira-brown">
            FAQ
          </span>
          <h2 className="section-heading mt-3 text-novira-black">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="reveal mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-novira-gold/25 bg-white shadow-sm"
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-novira-black transition-colors hover:bg-novira-cream/60 sm:text-base"
                  >
                    {faq.question}
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-novira-gold-dark transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-5 pb-4 text-sm text-novira-black/70 sm:text-base"
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
