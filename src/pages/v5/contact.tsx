import React from "react";
import Navigation from "@/components/v5/Navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-white/70 text-sm tracking-[0.3em] mb-4">
                GET IN TOUCH
              </h2>
              <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
                Contact
              </h1>
              <p className="text-white/70 tracking-wide mb-12">
                For inquiries about collaborations, bookings, or any other
                questions, please don't hesitate to reach out.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-white text-sm tracking-widest mb-2">
                    EMAIL
                  </h3>
                  <p className="text-white/70 tracking-wide">
                    studio@lumiere.com
                  </p>
                </div>
                <div>
                  <h3 className="text-white text-sm tracking-widest mb-2">
                    PHONE
                  </h3>
                  <p className="text-white/70 tracking-wide">
                    +1 (555) 123-4567
                  </p>
                </div>
                <div>
                  <h3 className="text-white text-sm tracking-widest mb-2">
                    LOCATION
                  </h3>
                  <p className="text-white/70 tracking-wide">
                    123 Studio Street
                    <br />
                    New York, NY 10013
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <label className="text-white text-sm tracking-widest block mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-white/30 focus:outline-none transition-colors tracking-wide"
                />
              </div>
              <div>
                <label className="text-white text-sm tracking-widest block mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-white/30 focus:outline-none transition-colors tracking-wide"
                />
              </div>
              <div>
                <label className="text-white text-sm tracking-widest block mb-2">
                  MESSAGE
                </label>
                <textarea
                  rows={6}
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-white/30 focus:outline-none transition-colors tracking-wide resize-none"
                ></textarea>
              </div>
              <button className="group flex items-center gap-2 text-white text-sm tracking-widest hover:opacity-60 transition-opacity">
                SEND MESSAGE
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={16} />
                </motion.span>
              </button>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
