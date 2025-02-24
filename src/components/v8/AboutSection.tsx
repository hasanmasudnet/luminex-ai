import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutSection = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <section className="min-h-screen bg-black relative overflow-hidden py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            style={{ scale, y }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e"
              alt="Studio"
              className="w-full h-full object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black to-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="text-xs tracking-[0.3em] text-zinc-500">
                ABOUT US
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
                Capturing moments,
                <br />
                <span className="italic text-zinc-500">creating memories</span>
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  Founded in 2010, Vision has established itself as a leading
                  name in contemporary photography, known for our distinctive
                  aesthetic and innovative approach.
                </p>
                <p>
                  Our work has been featured in leading publications and we've
                  collaborated with some of the most prestigious brands in the
                  industry.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                {[
                  { number: "15+", label: "Years Experience" },
                  { number: "200+", label: "Happy Clients" },
                  { number: "50+", label: "Awards Won" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-2xl text-white font-light mb-2">
                      {stat.number}
                    </div>
                    <div className="text-xs tracking-[0.2em] text-zinc-500">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
