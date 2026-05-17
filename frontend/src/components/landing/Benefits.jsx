import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Target,
  Shuffle,
  HeartHandshake,
  Globe2,
  Lightbulb,
  Ruler,
} from "lucide-react";
import SectionBadge from "@/components/landing/SectionBadge";

const BENEFITS = [
  {
    icon: Sparkles,
    title: "Creative Sparks",
    body: "We craft ideas that break the mold and make your brand unforgettable.",
    span: "md:col-span-2",
  },
  {
    icon: Target,
    title: "Design That Delivers",
    body: "Smart, strategic visuals built to grow your brand and move the needle.",
  },
  {
    icon: Shuffle,
    title: "Adaptable & Flexible",
    body: "Tailored solutions for evolving market needs.",
  },
  {
    icon: HeartHandshake,
    title: "Human-Centered Approach",
    body: "We craft brands that connect emotionally and authentically.",
    span: "md:col-span-2",
  },
  {
    icon: Globe2,
    title: "Global Vision, Local Focus",
    body: "Bringing global trends with a local understanding.",
  },
  {
    icon: Lightbulb,
    title: "Ideas You Did Not See Coming",
    body: "Our team thinks outside the box to make your brand stand out.",
  },
  {
    icon: Ruler,
    title: "Every Detail Matters",
    body: "Every element we design is intentional, measured and built to perform.",
    span: "md:col-span-2",
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      data-testid="benefits-section"
      className="py-24 md:py-32 bg-bg-2"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-6 mb-12">
          <SectionBadge label="Benefits" shape="hex" color="blue" rotate="4deg" />
          <h2
            className="font-anton uppercase text-white tracking-[-0.025em]"
            style={{ fontSize: "clamp(44px, 9vw, 144px)", lineHeight: 0.9 }}
          >
            Why we are <span className="text-pink-brand">the best</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            const palette = [
              { color: "text-yellow-brand", bg: "bg-yellow-brand/15 border-yellow-brand/30" },
              { color: "text-pink-brand", bg: "bg-pink-brand/15 border-pink-brand/30" },
              { color: "text-blue-brand", bg: "bg-blue-brand/15 border-blue-brand/30" },
              { color: "text-cream-brand", bg: "bg-white/10 border-white/20" },
            ];
            const c = palette[i % palette.length];
            return (
              <motion.div
                key={i}
                data-testid={`benefit-card-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.05 }}
                className={`card-surface p-6 md:p-8 flex flex-col gap-4 min-h-[210px] ${b.span ?? ""}`}
              >
                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center ${c.bg} ${c.color}`}>
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-anton uppercase text-xl md:text-2xl tracking-tight mb-2">
                    {b.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {b.body}
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
