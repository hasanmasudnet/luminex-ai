import React from "react";
import Navigation from "@/components/v6/Navigation";
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
              <h2 className="text-orange-500 text-lg font-black tracking-tighter mb-4">
                GET IN TOUCH
              </h2>
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
                Contact
              </h1>
              <p className="text-zinc-400 mb-12">
                Have a project in mind? Let's create something amazing together.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-white text-sm tracking-widest mb-2">
                    EMAIL
                  </h3>
                  <p className="text-zinc-400">hello@urbanphoto.com</p>
                </div>
                <div>
                  <h3 className="text-white text-sm tracking-widest mb-2">
                    PHONE
                  </h3>
                  <p className="text-zinc-400">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="text-white text-sm tracking-widest mb-2">
                    LOCATION
                  </h3>
                  <p className="text-zinc-400">
                    123 Urban Street
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
                  className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-white focus:border-orange-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-white text-sm tracking-widest block mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-white focus:border-orange-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-white text-sm tracking-widest block mb-2">
                  MESSAGE
                </label>
                <textarea
                  rows={6}
                  className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-white focus:border-orange-500 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <button className="group inline-flex items-center gap-2 text-white">
                <span className="text-sm font-medium group-hover:text-orange-500 transition-colors">
                  SEND MESSAGE
                </span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4 text-orange-500" />
                </motion.span>
              </button>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
