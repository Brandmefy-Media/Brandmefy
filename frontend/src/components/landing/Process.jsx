import React from "react";
import { motion } from "framer-motion";
import { Coffee, Compass, PencilRuler, Rocket } from "lucide-react";

const STEPS = [
  {
    n: "01",
    icon: Coffee,
    title: "Kickoff & Coffee Chats",
    body: "We get to know you. Your brand, your goals, your vibe. This is where the ideas start flying and the creative wheels start turning.",
  },
  {
    n: "02",
    icon: Compass,
    title: "Strategy & Concepts",
    body: "We map out the playing field, sharpen the message and put a few bold concepts on the table for you to fall in love with.",
  },
  {
    n: "03",
    icon: PencilRuler,
    title: "Design & Refine",
    body: "We design, iterate and obsess over the details until everything feels tight, intentional and unmistakably you.",
  },
  {
    n: "04",
    icon: Rocket,
    title: "Launch & Celebrate",
    body: "We ship, watch the launch land, and toast with the good coffee. Then we keep optimising.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      data-testid="process-section"
      className="section-light py-24 md:py-32 relative"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-4 mb-14">
          <span className="section-label section-label-dark inline-flex">Process</span>
          <h2
            className="font-display-bold uppercase text-black"
            style={{ fontSize: "clamp(40px, 8vw, 128px)", lineHeight: 0.92, letterSpacing: "-0.02em" }}
          >
            Our not-so-secret <span className="text-green-brand">sauce</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                data-testid={`process-step-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="card-light p-6 md:p-10 flex gap-5 md:gap-8 items-start"
              >
                <div className="shrink-0 flex flex-col items-center gap-3">
                  <span className="font-display-bold text-4xl md:text-6xl text-green-brand">
                    {s.n}
                  </span>
                  <span className="w-12 h-12 rounded-full bg-green-brand/15 border border-green-brand/30 flex items-center justify-center text-green-brand">
                    <Icon size={20} />
                  </span>
                </div>
                <div>
                  <h3 className="font-display-bold uppercase text-2xl md:text-3xl tracking-tight mb-3 text-black">
                    {s.title}
                  </h3>
                  <p className="text-black/65 leading-relaxed text-sm md:text-base">
                    {s.body}
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
