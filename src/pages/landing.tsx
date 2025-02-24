import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl w-full">
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

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative"
        >
          <Link
            to="/v5"
            className="block aspect-video w-full overflow-hidden rounded-xl bg-black p-8 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent group-hover:opacity-75 transition-opacity" />
            <div className="relative z-10">
              <h2 className="text-3xl font-light tracking-wider text-white mb-4">
                Version 5
              </h2>
              <p className="text-zinc-400 tracking-wide">
                Elegant fashion photography with minimalist aesthetics.
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
            to="/v6"
            className="block aspect-video w-full overflow-hidden rounded-xl bg-black p-8 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent group-hover:opacity-75 transition-opacity" />
            <div className="relative z-10">
              <h2 className="text-3xl font-black tracking-tighter text-white mb-4">
                Version 6
              </h2>
              <p className="text-zinc-400 font-medium">
                Urban street photography with bold typography and modern
                aesthetics.
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
            to="/v7"
            className="block aspect-video w-full overflow-hidden rounded-xl bg-black p-8 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#E2FF00]/20 to-transparent group-hover:opacity-75 transition-opacity" />
            <div className="relative z-10">
              <h2 className="text-4xl font-bold tracking-tighter text-white mb-4">
                Version 7<span className="text-[#E2FF00]">★</span>
              </h2>
              <p className="text-zinc-400 tracking-wide">
                Bold, modern photography portfolio with neon accents and dynamic
                typography.
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
            to="/v8"
            className="block aspect-video w-full overflow-hidden rounded-xl bg-black p-8 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF4D4D]/20 to-transparent group-hover:opacity-75 transition-opacity" />
            <div className="relative z-10">
              <h2 className="text-4xl font-bold tracking-tighter text-white mb-4">
                Version 8
              </h2>
              <p className="text-zinc-400 tracking-wide">
                Professional photography studio with vibrant red accents and
                clean design.
              </p>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
