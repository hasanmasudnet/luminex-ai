import React from "react";
import { motion } from "framer-motion";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "Initial meeting to understand your brand, products, and specific requirements.",
    },
    {
      number: "02",
      title: "Planning",
      description:
        "Developing shot lists, styling concepts, and technical requirements.",
    },
    {
      number: "03",
      title: "Production",
      description:
        "Professional photography session with attention to detail and quality.",
    },
    {
      number: "04",
      title: "Post-Production",
      description:
        "Expert retouching and editing to ensure your products look their best.",
    },
    {
      number: "05",
      title: "Delivery",
      description:
        "Final images delivered in your required formats with fast turnaround.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-zinc-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-sans text-white mb-4">
            Our <span className="text-amber-400">Process</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto font-sans">
            A streamlined approach to delivering exceptional product photography
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-amber-400/50 to-transparent z-0" />
              )}

              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-amber-400/30 transition-all duration-300 h-full">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-amber-400 flex items-center justify-center text-black text-2xl font-sans font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  <h3 className="text-white text-xl font-sans mb-2">
                    {step.title}
                  </h3>
                </div>
                <p className="text-white/60 font-sans text-center text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
