import React from "react";
import { motion } from "framer-motion";
import PortfolioItem from "./PortfolioItem";

interface PortfolioGridProps {
  items?: Array<{
    title: string;
    description: string;
    imageUrl: string;
    category: string;
  }>;
}

const PortfolioGrid = ({
  items = [
    {
      title: "Wedding Photography",
      description:
        "Capturing the magic and emotion of your special day with elegant and timeless photography.",
      imageUrl:
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop",
      category: "Weddings",
    },
    {
      title: "Portrait Sessions",
      description:
        "Professional portraits that capture personality and create lasting memories for individuals and families.",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
      category: "Portraits",
    },
    {
      title: "Nature & Landscapes",
      description:
        "Breathtaking landscape photography showcasing the beauty of natural wonders and scenic locations.",
      imageUrl:
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop",
      category: "Landscape",
    },
    {
      title: "Event Coverage",
      description:
        "Dynamic event photography capturing the energy and excitement of special occasions and celebrations.",
      imageUrl:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
      category: "Events",
    },
    {
      title: "Fashion & Editorial",
      description:
        "Creative fashion photography that brings style and artistic vision to life through the lens.",
      imageUrl:
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
      category: "Fashion",
    },
    {
      title: "Commercial & Product",
      description:
        "Professional product photography that showcases your brand and products in their best light.",
      imageUrl:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
      category: "Commercial",
    },
  ],
}: PortfolioGridProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-exo text-[var(--theme-color)] mb-4">
            Featured Work
          </h2>
          <p className="text-zinc-400 font-montserrat max-w-2xl mx-auto">
            Explore a collection of my recent projects showcasing web
            development, design, and creative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PortfolioItem
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                category={item.category}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PortfolioGrid;
