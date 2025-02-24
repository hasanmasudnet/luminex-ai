import React from "react";
import Navigation from "@/components/v6/Navigation";
import { motion } from "framer-motion";

export default function AboutPage() {
  const stats = [
    { label: "CITIES", value: "25+" },
    { label: "PROJECTS", value: "150+" },
    { label: "AWARDS", value: "12" },
    { label: "YEARS", value: "8" },
  ];

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
              <h2 className="text-orange-500 text-lg font-black tracking-tighter mb-4">
                OUR STORY
              </h2>
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
                About URBAN
              </h1>
              <div className="space-y-6 text-zinc-400">
                <p>
                  Founded in 2016, URBAN has been at the forefront of urban
                  photography, capturing the essence of city life through a
                  unique lens that blends documentary style with artistic
                  vision.
                </p>
                <p>
                  Our work has been featured in leading publications and we've
                  collaborated with major brands to tell their stories through
                  compelling urban imagery.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000"
                  alt="Urban photography"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-black text-orange-500 tracking-tighter mb-2">
                  {stat.value}
                </div>
                <div className="text-white text-sm tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
