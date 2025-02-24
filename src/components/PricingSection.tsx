import { motion } from "framer-motion";

const PricingSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const plans = [
    {
      name: "Basic",
      price: "$299",
      features: [
        "2-Hour Session",
        "100 Digital Photos",
        "Basic Retouching",
        "Online Gallery",
        "Download Access",
      ],
    },
    {
      name: "Premium",
      price: "$599",
      features: [
        "4-Hour Session",
        "250 Digital Photos",
        "Advanced Retouching",
        "Online Gallery",
        "Download Access",
        "10 Printed Photos",
      ],
      highlighted: true,
    },
    {
      name: "Professional",
      price: "$999",
      features: [
        "Full Day Session",
        "500+ Digital Photos",
        "Premium Retouching",
        "Online Gallery",
        "Download Access",
        "20 Printed Photos",
        "Photo Album",
      ],
    },
  ];

  return (
    <section className="py-20 bg-black">
      <motion.div
        className="container mx-auto px-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-exo text-[var(--theme-color)] mb-12 text-center"
          variants={item}
        >
          Photography Packages
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={item}
              className={`p-6 rounded-lg ${plan.highlighted ? "bg-[var(--theme-color)] text-black" : "bg-zinc-900 text-white"} border border-zinc-800 hover:scale-105 transition-transform duration-300`}
              whileHover={{ y: -10 }}
            >
              <h3 className="text-2xl font-exo mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span className="font-montserrat text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-full font-exo transition-colors duration-300 ${plan.highlighted ? "bg-black text-[var(--theme-color)] hover:bg-zinc-800" : "bg-[var(--theme-color)] text-black hover:bg-opacity-90"}`}
              >
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PricingSection;
