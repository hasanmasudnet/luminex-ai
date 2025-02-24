import React from "react";
import Navigation from "@/components/v5/Navigation";
import HeroSection from "@/components/v5/HeroSection";

export default function Version5() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}
