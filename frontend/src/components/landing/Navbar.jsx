import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", id: "services" },
  { label: "Work", id: "portfolio" },
  { label: "Process", id: "process" },
  { label: "About", id: "about" },
  { label: "FAQs", id: "faqs" },
];

function BrandmefyLogo({ size = "md", invert = false }) {
  const sizes = {
    sm: { letter: "text-lg", text: "text-xl" },
    md: { letter: "text-xl", text: "text-2xl" },
    lg: { letter: "text-3xl", text: "text-4xl" },
  };
  const s = sizes[size] ?? sizes.md;
  return (
    <span className="inline-flex items-center gap-2">
      <span
        className={`font-display-bold ${s.letter} text-green-brand inline-flex items-center justify-center w-8 h-8 rounded-md bg-green-brand/15 leading-none`}
        aria-hidden
      >
        B
      </span>
      <span
        className={`font-display ${s.text} tracking-tight ${
          invert ? "text-black" : "text-cream"
        }`}
        style={{ fontWeight: 500 }}
      >
        brandmefy
      </span>
    </span>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <motion.header
      data-testid="navbar"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-black/75 backdrop-blur-xl border-b border-white/5"
          : "py-4 md:py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        <button
          data-testid="logo-home"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="brandmefy home"
        >
          <BrandmefyLogo size="md" />
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              data-testid={`nav-link-${link.id}`}
              onClick={() => scrollTo(link.id)}
              className="text-sm text-cream/70 hover:text-cream transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <button
            data-testid="nav-cta-speak"
            onClick={() => scrollTo("speak-to-us")}
            className="btn-primary"
          >
            Speak to us
          </button>
        </div>

        <button
          data-testid="nav-mobile-toggle"
          className="md:hidden text-cream p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="nav-mobile-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-white/5 bg-black/95 backdrop-blur-xl"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  data-testid={`nav-mobile-link-${link.id}`}
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-cream/80 text-base py-1"
                >
                  {link.label}
                </button>
              ))}
              <button
                data-testid="nav-mobile-cta"
                onClick={() => scrollTo("speak-to-us")}
                className="btn-primary self-start mt-2"
              >
                Speak to us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
