import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PORTFOLIO = [
  {
    title: "Bold Brew Coffee Co.",
    category: "Branding / Packaging",
    image:
      "https://static.prod-images.emergentagent.com/jobs/d84a0ff5-244c-4fa5-ad25-45938c2831e0/images/ecdd5a3b9075509374a8850655861714c93f962c8cc02f51e8872d3a29be34c7.png",
  },
  {
    title: "FlexFit Studio Branding",
    category: "Identity / Print",
    image:
      "https://static.prod-images.emergentagent.com/jobs/d84a0ff5-244c-4fa5-ad25-45938c2831e0/images/ae3d8b8a9f063226240bd8a163a8d9788a888f6b844faf1bc7fc6a76d2775ccb.png",
  },
  {
    title: "SpeedShip Logistics",
    category: "Brand / Web",
    image:
      "https://static.prod-images.emergentagent.com/jobs/d84a0ff5-244c-4fa5-ad25-45938c2831e0/images/1f5ba9546ca40ed09d578557d026848e8e3802021d3cf9a2fee399d293f81508.png",
  },
  {
    title: "BloomBerry Cosmetics",
    category: "Branding / Campaign",
    image:
      "https://static.prod-images.emergentagent.com/jobs/d84a0ff5-244c-4fa5-ad25-45938c2831e0/images/b4ef1b573f812cd3500b042a548e64bc981b6226d0bf7eeaeae6626585d226d4.png",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      data-testid="portfolio-section"
      className="py-24 md:py-32 bg-[var(--bg-0)] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-4 mb-12">
          <span className="section-label inline-flex">Portfolio</span>
          <h2
            className="font-anton uppercase text-white tracking-[-0.025em]"
            style={{ fontSize: "clamp(44px, 9vw, 144px)", lineHeight: 0.9 }}
          >
            Look what <span className="text-yellow-brand">we made</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {PORTFOLIO.map((p, i) => {
            const catColors = ["text-yellow-brand", "text-pink-brand", "text-blue-brand", "text-cream-brand"];
            const btnColors = ["bg-yellow-brand text-black", "bg-pink-brand text-white", "bg-blue-brand text-white", "bg-cream-brand text-black"];
            const cat = catColors[i % catColors.length];
            const btn = btnColors[i % btnColors.length];
            return (
            <motion.a
              key={i}
              href="#speak-to-us"
              data-testid={`portfolio-card-${i}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
              className="group block relative overflow-hidden rounded-3xl bg-bg-3 aspect-[4/5] md:aspect-[5/4]"
            >
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <span className={`text-xs uppercase tracking-[0.25em] mb-2 ${cat}`}>
                  {p.category}
                </span>
                <div className="flex items-end justify-between gap-4">
                  <h3 className="font-anton uppercase text-2xl md:text-4xl tracking-tight text-white">
                    {p.title}
                  </h3>
                  <span className={`w-11 h-11 rounded-full ${btn} flex items-center justify-center shrink-0 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300`}>
                    <ArrowUpRight size={20} />
                  </span>
                </div>
                <span className="mt-3 text-xs text-white/60 uppercase tracking-wider">
                  View case study
                </span>
              </div>
            </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
