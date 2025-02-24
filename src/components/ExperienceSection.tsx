import { motion } from "framer-motion";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Lead Photographer",
      company: "Luminex Studios",
      period: "2020 - Present",
      description:
        "Leading a team of photographers, specializing in high-end wedding and commercial photography.",
    },
    {
      role: "Senior Photographer",
      company: "Creative Visuals",
      period: "2017 - 2020",
      description:
        "Managed portrait and fashion photography projects for major brands and magazines.",
    },
    {
      role: "Photography Instructor",
      company: "Digital Arts Academy",
      period: "2015 - 2017",
      description:
        "Taught advanced photography techniques and post-processing workflows to aspiring photographers.",
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
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-exo text-[var(--theme-color)] mb-12 text-center"
        >
          Professional Journey
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={item}
              className="border-l-2 border-[var(--theme-color)] pl-6 relative"
              whileHover={{ x: 10 }}
            >
              <div className="absolute w-3 h-3 bg-[var(--theme-color)] rounded-full -left-[7px] top-2" />
              <h3 className="text-xl font-exo text-white mb-1">{exp.role}</h3>
              <p className="text-[var(--theme-color)] font-montserrat text-sm mb-2">
                {exp.company} | {exp.period}
              </p>
              <p className="text-zinc-400 font-montserrat">{exp.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
