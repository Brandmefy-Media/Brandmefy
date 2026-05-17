import React from "react";
import { motion } from "framer-motion";
import { Coffee, Compass, PencilRuler, Rocket } from "lucide-react";

const STEPS = [
  {
    n: "01",
    Icon: Coffee,
    title: "Kickoff & Coffee Chats",
    body: "We get to know you. Your brand, your goals, your vibe. This is where the ideas start flying and the creative wheels start turning.",
  },
  {
    n: "02",
    Icon: Compass,
    title: "Strategy & Concepts",
    body: "We map out the playing field, sharpen the message and put a few bold concepts on the table for you to fall in love with.",
  },
  {
    n: "03",
    Icon: PencilRuler,
    title: "Design & Refine",
    body: "We design, iterate and obsess over the details until everything feels tight, intentional and unmistakably you.",
  },
  {
    n: "04",
    Icon: Rocket,
    title: "Launch & Celebrate",
    body: "We ship, watch the launch land, and toast with the good coffee. Then we keep optimising.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      data-testid="process-section"
      className="py-24 md:py-32 bg-bg-1 relative"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-4 mb-14">
          <span className="section-label inline-flex">Process</span>
          <h2
            className="font-anton uppercase text-white tracking-[-0.025em]"
            style={{ fontSize: "clamp(44px, 9vw, 144px)", lineHeight: 0.9 }}
          >
            Our not-so-secret{" "}
            <span className="text-blue-brand">sauce</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          {STEPS.map((s, i) => {
            const { Icon } = s;
            const palette = [
              { txt: "text-yellow-brand", bg: "bg-yellow-brand/15 border-yellow-brand/30" },
              { txt: "text-pink-brand", bg: "bg-pink-brand/15 border-pink-brand/30" },
              { txt: "text-blue-brand", bg: "bg-blue-brand/15 border-blue-brand/30" },
              { txt: "text-cream-brand", bg: "bg-white/10 border-white/20" },
            ];
            const c = palette[i % palette.length];
            return (
              <motion.div
                key={i}
                data-testid={`process-step-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="card-surface p-6 md:p-10 flex gap-5 md:gap-8 items-start"
              >
                <div className="shrink-0 flex flex-col items-center gap-3">
                  <span className={`font-anton text-4xl md:text-6xl ${c.txt}`}>
                    {s.n}
                  </span>
                  <span className={`w-12 h-12 rounded-full border flex items-center justify-center ${c.bg} ${c.txt}`}>
                    <Icon size={20} />
                  </span>
                </div>
                <div>
                  <h3 className="font-anton uppercase text-2xl md:text-3xl tracking-tight mb-3">
                    {s.title}
                  </h3>
                  <p className="text-white/65 leading-relaxed text-sm md:text-base">
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
