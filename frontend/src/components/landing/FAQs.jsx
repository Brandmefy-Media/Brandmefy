import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    q: "What services do you offer?",
    a: "We specialise in branding, web design, content creation, social media management and creative strategy. If it needs a creative touch, we are your people.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most brand identities take 4 to 6 weeks. Websites and full campaigns usually run 6 to 12 weeks depending on scope. We will share a clear timeline before we kick off.",
  },
  {
    q: "How do you ensure the work matches my vision?",
    a: "We start every engagement with a deep discovery session, share moodboards and concept directions early, and keep you looped in at every milestone.",
  },
  {
    q: "Do you offer revisions?",
    a: "Yes. Each scope includes a defined set of revision rounds so the work lands exactly where you want it without surprise costs.",
  },
  {
    q: "Can you work with my existing brand guidelines?",
    a: "Absolutely. We respect what you have built and can extend, refresh or evolve your current system rather than reinvent it.",
  },
  {
    q: "What is the payment structure like?",
    a: "We typically split projects 50 percent on kickoff and 50 percent on delivery. Retainers are billed monthly. No hidden fees, no surprises.",
  },
  {
    q: "Do you offer ongoing support after the project is completed?",
    a: "Yes. We offer retainer and care plans for design, content and web maintenance so your brand keeps performing long after launch.",
  },
];

export default function FAQs() {
  return (
    <section
      id="faqs"
      data-testid="faqs-section"
      className="py-24 md:py-32 bg-[var(--brand-black)] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="section-label mb-6 inline-flex">FAQs</span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display-bold uppercase text-cream"
              style={{ fontSize: "clamp(40px, 7vw, 96px)", lineHeight: 0.95, letterSpacing: "-0.02em" }}
            >
              You ask,<br /><span className="text-green-brand">we answer</span>
            </motion.h2>
            <p className="text-cream/60 mt-6 max-w-sm">
              Still curious? Drop us a note and we will reply with the real
              answer, not a brochure.
            </p>
          </div>

          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full">
              {FAQ_ITEMS.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  data-testid={`faq-item-${i}`}
                  className="border-white/10"
                >
                  <AccordionTrigger className="text-left font-display-bold uppercase text-lg md:text-2xl tracking-tight py-6 hover:no-underline hover:text-green-brand">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-cream/65 text-base leading-relaxed pb-6">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
