import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative"
        >
          <Link
            to="/v1"
            className="block aspect-video w-full overflow-hidden rounded-xl bg-zinc-900 p-8 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-lime-500/20 to-transparent group-hover:opacity-75 transition-opacity" />
            <div className="relative z-10">
              <h2 className="text-3xl font-exo text-lime-400 mb-4">
                Version 1
              </h2>
              <p className="text-zinc-400 font-montserrat">
                Modern portfolio with lime accent, featuring a dark theme and
                smooth animations.
              </p>
            </div>
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative"
        >
          <Link
            to="/v2"
            className="block aspect-video w-full overflow-hidden rounded-xl bg-zinc-900 p-8 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent group-hover:opacity-75 transition-opacity" />
            <div className="relative z-10">
              <h2 className="text-3xl font-exo text-purple-400 mb-4">
                Version 2
              </h2>
              <p className="text-zinc-400 font-montserrat">
                Elegant portfolio with purple gradients and minimalist design.
              </p>
            </div>
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative"
        >
          <Link
            to="/v3"
            className="block aspect-video w-full overflow-hidden rounded-xl bg-zinc-900 p-8 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent group-hover:opacity-75 transition-opacity" />
            <div className="relative z-10">
              <h2 className="text-3xl font-exo text-amber-400 mb-4">
                Version 3
              </h2>
              <p className="text-zinc-400 font-montserrat">
                Professional product photography portfolio with amber accents.
              </p>
            </div>
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative"
        >
          <Link
            to="/v4"
            className="block aspect-video w-full overflow-hidden rounded-xl bg-[#1a1c18] p-8 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#e5e926]/20 to-transparent group-hover:opacity-75 transition-opacity" />
            <div className="relative z-10">
              <h2 className="text-3xl font-mono text-[#e5e926] mb-4">
                Version 4
              </h2>
              <p className="text-zinc-400 font-mono">
                Enterprise photography platform with modern tech aesthetic.
              </p>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
