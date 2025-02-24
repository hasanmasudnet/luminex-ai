import { motion } from "framer-motion";
import { Camera, Image, Lightbulb, Palette, Laptop, Plane } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      skill: "Portrait Photography",
      level: 95,
      icon: Camera,
      description: "Capturing personalities and emotions",
    },
    {
      skill: "Landscape Photography",
      level: 90,
      icon: Image,
      description: "Creating stunning natural vistas",
    },
    {
      skill: "Adobe Lightroom",
      level: 85,
      icon: Palette,
      description: "Professional color grading",
    },
    {
      skill: "Adobe Photoshop",
      level: 80,
      icon: Laptop,
      description: "Advanced photo manipulation",
    },
    {
      skill: "Studio Lighting",
      level: 85,
      icon: Lightbulb,
      description: "Expert lighting techniques",
    },
    {
      skill: "Drone Photography",
      level: 75,
      icon: Plane,
      description: "Aerial photography and videography",
    },
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-exo text-[var(--theme-color)] mb-4">
            Technical Expertise
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto font-montserrat">
            Mastering the art of visual storytelling through cutting-edge
            technology and techniques
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.skill}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-zinc-900/50 backdrop-blur-xl rounded-xl p-6 border border-zinc-800 hover:border-[var(--theme-color)] transition-all duration-300 h-full">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-[var(--theme-color)]/10 text-[var(--theme-color)]">
                    <skill.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-exo text-lg mb-1">
                      {skill.skill}
                    </h3>
                    <p className="text-zinc-400 text-sm mb-3">
                      {skill.description}
                    </p>
                    <div className="relative h-1.5 bg-zinc-800/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-[var(--theme-color)] to-[var(--theme-color)]/70"
                      />
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-xs text-zinc-500 font-montserrat">
                        Proficiency
                      </span>
                      <span className="text-xs text-[var(--theme-color)] font-montserrat">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
