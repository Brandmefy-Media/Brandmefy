import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HERO_BG =
  "https://static.prod-images.emergentagent.com/jobs/d84a0ff5-244c-4fa5-ad25-45938c2831e0/images/908ca9938d6ef392af18eea83f62ccff00a7ac29af1485a3bac72eec36ff340a.png";

export default function Hero() {
  const scrollNext = () =>
    document
      .getElementById("value-props")
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative pt-32 md:pt-40 pb-0 overflow-hidden grain bg-[var(--bg-0)]"
    >
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[720px] rounded-full bg-emerald-brand/10 blur-[160px] pointer-events-none"
      />

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        {/* BRANDMEFY massive display with stickers */}
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
              className="sticker sticker-flower floaty"
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
              className="sticker sticker-flower floaty"
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
              className="sticker sticker-burst sticker-emerald floaty"
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
          <span className="text-emerald-brand">Seen</span>,{" "}
          <span className="italic">Heard</span>, and{" "}
          <span className="text-outline-white">Remembered</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-6 text-white/65 max-w-xl text-base md:text-lg px-2"
        >
          brandmefy is a small, sharp studio building bold identities, websites
          and campaigns for brands that want to feel like the room they walk
          into.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-4"
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

        {/* Circular hero image with corrugated edge framing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 60 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 md:mt-24 w-full max-w-[640px] aspect-square rounded-full overflow-hidden relative border border-white/10"
        >
          <img
            src={HERO_BG}
            alt="brandmefy creative work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
          <div className="absolute bottom-6 left-0 right-0 flex justify-center">
            <span className="font-hand text-white text-2xl md:text-3xl">
              beyond marketing
            </span>
          </div>
          <span className="spin-slow absolute top-4 right-4 w-16 h-16 rounded-full border border-white/30 flex items-center justify-center text-[10px] uppercase tracking-[0.3em] text-white/70">
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
              <defs>
                <path id="circ" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
              </defs>
              <text fill="white" fontSize="9" fontFamily="Anton">
                <textPath href="#circ">brandmefy · beyond marketing · </textPath>
              </text>
            </svg>
          </span>
        </motion.div>

        <button
          data-testid="hero-scroll-down"
          onClick={scrollNext}
          className="mt-10 mb-10 inline-flex items-center gap-2 text-xs text-white/50 hover:text-white transition-colors"
        >
          <ArrowDown size={14} /> Scroll
        </button>
      </div>
    </section>
  );
}
