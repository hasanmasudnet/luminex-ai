import React from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

interface PortfolioItem {
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

const PortfolioGrid = () => {
  const items: PortfolioItem[] = [
    {
      title: "Urban Landscapes",
      category: "Photography",
      imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
      description:
        "Exploring the beauty of modern architecture and city life through dramatic compositions.",
    },
    {
      title: "Natural Light Portraits",
      category: "Portrait",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      description:
        "Capturing genuine emotions with the soft touch of natural lighting.",
    },
    {
      title: "Wedding Stories",
      category: "Events",
      imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a",
      description:
        "Documenting love stories through candid and emotional moments.",
    },
    {
      title: "Product Photography",
      category: "Commercial",
      imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
      description:
        "Showcasing products in their best light with attention to detail.",
    },
    {
      title: "Fashion Editorial",
      category: "Fashion",
      imageUrl: "https://images.unsplash.com/photo-1469334031218-e382a71b716b",
      description:
        "Creating striking fashion narratives through editorial photography.",
    },
    {
      title: "Abstract Nature",
      category: "Fine Art",
      imageUrl: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
      description: "Finding abstract beauty in natural forms and patterns.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-exo text-white mb-6">
            Featured <span className="text-purple-400">Work</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto font-montserrat">
            A curated selection of our finest photography projects, showcasing
            our commitment to visual excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-purple-950/20 backdrop-blur-sm border border-purple-500/10">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                      <p className="text-purple-300 text-sm font-montserrat mb-2">
                        {item.category}
                      </p>
                      <h3 className="text-white text-xl font-exo mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/70 text-sm font-montserrat line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="bg-purple-950/90 backdrop-blur-xl border-purple-500/20 max-w-4xl">
                <div className="relative aspect-video mb-6 overflow-hidden rounded-lg">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-exo text-white mb-2">
                  {item.title}
                </h2>
                <p className="text-purple-300 text-sm font-montserrat mb-4">
                  {item.category}
                </p>
                <p className="text-white/70 font-montserrat">
                  {item.description}
                </p>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
