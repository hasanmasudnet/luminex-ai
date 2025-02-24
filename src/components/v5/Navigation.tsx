import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/v5", label: "Home" },
    { href: "/v5/gallery", label: "Gallery" },
    { href: "/v5/collections", label: "Collections" },
    { href: "/v5/about", label: "About" },
    { href: "/v5/contact", label: "Contact" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "-100%",
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -50 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <nav className="fixed w-full z-50 mix-blend-difference">
      <div className="container mx-auto px-4 md:px-8 py-6">
        <div className="flex justify-between items-center">
          <Link
            to="/v5"
            className="text-white text-2xl font-light tracking-[0.2em]"
          >
            LUMIÈRE
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-white text-sm tracking-widest hover:opacity-60 transition-opacity"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-black/95 md:hidden"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex justify-between items-center mb-12">
                <span className="text-white text-2xl font-light tracking-[0.2em]">
                  LUMIÈRE
                </span>
                <button onClick={() => setIsOpen(false)} className="text-white">
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col space-y-6">
                {menuItems.map((item) => (
                  <motion.div key={item.href} variants={itemVariants}>
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-white text-3xl font-light tracking-widest hover:opacity-60 transition-opacity"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
