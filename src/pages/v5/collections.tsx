import React from "react";
import Navigation from "@/components/v5/Navigation";
import CollectionList from "@/components/v5/CollectionList";
import { motion } from "framer-motion";

export default function CollectionsPage() {
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
              FEATURED WORK
            </h2>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
              Collections
            </h1>
            <p className="text-white/70 tracking-wide">
              Explore our carefully curated collections of fashion and editorial
              photography, each telling its own unique visual story.
            </p>
          </motion.div>

          <CollectionList />
        </div>
      </main>
    </div>
  );
}
