import React from "react";
import Navigation from "@/components/v4/Navigation";
import { motion } from "framer-motion";

export default function UseCasesPage() {
  const cases = [
    {
      title: "E-commerce",
      description: "High-volume product photography for online stores",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
      metrics: ["500+ products/day", "24h turnaround", "98% satisfaction"],
    },
    {
      title: "Marketing",
      description: "Creative shots for marketing campaigns",
      image: "https://images.unsplash.com/photo-1542744094-24638eff58bb",
      metrics: ["Brand consistency", "Multi-platform", "Creative direction"],
    },
    {
      title: "Real Estate",
      description: "Professional property photography",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      metrics: ["Virtual tours", "Drone shots", "Same-day delivery"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#1a1c18]">
      <Navigation />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl font-mono text-white mb-6">
              Use <span className="text-[#e5e926]">Cases /</span>
            </h1>
            <p className="text-white/70 text-lg font-mono mb-12">
              Discover how our enterprise photography solution adapts to your
              industry needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {cases.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-[#e5e926]/10 p-6 group hover:border-[#e5e926]/30 transition-all duration-300"
              >
                <div className="aspect-video mb-6 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-[#e5e926] font-mono text-xl mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70 font-mono mb-4">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.metrics.map((metric, i) => (
                    <li
                      key={i}
                      className="text-white/50 font-mono text-sm flex items-center"
                    >
                      <span className="text-[#e5e926] mr-2">/</span>
                      {metric}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
