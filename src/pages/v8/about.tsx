import React from "react";
import Navigation from "@/components/v8/Navigation";
import AboutSection from "@/components/v8/AboutSection";

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
