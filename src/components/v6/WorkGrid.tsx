import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const WorkGrid = () => {
  const projects = [
    {
      title: "NEON NIGHTS",
      location: "TOKYO",
      year: "2024",
      image: "https://images.unsplash.com/photo-1601973555040-c99471641e5b",
      category: "STREET",
    },
    {
      title: "URBAN RHYTHM",
      location: "NEW YORK",
      year: "2024",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
      category: "ARCHITECTURE",
    },
    {
      title: "CITY PULSE",
      location: "LONDON",
      year: "2024",
      image: "https://images.unsplash.com/photo-1517799094725-e3453440724e",
      category: "DOCUMENTARY",
    },
    {
      title: "CONCRETE WAVES",
      location: "BERLIN",
      year: "2024",
      image: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb",
      category: "ABSTRACT",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
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
                <div className="text-orange-500 text-sm font-black tracking-tighter mb-1">
                  {project.location} / {project.year}
                </div>
                <div className="text-white text-xs tracking-widest">
                  {project.category}
                </div>
              </div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="-translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5 text-black" />
                </div>
              </motion.div>
            </div>
            <h3 className="text-3xl font-black text-white tracking-tighter translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              {project.title}
            </h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default WorkGrid;
