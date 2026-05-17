import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const OTHERS = [
  "Generic Solutions",
  "Jargon Overload",
  "Boring Creativity",
  "Fluff Metrics",
  "One-Time Campaigners",
  "Hidden Costs",
  "Outdated Methods",
  "Limited Scope",
  "Reactive Tactics",
  "Just Another Client",
];

const US = [
  "Personalized Plans",
  "Plain Talk",
  "Bold Ideas",
  "Real ROI",
  "Long-Term Partners",
  "Transparent Pricing",
  "Innovative Tools",
  "Full-Service Experts",
  "Proactive Strategies",
  "Passion & Care",
];

export default function BuiltDifferent() {
  return (
    <section
      id="differences"
      data-testid="differences-section"
      className="py-24 md:py-32 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-4 mb-14">
          <span className="section-label">Differences</span>
          <h2 className="font-serif-display text-4xl md:text-6xl tracking-tight max-w-3xl">
            Built different{" "}
            <em className="text-tomato not-italic">(in a good way)</em>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 p-8 md:p-10 bg-charcoal/40"
          >
            <h3 className="font-serif-display text-2xl md:text-3xl text-cream/40 mb-6">
              Other Agencies
            </h3>
            <ul className="space-y-4">
              {OTHERS.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-cream/40 line-through decoration-cream/20"
                >
                  <X size={16} className="shrink-0" />
                  <span className="text-base md:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-tomato/30 p-8 md:p-10 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,77,77,0.10), rgba(244,240,230,0.02))",
            }}
          >
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-tomato/20 blur-[100px] rounded-full" />
            <h3 className="font-serif-display text-2xl md:text-3xl mb-6 relative">
              Brandmefy <span className="text-tomato">.</span>
            </h3>
            <ul className="space-y-4 relative">
              {US.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-cream"
                >
                  <span className="shrink-0 w-5 h-5 rounded-full bg-tomato text-black flex items-center justify-center">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-base md:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
