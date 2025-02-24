import React from "react";
import Navigation from "@/components/v7/Navigation";
import HeroSection from "@/components/v7/HeroSection";
import ServicesSection from "@/components/v7/ServicesSection";
import FeaturedWork from "@/components/v7/FeaturedWork";
import TestimonialsSection from "@/components/v7/TestimonialsSection";
import ContactSection from "@/components/v7/ContactSection";

export default function Version7() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <FeaturedWork />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </div>
  );
}
