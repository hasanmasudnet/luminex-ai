import React from "react";
import Navigation from "@/components/v8/Navigation";
import HeroSection from "@/components/v8/HeroSection";
import WorkGrid from "@/components/v8/WorkGrid";
import AboutSection from "@/components/v8/AboutSection";
import ContactSection from "@/components/v8/ContactSection";

export default function Version8() {
  return (
    <div className="bg-black">
      <Navigation />
      <HeroSection />
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.3em] text-zinc-500 mb-6">
              SELECTED WORKS
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
              Recent
              <br />
              <span className="italic text-zinc-500">projects</span>
            </h2>
          </div>
          <WorkGrid />
        </div>
      </section>
      <AboutSection />
      <ContactSection />
    </div>
  );
}
