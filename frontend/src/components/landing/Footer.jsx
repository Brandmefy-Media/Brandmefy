import React from "react";
import { Instagram, Linkedin, Twitter, Mail } from "lucide-react";

const NAV = [
  { label: "Services", id: "services" },
  { label: "Work", id: "portfolio" },
  { label: "Process", id: "process" },
  { label: "About", id: "about" },
  { label: "FAQs", id: "faqs" },
  { label: "Speak to us", id: "speak-to-us" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      id="footer"
      data-testid="footer"
      className="bg-[var(--bg-0)] border-t border-white/10 pt-16 md:pt-20 pb-10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="font-anton text-3xl text-emerald-brand inline-flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-brand/15 border border-emerald-brand/30 leading-none pt-1">
                B
              </span>
              <div className="flex flex-col">
                <span className="font-display text-2xl text-white leading-none">
                  brandmefy
                </span>
                <span className="text-xs text-white/50 uppercase tracking-[0.25em] mt-1">
                  Beyond Marketing
                </span>
              </div>
            </div>
            <p className="text-white/60 max-w-md text-sm md:text-base leading-relaxed mt-6">
              A small studio building bold brands and websites worth
              bookmarking. No fluff, no fuss, just sharp creative work.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                {
                  Icon: Instagram,
                  href: "https://instagram.com",
                  label: "Instagram",
                },
                { Icon: Twitter, href: "https://x.com", label: "Twitter" },
                {
                  Icon: Linkedin,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                },
                {
                  Icon: Mail,
                  href: "mailto:brandmefymedia@gmail.com",
                  label: "Email",
                },
              ].map(({ Icon, href, label }, i) => {
                const hoverColors = ["hover:text-pink-brand hover:border-pink-brand", "hover:text-yellow-brand hover:border-yellow-brand", "hover:text-blue-brand hover:border-blue-brand", "hover:text-cream-brand hover:border-cream-brand"];
                return (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  data-testid={`footer-social-${label.toLowerCase()}`}
                  className={`w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 transition-colors ${hoverColors[i]}`}
                >
                  <Icon size={16} />
                </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-[0.25em] text-white/40 mb-4">
              Navigate
            </div>
            <ul className="space-y-2">
              {NAV.map((n) => (
                <li key={n.id}>
                  <button
                    data-testid={`footer-link-${n.id}`}
                    onClick={() => scrollTo(n.id)}
                    className="text-white/80 hover:text-yellow-brand transition-colors text-left"
                  >
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-[0.25em] text-white/40 mb-4">
              Contact
            </div>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>
                <a
                  href="mailto:brandmefymedia@gmail.com"
                  className="hover:text-pink-brand transition-colors break-all"
                >
                  brandmefymedia@gmail.com
                </a>
              </li>
              <li>Coimbatore, Tamil Nadu, India</li>
              <li className="text-white/55">Working remotely worldwide</li>
              <li>Mon to Sat, 9 AM to 9 PM IST</li>
            </ul>
          </div>
        </div>

        <div
          aria-hidden
          className="font-anton uppercase mt-16 md:mt-20 text-outline-yellow opacity-50 select-none whitespace-nowrap overflow-hidden text-center"
          style={{
            fontSize: "clamp(80px, 22vw, 320px)",
            lineHeight: 0.85,
            letterSpacing: "-0.04em",
          }}
        >
          BRANDMEFY
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/50">
          <span>
            © {year} brandmefy. Beyond Marketing. All rights reserved.
          </span>
          <span>Made with care, coffee and creativity.</span>
        </div>
      </div>
    </footer>
  );
}
