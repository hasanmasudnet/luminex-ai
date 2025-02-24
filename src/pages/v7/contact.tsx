import React from "react";
import Navigation from "@/components/v7/Navigation";
import ContactSection from "@/components/v7/ContactSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="pt-32">
        <ContactSection />
      </main>
    </div>
  );
}
