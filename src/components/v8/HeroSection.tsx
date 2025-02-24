import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb",
      delay: 0,
      className: "col-span-2 row-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b",
      delay: 0.1,
      className: "col-span-1 row-span-1",
    },
    {
      src: "https://images.unsplash.com/photo-1488161628813-04466f872be2",
      delay: 0.2,
      className: "col-span-1 row-span-1",
    },
    {
      src: "https://images.unsplash.com/photo-1445205170230-053b83016050",
      delay: 0.3,
      className: "col-span-2 row-span-1",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Image Grid */}
      <div className="absolute inset-0 grid grid-cols-4 gap-2 p-2">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`relative overflow-hidden ${image.className}`}
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.5,
              delay: image.delay,
              ease: [0.25, 1, 0.5, 1],
            }}
          >
            <motion.img
              src={image.src}
              alt={`Gallery ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-sm md:text-base tracking-[0.3em] text-zinc-400 mb-6">
            PHOTOGRAPHY STUDIO
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-[1.1]">
            Capturing Life's
            <span className="block italic text-zinc-400">
              Beautiful Moments
            </span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-12">
            Professional photography that transforms ordinary moments into
            extraordinary memories
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <Link
            to="/v8/work"
            className="px-8 py-4 bg-white text-black text-sm tracking-[0.2em] hover:bg-zinc-200 transition-colors duration-300"
          >
            VIEW PORTFOLIO
          </Link>
          <Link
            to="/v8/contact"
            className="px-8 py-4 border border-white/20 text-white text-sm tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300"
          >
            GET IN TOUCH
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-zinc-400 text-sm tracking-[0.2em]"
        >
          SCROLL
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
