import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2976&auto=format&fit=crop",
      title: "Editorial",
      subtitle: "2024 Collection",
    },
    {
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=3271&auto=format&fit=crop",
      title: "Portrait",
      subtitle: "Studio Sessions",
    },
    {
      image:
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2970&auto=format&fit=crop",
      title: "Fashion",
      subtitle: "Latest Work",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Slides */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 md:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-4xl"
          >
            <h2 className="text-white/70 text-sm md:text-base tracking-[0.3em] mb-4">
              FASHION PHOTOGRAPHY
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8">
              Capturing
              <br />
              <span className="italic">Timeless</span> Beauty
            </h1>
            <div className="flex flex-wrap gap-6">
              <Link
                to="/v5/gallery"
                className="group flex items-center gap-2 text-white text-sm tracking-widest hover:opacity-60 transition-opacity"
              >
                VIEW GALLERY
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={16} />
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 left-4 md:left-8 z-10">
        <div className="flex items-center gap-4">
          <div className="text-white text-sm tracking-widest">
            {String(currentSlide + 1).padStart(2, "0")}
          </div>
          <div className="w-12 h-[1px] bg-white/30">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 6, repeat: Infinity }}
              className="h-full bg-white origin-left"
            />
          </div>
          <div className="text-white/30 text-sm tracking-widest">
            {String(slides.length).padStart(2, "0")}
          </div>
        </div>
      </div>

      {/* Current Slide Info */}
      <div className="absolute bottom-8 right-4 md:right-8 z-10 text-right">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-white text-sm tracking-widest mb-1">
              {slides[currentSlide].title}
            </div>
            <div className="text-white/50 text-sm tracking-widest">
              {slides[currentSlide].subtitle}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroSection;
