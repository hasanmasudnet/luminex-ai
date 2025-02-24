"use client";
import React from "react";
import ServicesSection from "./ServicesSection";
import { useAtom } from "jotai";
import { themeColorAtom } from "../lib/theme";
import ColorPicker from "./ColorPicker";
import PricingSection from "./PricingSection";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import PortfolioGrid from "./PortfolioGrid";

const Home = () => {
  const [themeColor, setThemeColor] = useAtom(themeColorAtom);

  const updateThemeColor = (color: string) => {
    setThemeColor(color);
    document.documentElement.style.setProperty("--theme-color", color);
  };

  return (
    <div className="min-h-screen bg-black">
      <ColorPicker onColorChange={updateThemeColor} currentColor={themeColor} />
      <Navigation />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <PortfolioGrid />
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 bg-zinc-900"
        >
          <ServicesSection />
        </motion.section>

        <PricingSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 bg-black"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-exo text-[var(--theme-color)] mb-8">
              Let's Create Something Beautiful
            </h2>
            <p className="text-zinc-400 font-montserrat max-w-2xl mx-auto mb-8">
              Ready to capture your special moments? Get in touch and let's
              discuss your photography needs.
            </p>
            <button className="px-8 py-3 bg-[var(--theme-color)] text-black font-exo font-medium rounded-full hover:bg-opacity-90 transition-colors duration-300">
              Book a Session
            </button>
          </div>
        </motion.section>
      </motion.main>
    </div>
  );
};

export default Home;
