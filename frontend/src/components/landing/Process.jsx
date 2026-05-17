import React from "react";
import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "Kickoff & Coffee Chats",
    body: "We get to know you. Your brand, your goals, your vibe. This is where the ideas start flying and the creative wheels start turning.",
  },
  {
    n: "02",
    title: "Strategy & Concepts",
    body: "We map out the playing field, sharpen the message and put a few bold concepts on the table for you to fall in love with.",
  },
  {
    n: "03",
    title: "Design & Refine",
    body: "We design, iterate and obsess over the details until everything feels tight, intentional and unmistakably you.",
  },
  {
    n: "04",
    title: "Launch & Celebrate",
    body: "We ship, watch the launch land, and toast with the good coffee. Then we keep optimising.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      data-testid="process-section"
      className="py-24 md:py-32 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-4 mb-14">
          <span className="section-label">Process</span>
          <h2 className="font-serif-display text-4xl md:text-6xl tracking-tight max-w-3xl">
            Our not-so-secret <em className="text-tomato not-italic">sauce</em>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
          {STEPS.map((s, i) => (
            <motion.div
              key={i}
              data-testid={`process-step-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="border-t border-white/10 py-8 md:py-10 flex gap-6 md:gap-10"
            >
              <span className="font-serif-display text-3xl md:text-5xl text-tomato/80 shrink-0">
                {s.n}
              </span>
              <div>
                <h3 className="font-serif-display text-2xl md:text-3xl mb-3">
                  {s.title}
                </h3>
                <p className="text-cream/65 leading-relaxed text-sm md:text-base max-w-md">
                  {s.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
