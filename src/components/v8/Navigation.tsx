import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed w-full z-50 mix-blend-difference">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <Link to="/v8" className="relative">
          <motion.div
            className="text-white text-xl tracking-[0.2em] font-bold"
            whileHover={{ y: -2 }}
          >
            CAPTURE
            <span className="text-[#FF4D4D]">STUDIO</span>
          </motion.div>
        </Link>

        <div className="hidden md:flex space-x-8">
          {[
            { href: "/v8", label: "WORK" },
            { href: "/v8/about", label: "ABOUT" },
            { href: "/v8/contact", label: "CONTACT" },
          ].map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-white text-sm tracking-[0.3em] hover:text-[#FF4D4D] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/v8/contact"
            className="bg-[#FF4D4D] text-white px-4 py-2 text-sm tracking-[0.3em] hover:bg-white hover:text-black transition-colors"
          >
            BOOK NOW
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
