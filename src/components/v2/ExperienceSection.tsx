import React from "react";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  const experiences = [
    {
      period: "2020 - Present",
      role: "Lead Photographer",
      company: "Luminex Studios",
      description:
        "Leading a team of photographers and managing high-end client projects. Specializing in fashion and commercial photography.",
      achievements: [
        "Increased studio revenue by 150%",
        "Built a client base of luxury brands",
        "Mentored 5 junior photographers",
      ],
    },
    {
      period: "2017 - 2020",
      role: "Senior Photographer",
      company: "Artisan Visuals",
      description:
        "Specialized in wedding photography and corporate events. Developed signature editing style and client experience protocols.",
      achievements: [
        "Shot over 100 weddings",
        "Featured in wedding magazines",
        "5-star rating on all platforms",
      ],
    },
    {
      period: "2015 - 2017",
      role: "Studio Photographer",
      company: "Creative Labs",
      description:
        "Focused on product photography and e-commerce shoots. Mastered studio lighting and post-production workflows.",
      achievements: [
        "Handled 1000+ product shoots",
        "Optimized studio workflow",
        "Trained new team members",
      ],
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-exo text-white mb-6">
            Professional <span className="text-purple-400">Journey</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto font-montserrat">
            A decade of experience in creating visual stories and building
            lasting relationships with clients.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.period}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="grid md:grid-cols-[200px,1fr] gap-6 md:gap-12">
                <div className="text-purple-400 font-exo text-lg">
                  {exp.period}
                </div>
                <div className="bg-purple-950/20 backdrop-blur-sm border border-purple-500/10 rounded-xl p-6 hover:border-purple-400/30 transition-colors">
                  <h3 className="text-white font-exo text-xl mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-purple-400 font-montserrat text-sm mb-4">
                    {exp.company}
                  </p>
                  <p className="text-white/70 font-montserrat mb-6">
                    {exp.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        <span className="text-white/60 font-montserrat">
                          {achievement}
                        </span>
                      </div>
                    ))}
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

export default ExperienceSection;
