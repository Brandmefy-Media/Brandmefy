import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-24 md:py-32 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <span className="section-label mb-6 inline-flex">About us</span>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif-display text-3xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight max-w-5xl"
        >
          We started at a kitchen table with coffee, chaos and a shared love for
          bold ideas. Now we are a small team doing big things.{" "}
          <span className="text-tomato">Branding, designing, creating</span>{" "}
          work that actually makes people feel something. No fluff, no fuss,
          just scroll-stopping creativity.
        </motion.p>
      </div>
    </section>
  );
}
