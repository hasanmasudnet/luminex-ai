import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

interface PortfolioItemProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  category?: string;
}

const PortfolioItem = ({
  title = "Project Title",
  description = "A brief description of the project showcasing the key features and technologies used.",
  imageUrl = "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  category = "Web Development",
}: PortfolioItemProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="cursor-pointer"
        >
          <Card className="overflow-hidden bg-black border-zinc-800 hover:border-[var(--theme-color)] transition-colors duration-300">
            <div className="relative aspect-video">
              <img
                src={imageUrl}
                alt={title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-[var(--theme-color)] font-exo text-sm uppercase tracking-wider">
                  View Project
                </p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-[var(--theme-color)] text-sm mb-2 font-montserrat">
                {category}
              </p>
              <h3 className="text-white text-xl font-exo mb-2">{title}</h3>
              <p className="text-zinc-400 text-sm font-montserrat line-clamp-2">
                {description}
              </p>
            </div>
          </Card>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="bg-zinc-900 border-zinc-800 text-white max-w-4xl">
        <div className="space-y-4">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-auto rounded-lg"
          />
          <h2 className="text-2xl font-exo text-[var(--theme-color)]">
            {title}
          </h2>
          <p className="text-sm font-montserrat text-zinc-400">{category}</p>
          <p className="font-montserrat text-zinc-200">{description}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioItem;
