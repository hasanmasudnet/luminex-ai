import React from "react";
import Navigation from "@/components/v5/Navigation";
import GalleryGrid from "@/components/v5/GalleryGrid";
import { motion } from "framer-motion";

export default function GalleryPage() {
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
            <h2 className="text-white/70 text-sm tracking-[0.3em] mb-4">
              SELECTED WORKS
            </h2>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
              Gallery
            </h1>
            <p className="text-white/70 tracking-wide">
              A curated selection of our finest fashion and editorial
              photography, showcasing the art of visual storytelling through the
              lens.
            </p>
          </motion.div>

          <GalleryGrid />
        </div>
      </main>
    </div>
  );
}
