import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionBadge from "@/components/landing/SectionBadge";

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
      className="py-24 md:py-32 bg-bg-2 relative"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col gap-6 mb-12">
          <SectionBadge label="The team" shape="fruity" color="pink" rotate="4deg" />
          <h2
            className="font-anton uppercase text-white tracking-[-0.025em]"
            style={{ fontSize: "clamp(44px, 9vw, 144px)", lineHeight: 0.9 }}
          >
            The humans behind{" "}
            <span className="text-pink-brand">the work</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TEAM.map((m, i) => {
            const accents = [
              "bg-yellow-brand text-black",
              "bg-pink-brand text-white",
              "bg-blue-brand text-white",
            ];
            const acc = accents[i % accents.length];
            return (
              <motion.div
                key={i}
                data-testid={`team-card-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="card-surface overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/5] overflow-hidden bg-bg-3 relative">
                  <img
                    src={m.image}
                    alt={`${m.first} ${m.last}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    style={{ filter: "grayscale(0.15) brightness(0.95)" }}
                  />
                  <span
                    className={`absolute top-3 left-3 text-[10px] uppercase tracking-[0.25em] px-3 py-1.5 rounded-full font-medium ${acc}`}
                  >
                    {m.nickname}
                  </span>
                </div>
                <div className="p-5 flex flex-col gap-2">
                  <div className="font-anton uppercase text-2xl leading-none tracking-tight">
                    {m.first}
                  </div>
                  <div className="font-anton uppercase text-2xl leading-none tracking-tight">
                    {m.last}
                  </div>
                  <div className="text-xs text-white/60 mt-2">{m.role}</div>
                </div>
              </motion.div>
            );
          })}

          <motion.a
            href="#speak-to-us"
            data-testid="team-hiring-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-[20px] overflow-hidden flex flex-col justify-between p-6 relative bg-pink-brand text-white"
          >
            <div>
              <span className="font-anton text-5xl block leading-none">
                !!!!
              </span>
              <div className="mt-6 font-anton uppercase text-2xl leading-tight">
                Maybe You
              </div>
              <div className="font-anton uppercase text-2xl leading-tight">
                Cause we are hiring
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="text-xs">Sr. Graphic Designer</div>
              <ArrowUpRight size={20} />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
