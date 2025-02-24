import React from "react";
import { motion } from "framer-motion";

const GalleryGrid = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1509631179647-0177331693ae",
      category: "Editorial",
      title: "Paris, 2024",
    },
    {
      src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b",
      category: "Fashion",
      title: "Summer Collection",
    },
    {
      src: "https://images.unsplash.com/photo-1445205170230-053b83016050",
      category: "Portrait",
      title: "Studio Light",
    },
    {
      src: "https://images.unsplash.com/photo-1488161628813-04466f872be2",
      category: "Fashion",
      title: "Winter Mood",
    },
    {
      src: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb",
      category: "Portrait",
      title: "Natural Light",
    },
    {
      src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
      category: "Editorial",
      title: "Milan, 2024",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group relative aspect-[3/4] overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          <img
            src={image.src}
            alt={image.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
            <div className="text-white/70 text-sm tracking-widest mb-2">
              {image.category}
            </div>
            <div className="text-white text-lg tracking-wide">
              {image.title}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default GalleryGrid;
