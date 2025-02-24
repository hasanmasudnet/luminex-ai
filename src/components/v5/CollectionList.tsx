import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CollectionList = () => {
  const collections = [
    {
      title: "Spring/Summer 2024",
      description: "Latest editorial collection featuring seasonal trends",
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
      count: 24,
    },
    {
      title: "Paris Fashion Week",
      description: "Behind the scenes and runway captures",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae",
      count: 42,
    },
    {
      title: "Studio Portraits",
      description: "Minimalist beauty portraits in studio setting",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050",
      count: 18,
    },
  ];

  return (
    <div className="space-y-12 md:space-y-20">
      {collections.map((collection, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="group"
        >
          <Link to={`/v5/collections/${index}`} className="block relative">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-white text-3xl font-light tracking-wide mb-4">
                  {collection.title}
                </h3>
                <p className="text-white/70 tracking-wide mb-6">
                  {collection.description}
                </p>
                <div className="flex items-center gap-2 text-white text-sm tracking-widest group-hover:opacity-60 transition-opacity">
                  VIEW COLLECTION
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={16} />
                  </motion.span>
                </div>
              </div>
              <div className="order-1 md:order-2 aspect-[4/3] overflow-hidden">
                <div className="relative h-full">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 right-4 bg-black/80 px-3 py-1">
                    <span className="text-white text-sm tracking-widest">
                      {collection.count} PHOTOS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default CollectionList;
