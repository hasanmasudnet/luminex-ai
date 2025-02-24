import React from "react";
import Navigation from "@/components/v2/Navigation";
import ContactForm from "@/components/v2/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-950 via-black to-black">
      <Navigation />
      <main className="pt-24">
        <ContactForm />
      </main>
    </div>
  );
}
