import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollNext = () =>
    document
      .getElementById("value-props")
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden grain bg-[var(--bg-0)]"
    >
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[720px] rounded-full bg-yellow-brand/10 blur-[160px] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute top-1/3 -left-32 w-[420px] h-[420px] rounded-full bg-pink-brand/10 blur-[140px] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute bottom-0 -right-32 w-[420px] h-[420px] rounded-full bg-blue-brand/10 blur-[140px] pointer-events-none"
      />

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <div className="relative w-full flex justify-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-white leading-[0.85] tracking-[-0.04em] whitespace-nowrap"
            style={{ fontSize: "clamp(56px, 14vw, 200px)" }}
            data-testid="hero-brand-word"
          >
            BRANDMEFY
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -25 }}
            animate={{ opacity: 1, scale: 1, rotate: -10 }}
            transition={{ duration: 0.7, delay: 0.5, type: "spring" }}
            className="absolute top-[-2%] left-[3%] md:left-[8%]"
            style={{ "--rot": "-10deg" }}
          >
            <span
              className="sticker sticker-flower sticker-pink floaty"
              style={{ transform: "rotate(-10deg)" }}
            >
              Timeless
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: 20 }}
            animate={{ opacity: 1, scale: 1, rotate: 8 }}
            transition={{ duration: 0.7, delay: 0.65, type: "spring" }}
            className="absolute top-[12%] right-[8%] md:right-[18%] hidden sm:block"
            style={{ "--rot": "8deg" }}
          >
            <span
              className="sticker sticker-flower sticker-blue floaty"
              style={{
                transform: "rotate(8deg)",
                animationDelay: "0.7s",
              }}
            >
              Creative
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: -5 }}
            transition={{ duration: 0.7, delay: 0.8, type: "spring" }}
            className="absolute bottom-[4%] right-[2%] md:right-[8%]"
            style={{ "--rot": "-5deg" }}
          >
            <span
              className="sticker sticker-burst sticker-yellow floaty"
              style={{
                transform: "rotate(-5deg)",
                animationDelay: "1.4s",
              }}
            >
              Edgy
            </span>
          </motion.div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-display text-white mt-16 md:mt-24 max-w-4xl tracking-tight px-2"
          style={{
            fontSize: "clamp(24px, 3.6vw, 48px)",
            lineHeight: 1.25,
          }}
        >
          Your brand deserves to be{" "}
          <span className="text-yellow-brand">Seen</span>,{" "}
          <span className="italic text-pink-brand">Heard</span>, and{" "}
          <span className="text-outline-blue">Remembered</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-6 text-white/70 max-w-xl text-base md:text-lg px-2"
        >
          brandmefy is a small, sharp studio building bold identities, websites
          and campaigns for brands that want to feel like the room they walk
          into.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-4"
        >
          <button
            data-testid="hero-cta-primary"
            onClick={() =>
              document
                .getElementById("speak-to-us")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary"
          >
            Speak to us
          </button>
          <button
            data-testid="hero-cta-secondary"
            onClick={() =>
              document
                .getElementById("portfolio")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-ghost"
          >
            See our work
          </button>
        </motion.div>

        {/* Color chip strip - replaces circle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 md:mt-20 flex items-center gap-6 md:gap-10 text-xs uppercase tracking-[0.3em] text-white/40"
        >
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-yellow-brand" /> Bold
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-pink-brand" /> Playful
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-brand" /> Sharp
          </span>
          <span className="hidden md:flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-cream-brand" /> Considered
          </span>
        </motion.div>

        <button
          data-testid="hero-scroll-down"
          onClick={scrollNext}
          className="mt-12 inline-flex items-center gap-2 text-xs text-white/50 hover:text-white transition-colors"
        >
          <ArrowDown size={14} /> Scroll
        </button>
      </div>
    </section>
  );
}
