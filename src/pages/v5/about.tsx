import React from "react";
import Navigation from "@/components/v5/Navigation";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-white/70 text-sm tracking-[0.3em] mb-4">
                OUR STORY
              </h2>
              <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
                About <span className="italic">Lumière</span>
              </h1>
              <div className="space-y-6 text-white/70 tracking-wide">
                <p>
                  Founded in 2020, Lumière has established itself as a leading
                  name in fashion and editorial photography, known for our
                  distinctive minimalist aesthetic and timeless approach.
                </p>
                <p>
                  Our work has been featured in leading fashion magazines and
                  we've collaborated with some of the most prestigious brands in
                  the industry.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1445205170230-053b83016050"
                  alt="Studio work"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center"
          >
            <div>
              <h3 className="text-white text-4xl font-light mb-2">10+</h3>
              <p className="text-white/70 text-sm tracking-widest">
                YEARS EXPERIENCE
              </p>
            </div>
            <div>
              <h3 className="text-white text-4xl font-light mb-2">250+</h3>
              <p className="text-white/70 text-sm tracking-widest">
                PHOTOSHOOTS
              </p>
            </div>
            <div>
              <h3 className="text-white text-4xl font-light mb-2">50+</h3>
              <p className="text-white/70 text-sm tracking-widest">
                BRAND CLIENTS
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
