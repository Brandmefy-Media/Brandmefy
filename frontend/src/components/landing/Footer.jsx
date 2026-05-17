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
      className="border-t border-white/10 pt-20 pb-10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <div className="font-serif-display text-2xl mb-4">
              Brandmefy<span className="text-tomato">.</span>
            </div>
            <p className="text-cream/60 max-w-md text-sm md:text-base leading-relaxed">
              A small studio building bold brands and websites worth bookmarking.
              No fluff, no fuss, just sharp creative work.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { Icon: Twitter, href: "https://x.com", label: "Twitter" },
                { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { Icon: Mail, href: "mailto:brandmefymedia@gmail.com", label: "Email" },
              ].map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  data-testid={`footer-social-${label.toLowerCase()}`}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-cream/70 hover:text-tomato hover:border-tomato transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-[0.25em] text-cream/40 mb-4">
              Navigate
            </div>
            <ul className="space-y-2">
              {NAV.map((n) => (
                <li key={n.id}>
                  <button
                    data-testid={`footer-link-${n.id}`}
                    onClick={() => scrollTo(n.id)}
                    className="text-cream/80 hover:text-tomato transition-colors"
                  >
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-[0.25em] text-cream/40 mb-4">
              Contact
            </div>
            <ul className="space-y-2 text-cream/80 text-sm">
              <li>
                <a
                  href="mailto:brandmefymedia@gmail.com"
                  className="hover:text-tomato transition-colors"
                >
                  brandmefymedia@gmail.com
                </a>
              </li>
              <li>Remote, working worldwide</li>
              <li>Mon to Fri, 9 to 6</li>
            </ul>
          </div>
        </div>

        <div
          aria-hidden
          className="font-serif-display text-[18vw] leading-none mt-20 text-outline-cream opacity-30 select-none whitespace-nowrap overflow-hidden"
        >
          Brandmefy.
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-cream/50">
          <span>© {year} Brandmefy. All rights reserved.</span>
          <span>Made with care, coffee and creativity.</span>
        </div>
      </div>
    </footer>
  );
}
