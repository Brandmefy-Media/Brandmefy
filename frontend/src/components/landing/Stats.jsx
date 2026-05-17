import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionBadge from "@/components/landing/SectionBadge";

const STATS = [
  { value: 30, suffix: "+", label: "Brands launched" },
  { value: 100, suffix: "+", label: "Projects delivered" },
  { value: 250, suffix: "+", label: "Moodboards created" },
  { value: 95, suffix: "%", label: "Happy clients" },
];

function Counter({ to, suffix }) {
  const [val, setVal] = useState(1);
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
      setVal(Math.max(1, Math.round(to * eased)));
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
      className="py-24 md:py-32 bg-[var(--bg-0)] relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.10] pointer-events-none"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1800&q=80&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.9), transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.9), transparent 75%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionBadge label="Numbers" shape="badge" color="yellow" rotate="-5deg" />
          <p className="text-white/55 text-sm md:text-base max-w-md">
            A few honest figures from a few honest years of doing the work.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
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
              <div
                className="font-anton uppercase text-white"
                style={{ fontSize: "clamp(44px, 7vw, 104px)", lineHeight: 0.95 }}
              >
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-xs md:text-sm text-white/55 uppercase tracking-[0.2em]">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
