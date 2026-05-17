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
      className="py-20 md:py-28 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-4 mb-10"
        >
          <span className="section-label">Brands</span>
          <h2 className="font-serif-display text-4xl md:text-6xl tracking-tight max-w-3xl">
            We built the rocket, <em className="text-tomato not-italic">they flew</em>.
          </h2>
        </motion.div>
      </div>

      <div className="marquee py-6 border-y border-white/5 bg-charcoal/40">
        <div className="marquee-track">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <span
              key={i}
              className="font-serif-display text-3xl md:text-5xl text-cream/40 hover:text-cream transition-colors duration-300 whitespace-nowrap"
            >
              {logo} <span className="text-tomato/60">*</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
