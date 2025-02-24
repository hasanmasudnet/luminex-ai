import React from "react";
import Navigation from "@/components/Navigation";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="pt-20">
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
      </main>
    </div>
  );
}
