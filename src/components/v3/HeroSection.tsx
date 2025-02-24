import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=3270&auto=format&fit=crop")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-7xl font-sans text-white mb-6 leading-tight">
              Making Products
              <br />
              <span className="text-amber-400">Stand Out</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 font-sans mb-12 max-w-2xl md:text-left"
          >
            Professional product photography that elevates your brand and drives
            sales through stunning visual storytelling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center md:items-start gap-6"
          >
            <Link
              to="/v3/work"
              className="group relative overflow-hidden rounded-full bg-amber-400 px-8 py-3 inline-flex items-center"
            >
              <span className="relative z-10 text-black font-sans font-medium pr-2">
                View Portfolio
              </span>
              <ArrowRight size={18} className="relative z-10 text-black" />
              <div className="absolute inset-0 bg-white transform translate-y-full transition-transform group-hover:translate-y-0" />
            </Link>
            <Link
              to="/v3/contact"
              className="group relative overflow-hidden rounded-full px-8 py-3 inline-flex items-center border border-amber-400/50"
            >
              <span className="relative z-10 text-white font-sans font-medium">
                Get Quote
              </span>
              <div className="absolute inset-0 bg-amber-400/10 transform translate-y-full transition-transform group-hover:translate-y-0" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md py-8 border-t border-white/10"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl font-sans text-amber-400 mb-2">500+</p>
              <p className="text-sm text-white/60 font-sans">Products Shot</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-sans text-amber-400 mb-2">50+</p>
              <p className="text-sm text-white/60 font-sans">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-sans text-amber-400 mb-2">10+</p>
              <p className="text-sm text-white/60 font-sans">
                Years Experience
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-sans text-amber-400 mb-2">99%</p>
              <p className="text-sm text-white/60 font-sans">
                Client Satisfaction
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
