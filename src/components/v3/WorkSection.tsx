import React from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

interface WorkItem {
  title: string;
  category: string;
  imageUrl: string;
  client: string;
  description: string;
}

const WorkSection = () => {
  const items: WorkItem[] = [
    {
      title: "Premium Watch Collection",
      category: "Luxury Goods",
      imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      client: "Timepiece Co.",
      description:
        "High-end watch photography showcasing intricate details and premium materials.",
    },
    {
      title: "Organic Skincare Line",
      category: "Beauty",
      imageUrl: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
      client: "Pure Beauty",
      description:
        "Clean, minimalist product photography for a natural skincare brand.",
    },
    {
      title: "Tech Accessories",
      category: "Electronics",
      imageUrl: "https://images.unsplash.com/photo-1491933382434-500287f9b54b",
      client: "TechGear",
      description:
        "Modern and sleek photography for consumer electronics accessories.",
    },
    {
      title: "Artisanal Coffee Packaging",
      category: "Food & Beverage",
      imageUrl: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e",
      client: "Coffee Roasters",
      description: "Warm, inviting product shots of premium coffee packaging.",
    },
    {
      title: "Sports Equipment",
      category: "Fitness",
      imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
      client: "FitGear",
      description:
        "Dynamic product photography showcasing sports and fitness equipment.",
    },
    {
      title: "Jewelry Collection",
      category: "Accessories",
      imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338",
      client: "Luxe Jewels",
      description:
        "Elegant jewelry photography highlighting craftsmanship and details.",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-sans text-white mb-4">
            Featured <span className="text-amber-400">Work</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto font-sans">
            A showcase of our best product photography across various industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                      <p className="text-amber-400 text-sm font-sans mb-2">
                        {item.category}
                      </p>
                      <h3 className="text-white text-xl font-sans mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/60 text-sm font-sans">
                        {item.client}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="bg-black/90 backdrop-blur-xl border-white/10 max-w-4xl">
                <div className="relative aspect-video mb-6 overflow-hidden rounded-lg">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-sans text-white mb-2">
                  {item.title}
                </h2>
                <p className="text-amber-400 text-sm font-sans mb-2">
                  {item.category} - {item.client}
                </p>
                <p className="text-white/60 font-sans">{item.description}</p>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
