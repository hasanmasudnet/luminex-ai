import React from "react";
import Navigation from "@/components/v6/Navigation";
import WorkGrid from "@/components/v6/WorkGrid";
import { motion } from "framer-motion";

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mb-16"
          >
            <h2 className="text-orange-500 text-lg font-black tracking-tighter mb-4">
              FEATURED PROJECTS
            </h2>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
              Latest Work
            </h1>
            <p className="text-zinc-400">
              A curated selection of urban photography projects capturing the
              essence of city life around the world.
            </p>
          </motion.div>

          <WorkGrid />
        </div>
      </main>
    </div>
  );
}
