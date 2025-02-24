import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

interface NavigationProps {
  links?: Array<{ href: string; label: string }>;
}

const Navigation = ({
  links = [
    { href: "/v2", label: "Home" },
    { href: "/v2/portfolio", label: "Work" },
    { href: "/v2/about", label: "About" },
    { href: "/v2/contact", label: "Contact" },
  ],
}: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/10 backdrop-blur-md">
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        <Link to="/v2" className="relative group">
          <motion.div
            className="text-white text-2xl font-light tracking-[0.2em]"
            whileHover={{ y: -2 }}
          >
            LUMINEX
            <span className="text-purple-400">.</span>
          </motion.div>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">
          {links.map((link) => (
            <Link key={link.href} to={link.href} className="relative group">
              <motion.span
                className="text-white/90 hover:text-white text-sm tracking-[0.3em] transition-colors"
                whileHover={{ y: -2 }}
              >
                {link.label.toUpperCase()}
              </motion.span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <motion.button
          className="md:hidden text-white"
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={24} />
        </motion.button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween" }}
              className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 md:hidden"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex justify-end">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(false)}
                    className="text-white"
                  >
                    <X size={24} />
                  </motion.button>
                </div>
                <div className="flex flex-col items-center justify-center flex-1 space-y-8">
                  {links.map((link, index) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-2xl text-white/90 hover:text-white font-montserrat tracking-wide"
                      >
                        {link.label}
                      </motion.span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
