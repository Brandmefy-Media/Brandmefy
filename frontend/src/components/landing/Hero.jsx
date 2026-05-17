import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

const HERO_BG =
  "https://static.prod-images.emergentagent.com/jobs/d84a0ff5-244c-4fa5-ad25-45938c2831e0/images/908ca9938d6ef392af18eea83f62ccff00a7ac29af1485a3bac72eec36ff340a.png";

const TAGS = ["Creative", "Timeless", "Edgy", "Bold", "Considered"];

export default function Hero() {
  const scrollNext = () => {
    document
      .getElementById("value-props")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden grain"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.9), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full bg-[var(--brand-tomato)]/15 blur-[120px]"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-cream/60 mb-8"
        >
          <Sparkles size={14} className="text-tomato" />
          A creative agency that ships
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif-display text-[44px] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[104px] tracking-tight max-w-5xl"
        >
          Your brand deserves to be{" "}
          <span className="italic text-tomato">Seen</span>,{" "}
          <span className="italic">Heard</span>, and{" "}
          <span className="italic text-outline-cream">Remembered</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-8 text-cream/70 max-w-xl text-base sm:text-lg"
        >
          Brandmefy is a small, sharp studio building bold identities, websites
          and campaigns for brands that want to feel like the room they walk
          into.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-4"
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

        <div className="mt-20 marquee" data-testid="hero-marquee">
          <div className="marquee-track font-serif-display text-[72px] md:text-[120px] leading-none">
            {[...TAGS, ...TAGS, ...TAGS].map((tag, i) => (
              <span
                key={i}
                className={
                  i % 2 === 0 ? "text-outline-cream" : "text-cream/90 italic"
                }
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <button
          data-testid="hero-scroll-down"
          onClick={scrollNext}
          className="mt-16 inline-flex items-center gap-2 text-xs text-cream/50 hover:text-cream transition-colors"
        >
          <ArrowDown size={14} /> Scroll
        </button>
      </div>
    </section>
  );
}
