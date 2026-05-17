import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    id: "branding",
    title: "Branding & Identity",
    tagline: "Make your mark, boldly and beautifully.",
    chips: ["Logo Design", "Brand Strategy", "Visual Identity", "Brand Guidelines", "Content Marketing"],
    body: "Your brand is more than a logo. It is your personality, your story, your vibe. We craft everything from marks to full brand systems that speak in your voice.",
  },
  {
    id: "web",
    title: "Web Design & Development",
    tagline: "Pretty and powerful websites that actually work.",
    chips: ["UI/UX Design", "Custom Development", "Responsive Design", "Maintenance", "Landing Pages"],
    body: "Your website is your digital home. We design and build sites that are equal parts beautiful and brainy, with clean code and buttery interfaces.",
  },
  {
    id: "content",
    title: "Content Creation",
    tagline: "Words, visuals and videos that speak human.",
    chips: ["Copywriting", "Photography", "Videography", "Animation", "Scriptwriting"],
    body: "Scroll-stopping content that does not just look pretty, it connects. From snappy headlines to slick videos, we make your story shine.",
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    tagline: "Get seen. Get clicks. Get results.",
    chips: ["Social Media", "SEO & SEM", "Email Campaigns", "Paid Ads", "Influencer"],
    body: "Data, creativity and a bit of digital magic. We make sure your message lands in the right feed at the right moment.",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const current = SERVICES[active];

  return (
    <section
      id="services"
      data-testid="services-section"
      className="section-light py-24 md:py-32 relative"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-4 mb-12 md:mb-16">
          <span className="section-label section-label-dark inline-flex">Services</span>
          <h2
            className="font-display-bold uppercase text-black"
            style={{ fontSize: "clamp(40px, 8vw, 128px)", lineHeight: 0.92, letterSpacing: "-0.02em" }}
          >
            What we do<br />
            <span className="text-green-brand">(and do really well)</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-7 flex flex-col">
            {SERVICES.map((s, idx) => (
              <button
                key={s.id}
                data-testid={`service-tab-${s.id}`}
                onClick={() => setActive(idx)}
                className={`group text-left border-t border-black/10 py-6 md:py-8 transition-colors duration-300 ${
                  active === idx ? "text-black" : "text-black/40 hover:text-black/70"
                }`}
              >
                <div className="flex items-start justify-between gap-4 md:gap-6">
                  <div className="flex items-center gap-3 md:gap-5">
                    <span className="font-mono text-xs md:text-sm text-black/40">
                      0{idx + 1}
                    </span>
                    <h3
                      className="font-display-bold uppercase tracking-tight"
                      style={{ fontSize: "clamp(24px, 4.5vw, 64px)", lineHeight: 1 }}
                    >
                      {s.title}
                    </h3>
                  </div>
                  <ArrowUpRight
                    size={28}
                    className={`mt-2 shrink-0 transition-transform duration-300 ${
                      active === idx ? "rotate-0 text-green-brand" : "-rotate-45"
                    }`}
                  />
                </div>
                <AnimatePresence initial={false}>
                  {active === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-7 md:pl-14 pt-4">
                        <p className="text-black/70 text-base md:text-lg max-w-xl">{s.body}</p>
                        <div className="flex flex-wrap gap-2 mt-5">
                          {s.chips.map((c) => (
                            <span
                              key={c}
                              className="text-xs px-3 py-1.5 rounded-full border border-black/20 text-black/70 bg-white"
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
            <div className="border-t border-black/10" />
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
                  className="card-light p-6 md:p-10 min-h-[420px] flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-[0.25em] rounded-full mb-6 bg-green-brand/15 text-green-brand border border-green-brand/30">
                      {current.id}
                    </span>
                    <h4
                      className="font-display-bold uppercase mb-4 text-black"
                      style={{ fontSize: "clamp(22px, 3vw, 40px)", lineHeight: 1.05 }}
                    >
                      {current.tagline}
                    </h4>
                    <p className="text-black/65 leading-relaxed">{current.body}</p>
                  </div>

                  <div className="mt-8">
                    <div className="rounded-2xl aspect-[5/4] w-full overflow-hidden relative bg-[var(--brand-cream-deep)] flex items-center justify-center">
                      <span className="font-display-bold uppercase text-outline-black" style={{ fontSize: "clamp(80px, 12vw, 200px)", lineHeight: 1 }}>
                        0{active + 1}
                      </span>
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-black/60">
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
