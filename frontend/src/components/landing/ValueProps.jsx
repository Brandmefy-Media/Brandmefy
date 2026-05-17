import React from "react";
import { motion } from "framer-motion";

const CARDS = [
  {
    title: "Fast and Reliable Delivery",
    body: "We move at the speed of creativity and caffeine. Your deadlines will not even see us coming.",
    image:
      "https://static.prod-images.emergentagent.com/jobs/d84a0ff5-244c-4fa5-ad25-45938c2831e0/images/03571c10910b5d001ae59c6aeb53ff86501c9e6a9ddf83ad79e164a99e7644f5.png",
    blob: "var(--accent-yellow)",
    tilt: "-2deg",
    sticker: { label: "Fast", className: "sticker-pink", rotate: "-12deg", pos: "top-2 -right-2" },
  },
  {
    title: "Clear, No-Surprise Pricing",
    body: "No hidden fees, no sneaky charges. Just honest scopes and work that earns the receipt.",
    image:
      "https://static.prod-images.emergentagent.com/jobs/d84a0ff5-244c-4fa5-ad25-45938c2831e0/images/8739963b0844604547c64fadd98e20399318e7c4c94ee7d846eb56946f9574c7.png",
    blob: "var(--accent-pink)",
    tilt: "1deg",
    sticker: { label: "Honest", className: "sticker-yellow", rotate: "8deg", pos: "-top-2 -left-3" },
  },
  {
    title: "Everything, Under One Roof",
    body: "Design, branding, websites, content. One team, one taste, one Slack channel.",
    image:
      "https://static.prod-images.emergentagent.com/jobs/d84a0ff5-244c-4fa5-ad25-45938c2831e0/images/9a442fdcfd2efda012b6a15b538e44c553fe72e5ff4b6e42ee83dc926065ed56.png",
    blob: "var(--accent-blue)",
    tilt: "-1deg",
    sticker: { label: "All In One", className: "sticker-cream", rotate: "-10deg", pos: "top-4 -right-3" },
  },
];

function BlobShape({ color }) {
  return (
    <svg viewBox="0 0 400 480" className="absolute inset-0 w-full h-full" aria-hidden>
      <defs>
        <filter id="blur" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>
      <path
        d="M200 30 C 280 30, 360 80, 370 180 C 380 280, 340 380, 250 430 C 160 470, 60 430, 40 320 C 20 200, 80 80, 200 30 Z"
        fill={color}
        opacity="0.25"
        filter="url(#blur)"
      />
      <path
        d="M200 30 C 280 30, 360 80, 370 180 C 380 280, 340 380, 250 430 C 160 470, 60 430, 40 320 C 20 200, 80 80, 200 30 Z"
        fill={color}
        opacity="0.12"
      />
    </svg>
  );
}

export default function ValueProps() {
  return (
    <section
      id="value-props"
      data-testid="value-props-section"
      className="py-24 md:py-32 bg-bg-1 relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-yellow-brand/[0.03] blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {CARDS.map((card, idx) => (
            <motion.div
              key={idx}
              data-testid={`value-prop-card-${idx}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: idx * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col items-center text-center group"
            >
              {/* Illustration in colored blob */}
              <div
                className="relative w-full max-w-[340px] aspect-[5/6] mb-8 floaty"
                style={{
                  "--rot": card.tilt,
                  transform: `rotate(${card.tilt})`,
                  animationDelay: `${idx * 0.4}s`,
                }}
              >
                <BlobShape color={card.blob} />
                <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-contain"
                    style={{
                      filter: "brightness(0) invert(1)",
                    }}
                  />
                </div>
                {/* Sticker badge floating around blob */}
                <span
                  className={`absolute sticker sticker-pill ${card.sticker.className} ${card.sticker.pos}`}
                  style={{ transform: `rotate(${card.sticker.rotate})` }}
                >
                  {card.sticker.label}
                </span>
              </div>

              <h3
                className="font-oswald uppercase text-white tracking-tight mb-4"
                style={{ fontSize: "clamp(24px, 2.6vw, 36px)", lineHeight: 1.05, fontWeight: 600 }}
              >
                {card.title}
              </h3>
              <p className="text-white/65 text-sm md:text-base max-w-xs leading-relaxed">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
