import React from "react";
import Navigation from "@/components/v3/Navigation";
import WorkSection from "@/components/v3/WorkSection";

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="pt-20">
        <WorkSection />
      </main>
    </div>
  );
}
