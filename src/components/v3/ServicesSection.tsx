import React from "react";
import { motion } from "framer-motion";
import {
  Camera,
  Image,
  Box,
  ShoppingBag,
  Monitor,
  Lightbulb,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Camera,
      title: "Product Photography",
      description:
        "High-quality product shots that highlight details and features",
      features: [
        "Multiple angles",
        "Detail shots",
        "White background",
        "Custom setups",
      ],
    },
    {
      icon: Image,
      title: "360° Photography",
      description: "Interactive 360-degree views of your products",
      features: [
        "Full rotation",
        "Zoom capability",
        "Web integration",
        "Mobile-friendly",
      ],
    },
    {
      icon: Box,
      title: "Packaging Photography",
      description: "Showcase your product packaging in its best light",
      features: [
        "Box designs",
        "Label details",
        "Unboxing sequences",
        "Brand consistency",
      ],
    },
    {
      icon: ShoppingBag,
      title: "E-commerce Photography",
      description: "Optimized images for online marketplaces and websites",
      features: [
        "Amazon compliant",
        "Multiple formats",
        "Fast delivery",
        "SEO friendly",
      ],
    },
    {
      icon: Monitor,
      title: "Lifestyle Photography",
      description: "Show your products in real-world contexts",
      features: [
        "Environmental shots",
        "User interaction",
        "Brand storytelling",
        "Scene setup",
      ],
    },
    {
      icon: Lightbulb,
      title: "Creative Direction",
      description: "Strategic visual planning for your product launches",
      features: [
        "Concept development",
        "Style guides",
        "Brand alignment",
        "Campaign planning",
      ],
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
            Our <span className="text-amber-400">Services</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto font-sans">
            Professional product photography services tailored to your brand's
            needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 group hover:border-amber-400/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-amber-400/10 text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-colors">
                  <service.icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-sans text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-sm font-sans mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-white/40 text-sm"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 + i * 0.1 }}
                          className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-2"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
