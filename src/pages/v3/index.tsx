import React from "react";
import Navigation from "@/components/v3/Navigation";
import HeroSection from "@/components/v3/HeroSection";
import ServicesSection from "@/components/v3/ServicesSection";
import WorkSection from "@/components/v3/WorkSection";
import ProcessSection from "@/components/v3/ProcessSection";

export default function Version3() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <WorkSection />
        <ProcessSection />
      </main>
    </div>
  );
}
