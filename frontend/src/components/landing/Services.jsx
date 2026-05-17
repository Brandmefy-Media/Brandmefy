import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    id: "branding",
    title: "Branding & Identity",
    tagline: "Make your mark, boldly and beautifully.",
    chips: [
      "Logo Design",
      "Brand Strategy",
      "Visual Identity",
      "Brand Guidelines",
      "Content Marketing",
    ],
    body: "Your brand is more than a logo. It is your personality, your story, your vibe. We craft everything from marks to full brand systems that speak in your voice.",
    accent: "text-yellow-brand",
    bgAccent: "bg-yellow-brand/15 text-yellow-brand border-yellow-brand/30",
    outline: "text-outline-yellow",
  },
  {
    id: "web",
    title: "Web Design & Development",
    tagline: "Pretty and powerful websites that actually work.",
    chips: [
      "UI/UX Design",
      "Custom Development",
      "Responsive Design",
      "Maintenance",
      "Landing Pages",
    ],
    body: "Your website is your digital home. We design and build sites that are equal parts beautiful and brainy, with clean code and buttery interfaces.",
    accent: "text-pink-brand",
    bgAccent: "bg-pink-brand/15 text-pink-brand border-pink-brand/30",
    outline: "text-outline-pink",
  },
  {
    id: "content",
    title: "Content Creation",
    tagline: "Words, visuals and videos that speak human.",
    chips: [
      "Copywriting",
      "Photography",
      "Videography",
      "Animation",
      "Scriptwriting",
    ],
    body: "Scroll-stopping content that does not just look pretty, it connects. From snappy headlines to slick videos, we make your story shine.",
    accent: "text-blue-brand",
    bgAccent: "bg-blue-brand/15 text-blue-brand border-blue-brand/30",
    outline: "text-outline-blue",
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    tagline: "Get seen. Get clicks. Get results.",
    chips: [
      "Social Media",
      "SEO & SEM",
      "Email Campaigns",
      "Paid Ads",
      "Influencer",
    ],
    body: "Data, creativity and a bit of digital magic. We make sure your message lands in the right feed at the right moment.",
    accent: "text-cream-brand",
    bgAccent: "bg-white/10 text-cream-brand border-white/20",
    outline: "text-outline-cream-brand",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const current = SERVICES[active];

  return (
    <section
      id="services"
      data-testid="services-section"
      className="py-24 md:py-32 bg-bg-1 relative"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-4 mb-12 md:mb-16">
          <span className="section-label inline-flex">Services</span>
          <h2
            className="font-anton uppercase text-white tracking-[-0.025em]"
            style={{ fontSize: "clamp(44px, 9vw, 144px)", lineHeight: 0.9 }}
          >
            What we do<br />
            <span className="text-outline-pink">
              (and do really well)
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-7 flex flex-col">
            {SERVICES.map((s, idx) => (
              <button
                key={s.id}
                data-testid={`service-tab-${s.id}`}
                onClick={() => setActive(idx)}
                className={`group text-left border-t border-white/10 py-6 md:py-8 transition-colors duration-300 ${
                  active === idx
                    ? "text-white"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                <div className="flex items-start justify-between gap-4 md:gap-6">
                  <div className="flex items-center gap-3 md:gap-5">
                    <span className="font-mono text-xs md:text-sm text-white/40">
                      0{idx + 1}
                    </span>
                    <h3
                      className="font-anton uppercase tracking-tight"
                      style={{ fontSize: "clamp(26px, 5vw, 72px)", lineHeight: 1 }}
                    >
                      {s.title}
                    </h3>
                  </div>
                  <ArrowUpRight
                    size={28}
                    className={`mt-2 shrink-0 transition-transform duration-300 ${
                      active === idx
                        ? `rotate-0 ${s.accent}`
                        : "-rotate-45"
                    }`}
                  />
                </div>
                <AnimatePresence initial={false}>
                  {active === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pl-7 md:pl-14 pt-4">
                        <p className="text-white/70 text-base md:text-lg max-w-xl">
                          {s.body}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-5">
                          {s.chips.map((c) => (
                            <span
                              key={c}
                              className="text-xs px-3 py-1.5 rounded-full border border-white/15 text-white/70 bg-black/40"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            ))}
            <div className="border-t border-white/10" />
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="card-surface p-6 md:p-10 min-h-[440px] flex flex-col justify-between"
                >
                  <div>
                    <span className={`inline-block px-3 py-1 text-[10px] uppercase tracking-[0.25em] rounded-full mb-6 border ${current.bgAccent}`}>
                      {current.id}
                    </span>
                    <h4
                      className="font-anton uppercase mb-4"
                      style={{ fontSize: "clamp(24px, 3vw, 42px)", lineHeight: 1.05 }}
                    >
                      {current.tagline}
                    </h4>
                    <p className="text-white/65 leading-relaxed">
                      {current.body}
                    </p>
                  </div>

                  <div className="mt-8">
                    <div className="rounded-2xl aspect-[5/4] w-full overflow-hidden relative bg-bg-3 flex items-center justify-center border border-white/10">
                      <span
                        className={`font-anton uppercase ${current.outline}`}
                        style={{
                          fontSize: "clamp(80px, 14vw, 220px)",
                          lineHeight: 1,
                        }}
                      >
                        0{active + 1}
                      </span>
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/60">
                        <span>{current.title}</span>
                        <span>brandmefy / {current.id}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
