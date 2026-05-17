import React from "react";
import { Quote } from "lucide-react";
import SectionBadge from "@/components/landing/SectionBadge";

const TESTIMONIALS = [
  {
    name: "Karthik Subramanian",
    role: "Founder, Annapoorna Spices, Coimbatore",
    quote:
      "We came in with a 30 year old family business and walked out with a brand that feels fresh, premium and proudly Tamil. Sales doubled within a quarter.",
  },
  {
    name: "Divya Ramaswamy",
    role: "CEO, Madras Threads",
    quote:
      "They got our story, our colours, our customer in the first meeting. The new identity travels beautifully from Chennai stores to our online drops.",
  },
  {
    name: "Ranjit Kumar",
    role: "Co-Founder, Nilgiri Brews",
    quote:
      "Packaging, website, social, photoshoot all under one roof. Brandmefy made our craft coffee feel like a luxury brand without losing the soul.",
  },
  {
    name: "Anitha Vasudevan",
    role: "Director, Kovai Wellness Studio",
    quote:
      "Calm, considered and creative. Our wellness brand finally looks the way it feels. Booking inquiries are up over 60 percent.",
  },
  {
    name: "Surya Prakash",
    role: "Owner, Madurai Silks Online",
    quote:
      "The new Shopify store is fast, gorgeous and so easy to manage. We finally feel ready to sell outside India with confidence.",
  },
  {
    name: "Lakshmi Narayanan",
    role: "Brand Manager, Erode Foods",
    quote:
      "The team treats your brand like their own. Every detail considered, every deadline met. Easily the best agency we have worked with.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="py-24 md:py-32 bg-[var(--bg-0)] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-6 mb-12">
          <SectionBadge label="Testimonials" shape="cloud" color="pink" rotate="-4deg" />
          <h2
            className="font-anton uppercase text-white tracking-[-0.025em]"
            style={{ fontSize: "clamp(44px, 9vw, 144px)", lineHeight: 0.9 }}
          >
            Clients talk{" "}
            <span className="text-pink-brand">and we blush</span>
          </h2>
        </div>
      </div>

      <div className="marquee py-4">
        <div className="marquee-track marquee-track--slow">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <div
              key={i}
              className="card-surface w-[320px] md:w-[440px] shrink-0 p-7 md:p-8 flex flex-col gap-5"
            >
              <Quote size={22} className="text-pink-brand" />
              <p className="text-white/85 text-sm md:text-base leading-relaxed">
                {t.quote}
              </p>
              <div className="mt-auto pt-4 border-t border-white/10">
                <div className="font-anton uppercase text-lg tracking-tight">
                  {t.name}
                </div>
                <div className="text-xs text-white/55 mt-1">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
