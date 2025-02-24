import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WorkGrid = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const projects = [
    {
      title: "Ethereal Portraits",
      category: "Fine Art",
      image: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb",
    },
    {
      title: "Urban Stories",
      category: "Street",
      image: "https://images.unsplash.com/photo-1517799094725-e3453440724e",
    },
    {
      title: "Fashion Forward",
      category: "Editorial",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b",
    },
    {
      title: "Natural Light",
      category: "Portrait",
      image: "https://images.unsplash.com/photo-1488161628813-04466f872be2",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          viewport={{ once: true }}
          onHoverStart={() => setHoveredId(index)}
          onHoverEnd={() => setHoveredId(null)}
          className="relative aspect-square overflow-hidden bg-black cursor-pointer group"
        >
          <motion.img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            animate={{ scale: hoveredId === index ? 1.1 : 1.2 }}
            transition={{ duration: 0.8 }}
          />

          <AnimatePresence>
            {hoveredId === index && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center p-8"
              >
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ delay: 0.1 }}
                  className="space-y-4"
                >
                  <div className="text-xs tracking-[0.3em] text-zinc-400">
                    {project.category}
                  </div>
                  <div className="text-2xl font-light text-white">
                    {project.title}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default WorkGrid;
