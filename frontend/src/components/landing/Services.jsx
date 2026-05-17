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
    color: "#FF4D4D",
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
    color: "#F4F0E6",
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
    color: "#FF4D4D",
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
    color: "#F4F0E6",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const current = SERVICES[active];

  return (
    <section
      id="services"
      data-testid="services-section"
      className="py-24 md:py-32 border-t border-white/5 relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-4 mb-12 md:mb-16">
          <span className="section-label">Services</span>
          <h2 className="font-serif-display text-4xl md:text-6xl tracking-tight max-w-3xl">
            What we do{" "}
            <em className="text-tomato not-italic">(and do really well)</em>.
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
                  active === idx ? "text-cream" : "text-cream/40 hover:text-cream/70"
                }`}
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-center gap-5">
                    <span className="font-mono text-xs md:text-sm text-cream/40">
                      0{idx + 1}
                    </span>
                    <h3 className="font-serif-display text-3xl md:text-5xl tracking-tight">
                      {s.title}
                    </h3>
                  </div>
                  <ArrowUpRight
                    size={28}
                    className={`mt-2 shrink-0 transition-transform duration-300 ${
                      active === idx ? "rotate-0 text-tomato" : "-rotate-45"
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
                      <div className="pl-10 md:pl-14 pt-4">
                        <p className="text-cream/70 text-base md:text-lg max-w-xl">
                          {s.body}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-5">
                          {s.chips.map((c) => (
                            <span
                              key={c}
                              className="text-xs px-3 py-1.5 rounded-full border border-white/15 text-cream/70"
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
                  className="card-surface p-8 md:p-10 min-h-[420px] flex flex-col justify-between"
                >
                  <div>
                    <span
                      className="inline-block px-3 py-1 text-[10px] uppercase tracking-[0.25em] rounded-full mb-6"
                      style={{
                        backgroundColor: `${current.color}1a`,
                        color: current.color,
                        border: `1px solid ${current.color}40`,
                      }}
                    >
                      {current.id}
                    </span>
                    <h4 className="font-serif-display text-3xl md:text-4xl leading-tight mb-4">
                      {current.tagline}
                    </h4>
                    <p className="text-cream/65 leading-relaxed">{current.body}</p>
                  </div>

                  <div className="mt-8">
                    <div
                      className="rounded-2xl aspect-[5/4] w-full overflow-hidden relative"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255,77,77,0.18), rgba(244,240,230,0.05))",
                      }}
                    >
                      <div className="absolute inset-0 grain opacity-60" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span
                          className="font-serif-display text-[120px] leading-none text-outline-cream"
                          aria-hidden
                        >
                          0{active + 1}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-cream/60">
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
