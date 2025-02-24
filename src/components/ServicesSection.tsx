import { motion } from "framer-motion";
import { Camera, Image, Video, Users, PenTool, Lightbulb } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Camera className="w-8 h-8 mb-4" />,
      title: "Photography",
      description:
        "Professional photography services for events, portraits, and commercial needs",
      features: [
        "High-resolution images",
        "Professional editing",
        "Quick turnaround",
      ],
    },
    {
      icon: <Video className="w-8 h-8 mb-4" />,
      title: "Videography",
      description:
        "Cinematic video production for weddings, corporate events, and promotional content",
      features: ["4K recording", "Drone footage", "Professional editing"],
    },
    {
      icon: <Image className="w-8 h-8 mb-4" />,
      title: "Photo Editing",
      description:
        "Expert retouching and enhancement services to perfect your images",
      features: ["Color correction", "Retouching", "Special effects"],
    },
    {
      icon: <Users className="w-8 h-8 mb-4" />,
      title: "Events",
      description:
        "Comprehensive coverage for weddings, corporate events, and special occasions",
      features: [
        "Multiple photographers",
        "Same-day previews",
        "Online gallery",
      ],
    },
    {
      icon: <PenTool className="w-8 h-8 mb-4" />,
      title: "Creative Direction",
      description:
        "Artistic vision and planning for photoshoots and visual campaigns",
      features: ["Concept development", "Styling advice", "Location scouting"],
    },
    {
      icon: <Lightbulb className="w-8 h-8 mb-4" />,
      title: "Workshops",
      description:
        "Photography education and mentoring for aspiring photographers",
      features: ["Hands-on training", "Portfolio review", "Technical guidance"],
    },
  ];

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

  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.div
            variants={item}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-exo text-[var(--theme-color)] mb-4">
              Our Services
            </h2>
            <p className="text-zinc-400 font-montserrat">
              Professional photography and videography services tailored to your
              needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10 }}
                className="p-6 bg-black rounded-lg border border-zinc-800 hover:border-[var(--theme-color)] transition-all duration-300"
              >
                <div className="text-[var(--theme-color)]">{service.icon}</div>
                <h3 className="text-xl font-exo text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-zinc-400 font-montserrat text-sm mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-zinc-300 text-sm"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 + i * 0.1 }}
                        className="w-1.5 h-1.5 rounded-full bg-[var(--theme-color)] mr-2"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
