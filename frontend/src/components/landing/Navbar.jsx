import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", id: "hero" },
  { label: "Services", id: "services" },
  { label: "Work", id: "portfolio" },
  { label: "Process", id: "process" },
  { label: "About", id: "about" },
  { label: "Team", id: "team" },
  { label: "FAQs", id: "faqs" },
  { label: "Speak to us", id: "speak-to-us" },
];

function BrandmefyLogo() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="font-anton text-yellow-brand inline-flex items-center justify-center w-9 h-9 rounded-lg bg-yellow-brand/15 border border-yellow-brand/30 leading-none text-lg pt-0.5">
        B
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-base text-white tracking-tight">
          brandmefy
        </span>
        <span className="text-[9px] text-white/50 uppercase tracking-[0.25em] mt-1">
          Beyond Marketing
        </span>
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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scrollTo = (id) => {
    setOpen(false);
    setTimeout(() => {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 280);
  };

  return (
    <>
      <motion.header
        data-testid="navbar"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-black/70 backdrop-blur-xl border-b border-white/5"
            : "py-4 md:py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          <button
            data-testid="logo-home"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="brandmefy home"
          >
            <BrandmefyLogo />
          </button>

          <button
            data-testid="menu-toggle"
            onClick={() => setOpen(true)}
            className="btn-pill-white font-anton tracking-[0.18em] uppercase text-xs px-6 py-3"
          >
            Menu
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/[0.98] backdrop-blur-2xl"
          >
            <div className="absolute top-0 left-0 right-0 py-4 md:py-5 px-4 md:px-6 flex items-center justify-between">
              <BrandmefyLogo />
              <button
                data-testid="menu-close"
                onClick={() => setOpen(false)}
                className="btn-pill-white"
                aria-label="Close menu"
              >
                <X size={16} />
                <span className="font-anton tracking-[0.18em] uppercase text-xs">
                  Close
                </span>
              </button>
            </div>

            <div className="h-full w-full flex items-center justify-center px-6">
              <nav className="flex flex-col items-center gap-4 md:gap-6">
                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link.id}
                    data-testid={`menu-link-${link.id}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
                    onClick={() => scrollTo(link.id)}
                    className="font-anton uppercase text-white hover:text-yellow-brand transition-colors duration-300 tracking-tight leading-none"
                    style={{ fontSize: "clamp(40px, 8vw, 96px)" }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="absolute bottom-6 left-0 right-0 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50"
            >
              <span>brandmefymedia@gmail.com</span>
              <span className="uppercase tracking-[0.25em]">
                Coimbatore, India · Mon–Sat 9 AM to 9 PM
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
