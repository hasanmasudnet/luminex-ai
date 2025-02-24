import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface NavigationProps {
  links?: Array<{ href: string; label: string }>;
}

const Navigation = ({
  links = [
    { href: "/v4", label: "Product" },
    { href: "/v4/use-cases", label: "Use Cases" },
    { href: "/v4/docs", label: "Docs" },
    { href: "/v4/pricing", label: "Pricing" },
    { href: "/v4/company", label: "Company" },
  ],
}: NavigationProps) => {
  return (
    <nav className="fixed w-full z-50 bg-[#1a1c18]/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/v4" className="relative group">
          <motion.div
            className="text-[#e5e926] font-mono text-2xl tracking-wider"
            whileHover={{ y: -2 }}
          >
            CAPTURA
          </motion.div>
        </Link>

        <div className="hidden md:flex items-center space-x-12">
          {links.map((link) => (
            <Link key={link.href} to={link.href} className="relative group">
              <motion.span
                className="text-[#e5e926]/90 hover:text-[#e5e926] font-mono text-sm tracking-wide transition-colors"
                whileHover={{ y: -2 }}
              >
                {link.label}
              </motion.span>
            </Link>
          ))}
          <Link
            to="/v4/try"
            className="bg-[#e5e926] text-[#1a1c18] px-4 py-2 font-mono text-sm hover:bg-[#e5e926]/90 transition-colors"
          >
            TRY IT NOW
          </Link>
          <Link
            to="/v4/login"
            className="text-[#e5e926]/90 hover:text-[#e5e926] font-mono text-sm transition-colors"
          >
            Log in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
