import React from "react";
import Navigation from "@/components/v2/Navigation";
import AboutHero from "@/components/v2/AboutHero";
import SkillsSection from "@/components/v2/SkillsSection";
import ExperienceSection from "@/components/v2/ExperienceSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-950 via-black to-black">
      <Navigation />
      <main className="pt-24">
        <AboutHero />
        <SkillsSection />
        <ExperienceSection />
      </main>
    </div>
  );
}
