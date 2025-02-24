import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

interface NavigationProps {
  links?: Array<{ href: string; label: string }>;
}

const Navigation = ({
  links = [
    { href: "/v1", label: "Home" },
    { href: "/v1/portfolio", label: "Portfolio" },
    { href: "/v1/services", label: "Services" },
    { href: "/v1/about", label: "About" },
    { href: "/v1/contact", label: "Contact" },
  ],
}: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/95 backdrop-blur-sm border-b border-zinc-800">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <motion.a
          href="/"
          className="text-[var(--theme-color)] font-exo text-2xl font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Luminex
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-white hover:text-[var(--theme-color)] font-montserrat text-sm transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <motion.button
              className="text-white hover:text-[var(--theme-color)] transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <Menu size={24} />
            </motion.button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full bg-black border-zinc-800 p-0"
          >
            <div className="flex flex-col h-full bg-black p-6">
              <div className="flex justify-end mb-8">
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-[var(--theme-color)] transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={24} />
                </motion.button>
              </div>
              <div className="flex flex-col space-y-6">
                {links.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="text-white hover:text-[var(--theme-color)] font-montserrat text-2xl transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;
