import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: 120, suffix: "+", label: "Brands launched" },
  { value: 350, suffix: "+", label: "Projects delivered" },
  { value: 500, suffix: "+", label: "Moodboards created" },
  { value: 99, suffix: "%", label: "Happy clients" },
];

function Counter({ to, suffix }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const startTime = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - startTime) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section
      id="stats"
      data-testid="stats-section"
      className="py-24 md:py-32 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <span className="section-label mb-6 inline-flex">Numbers</span>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 mt-8">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              data-testid={`stat-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="border-t border-white/10 pt-6"
            >
              <div className="font-serif-display text-5xl md:text-7xl tracking-tight">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-sm text-cream/55 uppercase tracking-wider">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
