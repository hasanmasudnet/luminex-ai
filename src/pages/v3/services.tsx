import React from "react";
import Navigation from "@/components/v3/Navigation";
import ServicesSection from "@/components/v3/ServicesSection";
import ProcessSection from "@/components/v3/ProcessSection";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="pt-20">
        <ServicesSection />
        <ProcessSection />
      </main>
    </div>
  );
}
