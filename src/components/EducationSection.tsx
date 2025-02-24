import { motion } from "framer-motion";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Fine Arts",
      major: "Photography",
      school: "Art Institute of Design",
      year: "2015",
      icon: "🎓",
    },
    {
      degree: "Professional Certification",
      major: "Digital Photography",
      school: "National Photography Association",
      year: "2016",
      icon: "📜",
    },
    {
      degree: "Master Class",
      major: "Advanced Lighting Techniques",
      school: "International Photography Academy",
      year: "2017",
      icon: "💡",
    },
    {
      degree: "Certification",
      major: "Adobe Creative Suite",
      school: "Adobe Certified Professional",
      year: "2018",
      icon: "🎨",
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
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-exo text-[var(--theme-color)] mb-12"
        >
          Education & Certifications
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg bg-black border border-zinc-800 hover:border-[var(--theme-color)] transition-colors duration-300"
            >
              <div className="text-4xl mb-4">{edu.icon}</div>
              <h3 className="text-xl font-exo text-white mb-2">{edu.degree}</h3>
              <p className="text-[var(--theme-color)] font-montserrat text-sm mb-1">
                {edu.major}
              </p>
              <p className="text-zinc-400 font-montserrat text-sm">
                {edu.school}
              </p>
              <p className="text-zinc-500 font-montserrat text-sm mt-2">
                {edu.year}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
