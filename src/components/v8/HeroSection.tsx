import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: delay,
      },
    }),
  };

  return (
    <div className="min-h-screen bg-black pt-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <motion.h2
              custom={0.2}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="text-[#FF4D4D] text-xl tracking-[0.3em] mb-4"
            >
              PHOTOGRAPHY STUDIO
            </motion.h2>

            <motion.h1
              custom={0.4}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter mb-8"
            >
              CAPTURING
              <br />
              MOMENTS IN
              <br />
              <span className="text-[#FF4D4D]">TIME</span>
            </motion.h1>

            <motion.div
              custom={0.6}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              <Link
                to="/v8/work"
                className="inline-flex items-center gap-2 bg-[#FF4D4D] text-white px-8 py-4 text-lg tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-colors"
              >
                EXPLORE WORK
                <ArrowRight size={24} />
              </Link>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            custom={0.8}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb"
                alt="Hero"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-[#FF4D4D] text-white p-8">
              <p className="text-5xl font-bold mb-2">15+</p>
              <p className="text-sm tracking-[0.2em]">YEARS OF EXPERIENCE</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
