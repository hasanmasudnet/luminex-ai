import React from "react";
import Navigation from "@/components/v7/Navigation";
import AboutSection from "@/components/v7/AboutSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="pt-32">
        <AboutSection />
      </main>
    </div>
  );
}
