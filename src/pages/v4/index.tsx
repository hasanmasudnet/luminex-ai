import React from "react";
import Navigation from "@/components/v4/Navigation";
import HeroSection from "@/components/v4/HeroSection";

export default function Version4() {
  return (
    <div className="min-h-screen bg-[#1a1c18]">
      <Navigation />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}
