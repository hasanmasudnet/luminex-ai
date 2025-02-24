import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="min-h-screen bg-black relative overflow-hidden py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-xs tracking-[0.3em] text-zinc-500 mb-6">
              GET IN TOUCH
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight mb-4">
              Let's create
              <br />
              <span className="italic text-zinc-500">something beautiful</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs tracking-[0.2em] text-zinc-500 mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-zinc-800 py-4 text-white focus:border-white outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.2em] text-zinc-500 mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-zinc-800 py-4 text-white focus:border-white outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs tracking-[0.2em] text-zinc-500 mb-2">
                MESSAGE
              </label>
              <textarea
                rows={6}
                className="w-full bg-transparent border-b border-zinc-800 py-4 text-white focus:border-white outline-none transition-colors resize-none"
              />
            </div>

            <div className="pt-8 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 text-sm tracking-[0.2em] text-white border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
              >
                SEND MESSAGE
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mt-20 text-center"
          >
            {[
              {
                label: "EMAIL",
                value: "hello@vision.studio",
              },
              {
                label: "PHONE",
                value: "+1 (555) 123-4567",
              },
              {
                label: "LOCATION",
                value: "Tokyo, Japan",
              },
            ].map((item, index) => (
              <div key={index}>
                <div className="text-xs tracking-[0.2em] text-zinc-500 mb-2">
                  {item.label}
                </div>
                <div className="text-white">{item.value}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
