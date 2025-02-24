import React from "react";
import Navigation from "@/components/Navigation";
import ServicesSection from "@/components/ServicesSection";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="pt-20">
        <ServicesSection />
      </main>
    </div>
  );
}
