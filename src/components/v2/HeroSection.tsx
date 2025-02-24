import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import HeroSlider from "./HeroSlider";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <HeroSlider />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 md:py-48">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-white/70 text-sm tracking-[0.3em] mb-4">
              PHOTOGRAPHY STUDIO
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight">
              Capturing
              <br />
              <span className="italic">Perfect</span> Light
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 tracking-wide mb-12 max-w-2xl mx-auto"
          >
            Professional photography that transforms ordinary moments into
            extraordinary memories.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              to="/v2/portfolio"
              className="group inline-flex items-center gap-2 text-white text-sm tracking-[0.3em] hover:text-purple-400 transition-colors"
            >
              VIEW PORTFOLIO
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={16} />
              </motion.span>
            </Link>
            <Link
              to="/v2/contact"
              className="group inline-flex items-center gap-2 text-white text-sm tracking-[0.3em] hover:text-purple-400 transition-colors"
            >
              GET IN TOUCH
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={16} />
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 bg-purple-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
