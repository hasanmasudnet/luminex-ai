import React from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-exo text-white mb-6">
              About <span className="text-purple-400">Me</span>
            </h1>
            <div className="space-y-4 text-white/70 font-montserrat">
              <p>
                With over a decade of experience in photography, I've developed
                a unique style that combines technical precision with artistic
                vision.
              </p>
              <p>
                My journey began with a simple passion for capturing moments,
                but it has evolved into a professional pursuit of creating
                visual stories that resonate with people.
              </p>
              <p>
                I specialize in portrait, wedding, and commercial photography,
                always striving to bring out the authentic beauty in every
                subject I photograph.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1603574670812-d24560880210"
                alt="Photographer at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-purple-500/10" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-purple-400 text-black p-6 rounded-lg font-exo">
              <p className="text-4xl font-bold mb-2">10+</p>
              <p className="text-sm">Years of Experience</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
