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
            </motion.h2>

            <motion.div
              custom={0.4}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <div>
                <h3 className="text-[#FF4D4D] text-sm tracking-[0.2em] mb-2">
                  EMAIL
                </h3>
                <p className="text-white/70">hello@capturestudio.com</p>
              </div>
              <div>
                <h3 className="text-[#FF4D4D] text-sm tracking-[0.2em] mb-2">
                  PHONE
                </h3>
                <p className="text-white/70">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-[#FF4D4D] text-sm tracking-[0.2em] mb-2">
                  LOCATION
                </h3>
                <p className="text-white/70">
                  123 Studio Street
                  <br />
                  New York, NY 10013
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            custom={0.6}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <div>
              <label className="text-[#FF4D4D] text-sm tracking-[0.2em] mb-2 block">
                NAME
              </label>
              <input
                type="text"
                className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white focus:border-[#FF4D4D] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="text-[#FF4D4D] text-sm tracking-[0.2em] mb-2 block">
                EMAIL
              </label>
              <input
                type="email"
                className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white focus:border-[#FF4D4D] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="text-[#FF4D4D] text-sm tracking-[0.2em] mb-2 block">
                MESSAGE
              </label>
              <textarea
                rows={6}
                className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white focus:border-[#FF4D4D] focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>
            <button className="w-full bg-[#FF4D4D] text-white p-4 font-bold tracking-[0.2em] hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2">
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
