import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1601973555040-c99471641e5b",
      title: "Urban Exploration",
      location: "NEW YORK CITY",
      year: "2024",
    },
    {
      image: "https://images.unsplash.com/photo-1517799094725-e3453440724e",
      title: "Street Stories",
      location: "TOKYO",
      year: "2024",
    },
    {
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
      title: "City Lights",
      location: "LONDON",
      year: "2024",
    },
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Slides */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-4 md:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h2 className="text-orange-500 text-lg md:text-xl font-black tracking-tighter mb-4">
                {slides[currentSlide].location} / {slides[currentSlide].year}
              </h2>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-none mb-8">
                {slides[currentSlide].title}
              </h1>
              <Link
                to="/v6/work"
                className="inline-flex items-center gap-2 text-white group"
              >
                <span className="text-lg font-medium group-hover:text-orange-500 transition-colors">
                  VIEW PROJECTS
                </span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-6 h-6 text-orange-500" />
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide Controls */}
      <div className="absolute bottom-8 left-4 md:left-8 right-4 md:right-8">
        <div className="flex justify-between items-end">
          <div className="space-y-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`block w-12 h-0.5 transition-all duration-300 ${index === currentSlide ? "bg-orange-500 w-24" : "bg-white/50 hover:bg-white"}`}
              />
            ))}
          </div>
          <div className="text-right">
            <div className="text-orange-500 font-black text-5xl tracking-tighter">
              {String(currentSlide + 1).padStart(2, "0")}\
              {String(slides.length).padStart(2, "0")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
