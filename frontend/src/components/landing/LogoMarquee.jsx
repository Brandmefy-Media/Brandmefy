import React from "react";
import { motion } from "framer-motion";

const LOGOS = [
  "LunarLab",
  "VibeCraft",
  "Sunbeam",
  "NeonVibe",
  "HorizonHue",
  "BoldBrew",
  "FlexFit",
  "BloomBerry",
];

export default function LogoMarquee() {
  return (
    <section
      id="brands"
      data-testid="brands-section"
      className="section-light py-24 md:py-36 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.span
            initial={{ opacity: 0, scale: 0, rotate: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="sticker sticker-burst mb-6"
            style={{ background: "var(--brand-green)" }}
          >
            Brands
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display-bold uppercase text-black"
            style={{
              fontSize: "clamp(48px, 9vw, 160px)",
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
            }}
          >
            We built the<br />rocket, they flew
          </motion.h2>
        </div>
      </div>

      <div className="marquee py-8">
        <div className="marquee-track">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <span
              key={i}
              className="font-display-bold text-3xl md:text-5xl text-black/30 hover:text-black transition-colors duration-300 whitespace-nowrap uppercase tracking-tight inline-flex items-center gap-4"
            >
              {logo}
              <span className="inline-block w-3 h-3 rounded-full bg-green-brand" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
