import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedWork = () => {
  const projects = [
    {
      title: "EDITORIAL",
      category: "FASHION",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b",
    },
    {
      title: "PORTRAITS",
      category: "STUDIO",
      image: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb",
    },
  ];

  return (
    <div className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-6xl font-bold text-white tracking-tighter"
          >
            FEATURED
            <br />
            WORK
            <span className="text-[#E2FF00]">★</span>
          </motion.h2>

          <Link
            to="/v7/work"
            className="hidden md:flex items-center gap-2 text-white hover:text-[#E2FF00] transition-colors"
          >
            VIEW ALL WORK
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-[4/3] overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                <p className="text-[#E2FF00] text-sm tracking-[0.2em] mb-2">
                  {project.category}
                </p>
                <h3 className="text-4xl font-bold text-white tracking-tighter">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <Link
          to="/v7/work"
          className="md:hidden flex items-center gap-2 text-white hover:text-[#E2FF00] transition-colors mt-8 justify-center"
        >
          VIEW ALL WORK
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
};

export default FeaturedWork;
