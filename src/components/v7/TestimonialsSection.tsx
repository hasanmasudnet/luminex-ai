import React from "react";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Their attention to detail and creative vision exceeded our expectations.",
      author: "Sarah Johnson",
      role: "Art Director, Vogue",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
    {
      quote:
        "The best photography studio we've worked with. Truly professional.",
      author: "Michael Chen",
      role: "Creative Lead, Nike",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    },
    {
      quote: "Exceptional quality and service. They bring ideas to life.",
      author: "Emma Davis",
      role: "Brand Manager, Adidas",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
    },
  ];

  return (
    <div className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-6xl font-bold text-white tracking-tighter mb-16 text-center"
        >
          CLIENT
          <br />
          REVIEWS
          <span className="text-[#E2FF00]">★</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-zinc-950 border border-zinc-900"
            >
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-16 h-16 rounded-full mb-6"
              />
              <p className="text-white/70 text-lg mb-6">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="text-white font-bold">{testimonial.author}</p>
                <p className="text-[#E2FF00] text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
