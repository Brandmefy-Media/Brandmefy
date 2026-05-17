import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Tobias Green",
    role: "Founder, GreenSpark Innovations",
    quote:
      "Working with this team was a dream. Super organized, wildly creative, and just fun to talk to. They totally got our brand from day one.",
  },
  {
    name: "Silas Leighton",
    role: "Managing Director, VentureVista",
    quote:
      "They took our messy ideas and turned them into a stunning identity. Everything feels cohesive, intentional and us. We are obsessed.",
  },
  {
    name: "Orion Vance",
    role: "CEO, Lunar Lux Co.",
    quote:
      "We still get compliments on our branding. It feels premium, fun and totally fits our vibe. Could not have asked for a better team.",
  },
  {
    name: "Callum Yates",
    role: "Co-Founder, Driftwood Media",
    quote:
      "We have worked with other agencies, but this one felt different in the best way. Creative with purpose and amazing attention to detail.",
  },
  {
    name: "Jasper Lowell",
    role: "CEO, CopperLeaf Enterprises",
    quote:
      "Our online presence went from zero to hero in no time. The team made the process so seamless, I almost forgot I was working on a big project.",
  },
  {
    name: "Lowell Vance",
    role: "Brand Manager, Stellar Bloom Studio",
    quote:
      "Incredible team. They made our brand feel fresh, fun and 100 percent us. The whole process was smooth and actually enjoyable.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="py-24 md:py-32 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-4 mb-12">
          <span className="section-label">Testimonials</span>
          <h2 className="font-serif-display text-4xl md:text-6xl tracking-tight max-w-3xl">
            Clients talk{" "}
            <em className="text-tomato not-italic">and we blush</em>.
          </h2>
        </div>
      </div>

      <div className="marquee py-4">
        <div className="marquee-track">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <motion.div
              key={i}
              className="card-surface w-[340px] md:w-[420px] shrink-0 p-7 md:p-8 flex flex-col gap-5"
            >
              <Quote size={22} className="text-tomato" />
              <p className="text-cream/85 text-sm md:text-base leading-relaxed">
                {t.quote}
              </p>
              <div className="mt-auto pt-4 border-t border-white/10">
                <div className="font-serif-display text-lg">{t.name}</div>
                <div className="text-xs text-cream/55 mt-1">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
