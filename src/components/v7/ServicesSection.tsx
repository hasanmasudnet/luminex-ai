import React from "react";
import { motion } from "framer-motion";
import { Camera, Image, Video, Users, PenTool, Lightbulb } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Camera,
      title: "PHOTOGRAPHY",
      description:
        "Professional photography for fashion, editorial, and commercial projects.",
    },
    {
      icon: Video,
      title: "VIDEOGRAPHY",
      description:
        "Cinematic video production for brand stories and campaigns.",
    },
    {
      icon: Image,
      title: "RETOUCHING",
      description: "Expert photo editing and color grading services.",
    },
    {
      icon: Users,
      title: "DIRECTION",
      description: "Creative direction for photoshoots and campaigns.",
    },
  ];

  return (
    <div className="py-20 bg-zinc-950">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-6xl font-bold text-white tracking-tighter mb-16 text-center"
        >
          OUR
          <br />
          SERVICES
          <span className="text-[#E2FF00]">★</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 bg-black border border-zinc-900 hover:border-[#E2FF00] transition-colors"
            >
              <service.icon className="w-12 h-12 text-[#E2FF00] mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-white/70">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
