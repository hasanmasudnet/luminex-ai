import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  // Text animation variants
  const letterAnimation = {
    hidden: { y: 400 },
    visible: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

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
          {/* Left: Title Section */}
          <div>
            {/* Main Title with Letter Animation */}
            <div className="overflow-hidden mb-4">
              <motion.h1
                className="text-6xl md:text-[120px] lg:text-[150px] font-bold text-white leading-[0.9] tracking-tighter"
                aria-label="LENS CRAFT"
              >
                <motion.span
                  className="inline-block"
                  variants={letterAnimation}
                  initial="hidden"
                  animate="visible"
                >
                  LENS
                </motion.span>
                <br />
                <motion.span
                  className="inline-block"
                  variants={letterAnimation}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.1 }}
                >
                  CRAFT
                </motion.span>
                <motion.span
                  className="text-[#E2FF00] inline-block ml-4"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  ★
                </motion.span>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.h2
              custom={0.4}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="text-xl tracking-[0.3em] text-white/70 mb-8"
            >
              PHOTOGRAPHY STUDIO FROM BERLIN
            </motion.h2>

            {/* CTA Button */}
            <motion.div
              custom={0.5}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              <Link
                to="/v7/work"
                className="inline-flex items-center gap-2 bg-[#E2FF00] text-black px-8 py-4 text-lg tracking-[0.2em] font-bold hover:bg-white transition-colors"
              >
                VIEW WORK
                <ArrowRight size={24} />
              </Link>
            </motion.div>
          </div>

          {/* Right: Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              custom={0.6}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb"
                  alt="Portrait"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1469334031218-e382a71b716b"
                  alt="Fashion"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </motion.div>
            <motion.div
              custom={0.7}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="space-y-4 pt-8"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1488161628813-04466f872be2"
                  alt="Studio"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1445205170230-053b83016050"
                  alt="Editorial"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-20">
          {[
            { label: "CLIENTS", value: "200" },
            { label: "PROJECTS", value: "300" },
            { label: "AWARDS", value: "90" },
            { label: "HAPPY CASES", value: "100" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              custom={0.8 + index * 0.1}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="text-center"
            >
              <p className="text-4xl font-bold text-white mb-2">
                {stat.value}
                <motion.span
                  className="text-[#E2FF00]"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 0.6,
                    delay: 1 + index * 0.1,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                >
                  +
                </motion.span>
              </p>
              <p className="text-sm tracking-[0.2em] text-white/50">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="bg-[#E2FF00] py-20 px-6 -mx-6"
        >
          <div className="container mx-auto text-center">
            <motion.h2
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.7 }}
              className="text-4xl md:text-6xl font-bold text-black mb-8"
            >
              LET'S CREATE
              <br />
              YOUR NEW PORTFOLIO
              <motion.span
                className="text-white ml-2"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                ★
              </motion.span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9 }}
            >
              <Link
                to="/v7/contact"
                className="inline-flex items-center gap-2 text-black text-lg tracking-[0.2em] font-bold hover:text-white transition-colors"
              >
                GET IN TOUCH
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={24} />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
