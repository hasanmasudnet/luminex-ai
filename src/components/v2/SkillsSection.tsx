import React from "react";
import { motion } from "framer-motion";
import { Camera, Image, Video, Users, PenTool, Lightbulb } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      icon: Camera,
      title: "Photography",
      description:
        "Mastery in capturing moments with perfect composition and lighting",
      level: 95,
    },
    {
      icon: Image,
      title: "Photo Editing",
      description: "Expert in professional photo retouching and color grading",
      level: 90,
    },
    {
      icon: Video,
      title: "Videography",
      description: "Creating cinematic stories through motion and sound",
      level: 85,
    },
    {
      icon: Users,
      title: "Direction",
      description: "Guiding and posing subjects to achieve the perfect shot",
      level: 88,
    },
    {
      icon: PenTool,
      title: "Digital Art",
      description: "Blending photography with digital artistic elements",
      level: 82,
    },
    {
      icon: Lightbulb,
      title: "Lighting",
      description: "Expert knowledge in natural and studio lighting setups",
      level: 92,
    },
  ];

  return (
    <section className="py-20 px-6 bg-purple-950/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-exo text-white mb-6">
            Technical <span className="text-purple-400">Expertise</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto font-montserrat">
            Years of experience have honed these core competencies that define
            my professional practice.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-purple-950/20 backdrop-blur-sm border border-purple-500/10 rounded-xl p-6 group hover:border-purple-400/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-purple-400/10 text-purple-400 group-hover:bg-purple-400 group-hover:text-black transition-colors">
                  <skill.icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-exo text-lg mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-white/70 text-sm font-montserrat mb-4">
                    {skill.description}
                  </p>
                  <div className="relative h-1.5 bg-purple-950/40 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                      className="absolute inset-y-0 left-0 bg-purple-400"
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-white/40 font-montserrat">
                      Proficiency
                    </span>
                    <span className="text-xs text-purple-400 font-montserrat">
                      {skill.level}%
                    </span>
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
