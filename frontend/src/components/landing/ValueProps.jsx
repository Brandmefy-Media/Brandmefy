import React from "react";
import { motion } from "framer-motion";

const CARDS = [
  {
    title: "Fast and Reliable Delivery",
    body: "We move at the speed of creativity and caffeine. Your deadlines will not see us coming.",
    image:
      "https://static.prod-images.emergentagent.com/jobs/d84a0ff5-244c-4fa5-ad25-45938c2831e0/images/03571c10910b5d001ae59c6aeb53ff86501c9e6a9ddf83ad79e164a99e7644f5.png",
    rot: "-2deg",
  },
  {
    title: "Clear, No-Surprise Pricing",
    body: "No hidden fees, no sneaky charges. Just honest scopes and work that earns the receipt.",
    image:
      "https://static.prod-images.emergentagent.com/jobs/d84a0ff5-244c-4fa5-ad25-45938c2831e0/images/8739963b0844604547c64fadd98e20399318e7c4c94ee7d846eb56946f9574c7.png",
    rot: "1deg",
  },
  {
    title: "Everything, Under One Roof",
    body: "Brand, design, websites, social, content. One team, one taste, one Slack channel.",
    image:
      "https://static.prod-images.emergentagent.com/jobs/d84a0ff5-244c-4fa5-ad25-45938c2831e0/images/9a442fdcfd2efda012b6a15b538e44c553fe72e5ff4b6e42ee83dc926065ed56.png",
    rot: "-1deg",
  },
];

export default function ValueProps() {
  return (
    <section
      id="value-props"
      data-testid="value-props-section"
      className="section-light py-24 md:py-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {CARDS.map((card, idx) => (
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
              className="flex flex-col items-center text-center"
            >
              <div
                className="w-full max-w-[280px] aspect-square rounded-full bg-white flex items-center justify-center mb-8 floaty border-2 border-black/5"
                style={{ "--rot": card.rot, transform: `rotate(${card.rot})`, animationDelay: `${idx * 0.4}s` }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover rounded-full p-3"
                />
              </div>
              <h3 className="font-display-bold text-2xl md:text-3xl uppercase tracking-tight mb-3 text-black">
                {card.title}
              </h3>
              <p className="text-black/65 text-sm md:text-base max-w-xs leading-relaxed">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
