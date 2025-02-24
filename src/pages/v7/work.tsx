import React from "react";
import Navigation from "@/components/v7/Navigation";
import WorkGrid from "@/components/v7/WorkGrid";
import { motion } from "framer-motion";

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mb-16"
          >
            <h2 className="text-6xl font-bold text-white tracking-tighter mb-4">
              SELECTED
              <br />
              WORK
              <span className="text-[#E2FF00]">★</span>
            </h2>
            <p className="text-white/70 tracking-wide">
              A curated selection of our finest photography projects across
              various genres.
            </p>
          </motion.div>

          <WorkGrid />
        </div>
      </main>
    </div>
  );
}
