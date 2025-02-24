import React from "react";
import Navigation from "@/components/v6/Navigation";
import StoriesGrid from "@/components/v6/StoriesGrid";
import { motion } from "framer-motion";

export default function StoriesPage() {
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
              URBAN TALES
            </h2>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
              Stories
            </h1>
            <p className="text-zinc-400">
              Dive into the stories behind our urban photography projects and
              discover the city through our lens.
            </p>
          </motion.div>

          <StoriesGrid />
        </div>
      </main>
    </div>
  );
}
