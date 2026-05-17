import React from "react";
import { motion } from "framer-motion";
import { Rocket, ReceiptText, Boxes } from "lucide-react";

const CARDS = [
  {
    Icon: Rocket,
    title: "Fast and Reliable Delivery",
    body: "We move at the speed of creativity and caffeine. Your deadlines will not see us coming.",
    image:
      "https://static.prod-images.emergentagent.com/jobs/d84a0ff5-244c-4fa5-ad25-45938c2831e0/images/03571c10910b5d001ae59c6aeb53ff86501c9e6a9ddf83ad79e164a99e7644f5.png",
  },
  {
    Icon: ReceiptText,
    title: "Clear, No-Surprise Pricing",
    body: "No hidden fees, no sneaky charges. Just honest scopes and work that earns the receipt.",
    image:
      "https://static.prod-images.emergentagent.com/jobs/d84a0ff5-244c-4fa5-ad25-45938c2831e0/images/8739963b0844604547c64fadd98e20399318e7c4c94ee7d846eb56946f9574c7.png",
  },
  {
    Icon: Boxes,
    title: "Everything, Under One Roof",
    body: "Brand, design, websites, social, content. One team, one taste, one Slack channel.",
    image:
      "https://static.prod-images.emergentagent.com/jobs/d84a0ff5-244c-4fa5-ad25-45938c2831e0/images/9a442fdcfd2efda012b6a15b538e44c553fe72e5ff4b6e42ee83dc926065ed56.png",
  },
];

export default function ValueProps() {
  return (
    <section
      id="value-props"
      data-testid="value-props-section"
      className="py-24 md:py-32 bg-bg-1 relative"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {CARDS.map((card, idx) => {
            const { Icon } = card;
            return (
              <motion.div
                key={idx}
                data-testid={`value-prop-card-${idx}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="card-surface p-8 md:p-10 flex flex-col items-center text-center gap-6 min-h-[380px]"
              >
                <div className="w-full max-w-[200px] aspect-square rounded-full bg-white/5 border border-white/10 flex items-center justify-center floaty overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-[88%] h-[88%] object-cover rounded-full"
                    style={{ filter: "grayscale(0.2) brightness(0.95)" }}
                  />
                </div>
                <div className="flex flex-col items-center gap-3">
                  <span className="text-emerald-brand">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-anton uppercase text-2xl md:text-3xl tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-white/60 text-sm md:text-base max-w-xs leading-relaxed">
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
