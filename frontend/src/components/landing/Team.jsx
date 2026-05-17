import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, ArrowUpRight } from "lucide-react";

const TEAM = [
  {
    nickname: "Idea Squeezer",
    first: "Zephyr",
    last: "Callahan",
    role: "CEO, Creative Director",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=srgb&fm=jpg&w=600&q=80",
  },
  {
    nickname: "Pixel Wizard",
    first: "Leander",
    last: "Frost",
    role: "Designer, Art Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=srgb&fm=jpg&w=600&q=80",
  },
  {
    nickname: "Detail Ninja",
    first: "Thane",
    last: "Vesper",
    role: "Content Creator",
    image:
      "https://images.unsplash.com/photo-1699899657680-421c2c2d5064?crop=entropy&cs=srgb&fm=jpg&w=600&q=80",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      data-testid="team-section"
      className="py-24 md:py-32 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-4 mb-12">
          <span className="section-label">The team</span>
          <h2 className="font-serif-display text-4xl md:text-6xl tracking-tight max-w-3xl">
            The humans behind{" "}
            <em className="text-tomato not-italic">the work</em>.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TEAM.map((m, i) => (
            <motion.div
              key={i}
              data-testid={`team-card-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="card-surface overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/5] overflow-hidden bg-charcoal relative">
                <img
                  src={m.image}
                  alt={`${m.first} ${m.last}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.25em] bg-black/60 backdrop-blur px-3 py-1.5 rounded-full text-cream">
                  {m.nickname}
                </span>
              </div>
              <div className="p-5 flex flex-col gap-2">
                <div className="font-serif-display text-2xl leading-none">
                  {m.first}
                </div>
                <div className="font-serif-display text-2xl leading-none">
                  {m.last}
                </div>
                <div className="text-xs text-cream/60 mt-2">{m.role}</div>
                <div className="flex gap-2 mt-3">
                  <a
                    data-testid={`team-${i}-twitter`}
                    href="https://x.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-cream/70 hover:border-tomato hover:text-tomato transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={14} />
                  </a>
                  <a
                    data-testid={`team-${i}-linkedin`}
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-cream/70 hover:border-tomato hover:text-tomato transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.a
            href="#speak-to-us"
            data-testid="team-hiring-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card-surface overflow-hidden flex flex-col justify-between p-6 relative"
            style={{
              background:
                "linear-gradient(160deg, rgba(255,77,77,0.18), rgba(255,77,77,0.04))",
              border: "1px solid rgba(255,77,77,0.3)",
            }}
          >
            <div>
              <span className="text-tomato font-serif-display text-5xl block leading-none">
                !!!!
              </span>
              <div className="mt-6 font-serif-display text-2xl leading-tight">
                Maybe You
              </div>
              <div className="font-serif-display text-2xl leading-tight">
                Cause we are hiring
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="text-xs text-cream/70">Sr. Graphic Designer</div>
              <ArrowUpRight size={20} className="text-tomato" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
