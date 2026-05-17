import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HERO_BG =
  "https://static.prod-images.emergentagent.com/jobs/d84a0ff5-244c-4fa5-ad25-45938c2831e0/images/908ca9938d6ef392af18eea83f62ccff00a7ac29af1485a3bac72eec36ff340a.png";

export default function Hero() {
  const scrollNext = () =>
    document.getElementById("value-props")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative pt-28 md:pt-36 pb-12 md:pb-16 overflow-hidden grain bg-[var(--brand-black)]"
    >
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[680px] h-[680px] rounded-full bg-[var(--brand-green)]/20 blur-[140px] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        {/* Floating sticker badges around the main word */}
        <div className="relative w-full flex justify-center">
          {/* BRANDMEFY massive display */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display-bold leading-[0.82] tracking-tight text-[var(--brand-green)]"
            style={{
              fontSize: "clamp(72px, 22vw, 320px)",
              letterSpacing: "-0.04em",
            }}
            data-testid="hero-brand-word"
          >
            BRANDMEFY
          </motion.h1>

          {/* Stickers floating around the big word */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: -10 }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
            className="absolute top-[-8%] left-[2%] md:left-[6%]"
          >
            <span
              className="sticker sticker-flower floaty"
              style={{ "--rot": "-10deg", transform: "rotate(-10deg)" }}
            >
              Timeless
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: 20 }}
            animate={{ opacity: 1, scale: 1, rotate: 8 }}
            transition={{ duration: 0.6, delay: 0.55, type: "spring" }}
            className="absolute top-[8%] right-[10%] md:right-[18%] hidden sm:block"
          >
            <span
              className="sticker sticker-flower floaty"
              style={{ "--rot": "8deg", transform: "rotate(8deg)", animationDelay: "0.6s" }}
            >
              Creative
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: -5 }}
            transition={{ duration: 0.6, delay: 0.7, type: "spring" }}
            className="absolute bottom-[2%] right-[2%] md:right-[6%]"
          >
            <span
              className="sticker sticker-burst floaty"
              style={{ "--rot": "-5deg", transform: "rotate(-5deg)", animationDelay: "1.2s" }}
            >
              Edgy
            </span>
          </motion.div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-display text-cream mt-8 md:mt-12 max-w-4xl"
          style={{
            fontSize: "clamp(28px, 4.5vw, 64px)",
            lineHeight: 1.08,
            fontWeight: 500,
            letterSpacing: "-0.01em",
          }}
        >
          Your brand deserves to be{" "}
          <span className="text-green-brand">Seen</span>,{" "}
          <span className="italic">Heard</span>, and{" "}
          <span className="text-outline-cream">Remembered</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-6 text-cream/65 max-w-xl text-base md:text-lg px-2"
        >
          brandmefy is a small, sharp studio building bold identities, websites
          and campaigns for brands that want to feel like the room they walk into.
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
              document.getElementById("speak-to-us")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary"
          >
            Speak to us
          </button>
          <button
            data-testid="hero-cta-secondary"
            onClick={() =>
              document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-ghost"
          >
            See our work
          </button>
        </motion.div>

        {/* Circular hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 60 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 md:mt-20 w-full max-w-[680px] aspect-square rounded-full overflow-hidden relative border border-white/10"
        >
          <img
            src={HERO_BG}
            alt="brandmefy creative work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          <div className="absolute bottom-6 left-0 right-0 flex justify-center">
            <span className="font-handwritten text-cream text-2xl md:text-3xl">
              beyond marketing
            </span>
          </div>
        </motion.div>

        <button
          data-testid="hero-scroll-down"
          onClick={scrollNext}
          className="mt-10 inline-flex items-center gap-2 text-xs text-cream/50 hover:text-cream transition-colors"
        >
          <ArrowDown size={14} /> Scroll
        </button>
      </div>
    </section>
  );
}
