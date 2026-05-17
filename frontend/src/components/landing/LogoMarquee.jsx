import React from "react";
import { motion } from "framer-motion";
import SectionBadge from "@/components/landing/SectionBadge";

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
      className="py-24 md:py-36 bg-bg-2 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-14 relative">
          <SectionBadge label="Brands" shape="apple" color="blue" rotate="-6deg" className="mb-6" />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-anton uppercase text-white tracking-[-0.03em]"
            style={{
              fontSize: "clamp(52px, 10vw, 180px)",
              lineHeight: 0.9,
            }}
          >
            We built the<br />
            rocket, <span className="text-outline-yellow">they flew</span>
          </motion.h2>
        </div>
      </div>

      <div className="marquee py-6 border-y border-white/5">
        <div className="marquee-track">
          {[...LOGOS, ...LOGOS].map((logo, i) => {
            const colors = ["bg-yellow-brand", "bg-pink-brand", "bg-blue-brand", "bg-cream-brand"];
            const dotColor = colors[i % colors.length];
            return (
              <span
                key={i}
                className="font-anton text-4xl md:text-6xl text-white/30 hover:text-white transition-colors duration-300 whitespace-nowrap uppercase tracking-tight inline-flex items-center gap-4"
              >
                {logo}
                <span className={`inline-block w-3 h-3 rounded-full ${dotColor}`} />
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
