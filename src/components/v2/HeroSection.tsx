import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-950 via-black to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 md:py-48">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-exo text-white mb-6 leading-tight">
              Capturing Moments in
              <span className="text-purple-400"> Perfect Light</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 font-montserrat mb-12 max-w-2xl mx-auto"
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
              className="group relative overflow-hidden rounded-full bg-purple-500 px-8 py-3 inline-flex items-center"
            >
              <span className="relative z-10 text-black font-exo font-medium pr-2">
                View Portfolio
              </span>
              <ArrowRight size={18} className="relative z-10 text-black" />
              <div className="absolute inset-0 bg-purple-400 transform translate-y-full transition-transform group-hover:translate-y-0" />
            </Link>
            <Link
              to="/v2/contact"
              className="group relative overflow-hidden rounded-full px-8 py-3 inline-flex items-center border border-purple-400/50"
            >
              <span className="relative z-10 text-white font-exo font-medium">
                Get in Touch
              </span>
              <div className="absolute inset-0 bg-purple-400/10 transform translate-y-full transition-transform group-hover:translate-y-0" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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
