import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed w-full z-50 mix-blend-difference">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <Link to="/v7" className="relative">
          <motion.div
            className="text-white text-xl tracking-[0.2em] font-bold"
            whileHover={{ y: -2 }}
          >
            LENS
            <span className="text-[#E2FF00]">CRAFT</span>
          </motion.div>
        </Link>

        <div className="hidden md:flex space-x-8">
          {[
            { href: "/v7", label: "WORK" },
            { href: "/v7/about", label: "ABOUT" },
            { href: "/v7/contact", label: "CONTACT" },
          ].map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-white text-sm tracking-[0.3em] hover:text-[#E2FF00] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/v7/contact"
            className="bg-[#E2FF00] text-black px-4 py-2 text-sm tracking-[0.3em] hover:bg-white transition-colors"
          >
            GET TEMPLATE
          </Link>
        </div>
      </div>

      {/* Marquee Text */}
      <div className="overflow-hidden border-y border-white/10 py-1 mt-2">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="whitespace-nowrap"
        >
          <span className="inline-block mr-8 text-xs tracking-[0.2em] text-white/50">
            VISUAL MEDIA • BRAND DESIGN • PHOTOGRAPHY • VISUAL MEDIA • BRAND
            DESIGN • PHOTOGRAPHY •
          </span>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navigation;
