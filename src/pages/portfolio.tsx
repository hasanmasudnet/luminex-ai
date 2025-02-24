import React from "react";
import Navigation from "@/components/Navigation";
import PortfolioGrid from "@/components/PortfolioGrid";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="pt-20">
        <PortfolioGrid />
      </main>
    </div>
  );
}
