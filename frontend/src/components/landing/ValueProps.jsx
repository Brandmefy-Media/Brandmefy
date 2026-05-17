import React from "react";
import { motion } from "framer-motion";
import { Rocket, ReceiptText, Boxes } from "lucide-react";

const CARDS = [
  {
    icon: Rocket,
    title: "Fast and Reliable Delivery",
    body: "We move at the speed of creativity and caffeine. Your deadlines will not see us coming.",
  },
  {
    icon: ReceiptText,
    title: "Clear, No-Surprise Pricing",
    body: "No hidden fees, no sneaky charges. Just honest scopes and work that earns the receipt.",
  },
  {
    icon: Boxes,
    title: "Everything, Under One Roof",
    body: "Brand, design, websites, social, content. One team, one taste, one Slack channel.",
  },
];

export default function ValueProps() {
  return (
    <section
      id="value-props"
      data-testid="value-props-section"
      className="py-24 md:py-32 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                data-testid={`value-prop-card-${idx}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="card-surface p-8 md:p-10 flex flex-col gap-6 min-h-[300px]"
              >
                <div className="w-14 h-14 rounded-2xl bg-[var(--brand-tomato)]/10 flex items-center justify-center text-tomato border border-[var(--brand-tomato)]/20">
                  <Icon size={26} />
                </div>
                <div>
                  <h3 className="font-serif-display text-2xl md:text-3xl leading-tight mb-3">
                    {card.title}
                  </h3>
                  <p className="text-cream/65 text-sm md:text-base leading-relaxed">
                    {card.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
