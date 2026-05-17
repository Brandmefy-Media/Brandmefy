import React from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ValueProps from "@/components/landing/ValueProps";
import LogoMarquee from "@/components/landing/LogoMarquee";
import Stats from "@/components/landing/Stats";
import Services from "@/components/landing/Services";
import Benefits from "@/components/landing/Benefits";
import Portfolio from "@/components/landing/Portfolio";
import Process from "@/components/landing/Process";
import BuiltDifferent from "@/components/landing/BuiltDifferent";
import Testimonials from "@/components/landing/Testimonials";
import About from "@/components/landing/About";
import Team from "@/components/landing/Team";
import FAQs from "@/components/landing/FAQs";
import SpeakToUs from "@/components/landing/SpeakToUs";
import Footer from "@/components/landing/Footer";

export default function Landing() {
  return (
    <main data-testid="landing-page" className="bg-[var(--brand-black)] text-cream overflow-x-hidden">
      <Navbar />
      <Hero />
      <ValueProps />
      <LogoMarquee />
      <Stats />
      <Services />
      <Benefits />
      <Portfolio />
      <Process />
      <BuiltDifferent />
      <Testimonials />
      <About />
      <Team />
      <FAQs />
      <SpeakToUs />
      <Footer />
    </main>
  );
}
