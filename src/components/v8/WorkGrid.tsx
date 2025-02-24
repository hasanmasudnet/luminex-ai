import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const WorkGrid = () => {
  const projects = [
    {
      title: "EDITORIAL",
      category: "FASHION",
      year: "2024",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b",
    },
    {
      title: "PORTRAITS",
      category: "STUDIO",
      year: "2024",
      image: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb",
    },
    {
      title: "CAMPAIGN",
      category: "COMMERCIAL",
      year: "2024",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338",
    },
    {
      title: "LOOKBOOK",
      category: "FASHION",
      year: "2024",
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group relative aspect-[4/3] overflow-hidden bg-zinc-900"
        >
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 p-6 flex flex-col justify-between z-20">
            <div className="flex justify-between items-start">
              <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="text-[#FF4D4D] text-sm font-bold tracking-[0.2em] mb-1">
                  {project.category} / {project.year}
                </div>
              </div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="-translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#FF4D4D] flex items-center justify-center">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            </div>
            <h3 className="text-4xl font-bold text-white tracking-tighter translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              {project.title}
            </h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default WorkGrid;
