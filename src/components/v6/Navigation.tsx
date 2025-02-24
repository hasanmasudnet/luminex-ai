import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/v6", label: "HOME" },
    { href: "/v6/work", label: "WORK" },
    { href: "/v6/stories", label: "STORIES" },
    { href: "/v6/about", label: "ABOUT" },
    { href: "/v6/contact", label: "CONTACT" },
  ];

  return (
    <nav className="fixed w-full z-50">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent" />
      <div className="relative container mx-auto px-4 md:px-8 py-6">
        <div className="flex justify-between items-center">
          <Link
            to="/v6"
            className="text-white text-2xl font-black uppercase tracking-tighter hover:tracking-wide transition-all duration-300"
          >
            URBAN
            <span className="text-orange-500">.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="relative group text-white text-sm font-medium"
              >
                <span className="block group-hover:-translate-y-1 transition-transform duration-300">
                  {item.label}
                </span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="md:hidden text-white"
          >
            <Menu size={24} />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30 }}
            className="fixed inset-0 bg-black md:hidden z-50"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center px-4 py-6">
                <span className="text-white text-2xl font-black uppercase tracking-tighter">
                  URBAN<span className="text-orange-500">.</span>
                </span>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                  className="text-white"
                >
                  <X size={24} />
                </motion.button>
              </div>

              <div className="flex flex-col items-center justify-center flex-1 space-y-8">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-white text-4xl font-black tracking-tighter hover:text-orange-500 transition-colors"
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
