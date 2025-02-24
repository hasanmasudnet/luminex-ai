import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
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
    <div className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <motion.h2
              custom={0.2}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="text-6xl font-bold text-white tracking-tighter mb-8"
            >
              ABOUT
              <span className="text-[#E2FF00]">★</span>
              <br />
              THE STUDIO
            </motion.h2>

            <motion.div
              custom={0.4}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="space-y-6 text-white/70"
            >
              <p>
                Founded in 2020, LENSCRAFT has established itself as a leading
                name in fashion and editorial photography, known for our
                distinctive minimalist aesthetic and timeless approach.
              </p>
              <p>
                Our work has been featured in leading fashion magazines and
                we've collaborated with some of the most prestigious brands in
                the industry.
              </p>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            custom={0.6}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e"
                alt="Studio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-[#E2FF00] text-black p-8">
              <p className="text-5xl font-bold mb-2">10+</p>
              <p className="text-sm tracking-[0.2em]">YEARS OF EXPERIENCE</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
