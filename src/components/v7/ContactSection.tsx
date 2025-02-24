import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ContactSection = () => {
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
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Content */}
          <div>
            <motion.h2
              custom={0.2}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="text-6xl font-bold text-white tracking-tighter mb-8"
            >
              LET'S WORK
              <br />
              TOGETHER
              <span className="text-[#E2FF00]">★</span>
            </motion.h2>

            <motion.div
              custom={0.4}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <div>
                <h3 className="text-[#E2FF00] text-sm tracking-[0.2em] mb-2">
                  EMAIL
                </h3>
                <p className="text-white/70">hello@lenscraft.com</p>
              </div>
              <div>
                <h3 className="text-[#E2FF00] text-sm tracking-[0.2em] mb-2">
                  PHONE
                </h3>
                <p className="text-white/70">+49 123 456 789</p>
              </div>
              <div>
                <h3 className="text-[#E2FF00] text-sm tracking-[0.2em] mb-2">
                  LOCATION
                </h3>
                <p className="text-white/70">
                  Kreuzberg, Berlin
                  <br />
                  Germany
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            custom={0.6}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <div>
              <label className="text-[#E2FF00] text-sm tracking-[0.2em] mb-2 block">
                NAME
              </label>
              <input
                type="text"
                className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white focus:border-[#E2FF00] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="text-[#E2FF00] text-sm tracking-[0.2em] mb-2 block">
                EMAIL
              </label>
              <input
                type="email"
                className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white focus:border-[#E2FF00] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="text-[#E2FF00] text-sm tracking-[0.2em] mb-2 block">
                MESSAGE
              </label>
              <textarea
                rows={6}
                className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white focus:border-[#E2FF00] focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>
            <button className="w-full bg-[#E2FF00] text-black p-4 font-bold tracking-[0.2em] hover:bg-white transition-colors flex items-center justify-center gap-2">
              SEND MESSAGE
              <Send size={20} />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
