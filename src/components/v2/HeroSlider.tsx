import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  imageUrl: string;
  title: string;
  category: string;
}

const slides: Slide[] = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071",
    title: "Wedding Photography",
    category: "Events",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?q=80&w=2069",
    title: "Portrait Photography",
    category: "Studio",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1576097449798-7c7f90e1248a?q=80&w=2070",
    title: "Fashion Photography",
    category: "Commercial",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-out scale-105"
            style={{ backgroundImage: `url(${slides[currentSlide].imageUrl})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-75" />
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-purple-400" : "bg-white/50"}`}
          />
        ))}
      </div>

      {/* Current Slide Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-20 left-8 md:left-12 z-20"
      >
        <p className="text-purple-400 font-montserrat text-sm tracking-wider mb-2">
          {slides[currentSlide].category}
        </p>
        <h3 className="text-white font-exo text-xl md:text-2xl">
          {slides[currentSlide].title}
        </h3>
      </motion.div>
    </div>
  );
};

export default HeroSlider;
