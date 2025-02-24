import React from "react";
import Navigation from "@/components/v8/Navigation";
import HeroSection from "@/components/v8/HeroSection";
import AboutSection from "@/components/v8/AboutSection";
import WorkGrid from "@/components/v8/WorkGrid";
import ContactSection from "@/components/v8/ContactSection";

export default function Version8() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <HeroSection />
        <div className="container mx-auto px-6 py-20">
          <h2 className="text-6xl font-bold text-white tracking-tighter mb-16">
            FEATURED
            <br />
            WORK
          </h2>
          <WorkGrid />
        </div>
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}
