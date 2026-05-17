import React from "react";
import { motion } from "framer-motion";
import SectionBadge from "@/components/landing/SectionBadge";

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-24 md:py-32 bg-bg-1 border-t border-white/5 relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.10] pointer-events-none"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1800&q=80&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,0.05), rgba(0,0,0,0.7))",
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0,0,0,0.05), rgba(0,0,0,0.7))",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-pink-brand/[0.08] blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <SectionBadge label="About us" shape="cloud" color="pink" rotate="-4deg" />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-white max-w-5xl mt-8"
          style={{
            fontSize: "clamp(22px, 3.4vw, 48px)",
            lineHeight: 1.25,
            fontWeight: 400,
            letterSpacing: "-0.01em",
          }}
        >
          We started at a kitchen table in <span className="text-yellow-brand font-anton">Coimbatore</span> with coffee, chaos and a shared love
          for bold ideas. Now we are a small team doing big things for brands
          across the world.{" "}
          <span className="text-blue-brand font-anton">Branding, designing, creating</span>{" "}
          work that actually makes people feel something. No fluff, no fuss,
          just scroll-stopping creativity.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
          {[
            { label: "Based in", value: "Coimbatore, India", color: "text-yellow-brand" },
            { label: "Available", value: "Worldwide, remote", color: "text-pink-brand" },
            { label: "Open hours", value: "Mon to Sat, 9 AM to 9 PM IST", color: "text-blue-brand" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="border-t border-white/10 pt-5"
            >
              <div className="text-xs uppercase tracking-[0.25em] text-white/40 mb-2">
                {item.label}
              </div>
              <div className={`font-oswald text-lg md:text-xl uppercase ${item.color}`}>
                {item.value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
