import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-[#1a1c18] overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMyMDIwMjAiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTIgMmg1NnY1NkgyVjJ6IiBmaWxsPSIjMjkyOTI5Ii8+PC9nPjwvc3ZnPg==')] opacity-10" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-40">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-mono text-white mb-6 leading-tight">
              Your Photography:
              <br />
              <span className="text-[#e5e926]">
                enterprise-ready in a click /
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 font-mono mb-12 max-w-2xl"
          >
            Everything you need to create stunning visual experiences: from
            professional equipment and expert photographers, to seamless
            delivery and post-processing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-start gap-6"
          >
            <Link
              to="/v4/try"
              className="bg-[#e5e926] text-[#1a1c18] px-8 py-3 font-mono inline-flex items-center hover:bg-[#e5e926]/90 transition-colors"
            >
              TRY IT NOW
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              to="/v4/demo"
              className="bg-[#1a1c18] text-[#e5e926] border border-[#e5e926] px-8 py-3 font-mono inline-flex items-center hover:bg-[#e5e926]/10 transition-colors"
            >
              WATCH DEMO
            </Link>
          </motion.div>

          {/* Trusted By Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-24"
          >
            <h3 className="text-[#e5e926] font-mono text-sm mb-8">
              / TRUSTED BY
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 opacity-70 grayscale">
              <img
                src="https://api.dicebear.com/7.x/shapes/svg?seed=client1&backgroundColor=e5e926"
                alt="Client 1"
                className="h-8 object-contain"
              />
              <img
                src="https://api.dicebear.com/7.x/shapes/svg?seed=client2&backgroundColor=e5e926"
                alt="Client 2"
                className="h-8 object-contain"
              />
              <img
                src="https://api.dicebear.com/7.x/shapes/svg?seed=client3&backgroundColor=e5e926"
                alt="Client 3"
                className="h-8 object-contain"
              />
              <img
                src="https://api.dicebear.com/7.x/shapes/svg?seed=client4&backgroundColor=e5e926"
                alt="Client 4"
                className="h-8 object-contain"
              />
              <img
                src="https://api.dicebear.com/7.x/shapes/svg?seed=client5&backgroundColor=e5e926"
                alt="Client 5"
                className="h-8 object-contain"
              />
            </div>
          </motion.div>
        </div>

        {/* 3D Elements */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-1/3 h-full opacity-80">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative w-full h-full"
          >
            <div className="absolute top-1/4 right-20 w-32 h-64 bg-[#e5e926] transform rotate-45 skew-y-12" />
            <div className="absolute top-1/3 right-40 w-24 h-48 bg-[#e5e926] transform -rotate-12 skew-y-12" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
