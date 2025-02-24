import React from "react";
import Navigation from "@/components/v2/Navigation";
import HeroSection from "@/components/v2/HeroSection";
import PortfolioGrid from "@/components/v2/PortfolioGrid";
import SkillsSection from "@/components/v2/SkillsSection";
import ExperienceSection from "@/components/v2/ExperienceSection";
import ContactForm from "@/components/v2/ContactForm";

export default function Version2() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-950 via-black to-black">
      <Navigation />
      <main>
        <HeroSection />
        <PortfolioGrid />
        <SkillsSection />
        <ExperienceSection />
        <ContactForm />
      </main>
    </div>
  );
}
