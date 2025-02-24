import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const StoriesGrid = () => {
  const stories = [
    {
      title: "MIDNIGHT STREETS",
      excerpt: "Exploring the neon-lit alleys of Tokyo after dark",
      image: "https://images.unsplash.com/photo-1601973555040-c99471641e5b",
      date: "MAR 24",
    },
    {
      title: "URBAN GEOMETRY",
      excerpt: "Finding patterns in New York's concrete jungle",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
      date: "APR 24",
    },
    {
      title: "CITY DWELLERS",
      excerpt: "Documenting life in the heart of London",
      image: "https://images.unsplash.com/photo-1517799094725-e3453440724e",
      date: "MAY 24",
    },
  ];

  return (
    <div className="space-y-12">
      {stories.map((story, index) => (
        <motion.article
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={story.image}
              alt={story.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div>
            <div className="text-orange-500 font-black tracking-tighter mb-4">
              {story.date}
            </div>
            <h3 className="text-4xl font-black text-white tracking-tighter mb-4">
              {story.title}
            </h3>
            <p className="text-zinc-400 mb-6">{story.excerpt}</p>
            <button className="group/btn inline-flex items-center gap-2 text-white">
              <span className="text-sm font-medium group-hover/btn:text-orange-500 transition-colors">
                READ STORY
              </span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4 text-orange-500" />
              </motion.span>
            </button>
          </div>
        </motion.article>
      ))}
    </div>
  );
};

export default StoriesGrid;
