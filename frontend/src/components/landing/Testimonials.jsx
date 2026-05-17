import React from "react";
import { Quote, Play } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Tobias Green",
    role: "Founder, GreenSpark Innovations",
    quote: "Working with this team was a dream. Super organized, wildly creative, and just fun to talk to. They totally got our brand from day one.",
  },
  {
    name: "Silas Leighton",
    role: "Managing Director, VentureVista",
    quote: "They took our messy ideas and turned them into a stunning identity. Everything feels cohesive, intentional and us. We are obsessed.",
  },
  {
    name: "Orion Vance",
    role: "CEO, Lunar Lux Co.",
    quote: "We still get compliments on our branding. It feels premium, fun and totally fits our vibe. Could not have asked for a better team.",
  },
  {
    name: "Callum Yates",
    role: "Co-Founder, Driftwood Media",
    quote: "We have worked with other agencies, but this one felt different in the best way. Creative with purpose and amazing attention to detail.",
  },
  {
    name: "Jasper Lowell",
    role: "CEO, CopperLeaf Enterprises",
    quote: "Our online presence went from zero to hero in no time. The team made the process so seamless, I almost forgot I was working on a big project.",
  },
  {
    name: "Lowell Vance",
    role: "Brand Manager, Stellar Bloom Studio",
    quote: "Incredible team. They made our brand feel fresh, fun and 100 percent us. The whole process was smooth and actually enjoyable.",
  },
];

const VIDEO_THUMBS = [
  {
    name: "Magnus Hawthorne",
    role: "Owner, Bayleaf",
    thumb: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
  {
    name: "Thaddeus Montgomery",
    role: "Owner, GoldGarden",
    thumb: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="py-24 md:py-32 bg-[var(--brand-black)] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-4 mb-12">
          <span className="section-label inline-flex">Testimonials</span>
          <h2
            className="font-display-bold uppercase text-cream"
            style={{ fontSize: "clamp(40px, 8vw, 128px)", lineHeight: 0.92, letterSpacing: "-0.02em" }}
          >
            Clients talk <span className="text-green-brand">and we blush</span>
          </h2>
        </div>
      </div>

      <div className="marquee py-4">
        <div className="marquee-track">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <div
              key={i}
              className="card-surface w-[300px] md:w-[420px] shrink-0 p-7 md:p-8 flex flex-col gap-5"
            >
              <Quote size={22} className="text-green-brand" />
              <p className="text-cream/85 text-sm md:text-base leading-relaxed">
                {t.quote}
              </p>
              <div className="mt-auto pt-4 border-t border-white/10">
                <div className="font-display-bold uppercase text-lg tracking-tight text-cream">
                  {t.name}
                </div>
                <div className="text-xs text-cream/55 mt-1">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {VIDEO_THUMBS.map((v, i) => (
          <button
            key={i}
            data-testid={`video-testimonial-${i}`}
            className="group relative aspect-video rounded-3xl overflow-hidden border border-white/10"
          >
            <img
              src={v.thumb}
              alt={v.name}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <span className="w-16 h-16 rounded-full bg-green-brand text-black flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play size={28} fill="currentColor" />
              </span>
            </div>
            <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
              <div>
                <div className="font-display-bold uppercase text-cream text-xl tracking-tight">
                  {v.name}
                </div>
                <div className="text-xs text-cream/70">{v.role}</div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
