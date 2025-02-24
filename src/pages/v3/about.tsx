import React from "react";
import Navigation from "@/components/v3/Navigation";
import { motion } from "framer-motion";

export default function AboutPage() {
  const stats = [
    { label: "Products Shot", value: "500+" },
    { label: "Happy Clients", value: "50+" },
    { label: "Years Experience", value: "10+" },
    { label: "Client Satisfaction", value: "99%" },
  ];

  const team = [
    {
      name: "John Smith",
      role: "Lead Photographer",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop",
      bio: "Specializing in product photography with over 10 years of experience in the industry.",
    },
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2080&auto=format&fit=crop",
      bio: "Expert in visual storytelling and brand development through product photography.",
    },
    {
      name: "Michael Chen",
      role: "Post-Production Lead",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2080&auto=format&fit=crop",
      bio: "Master retoucher with expertise in color grading and image enhancement.",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-sans text-white mb-6">
                  About <span className="text-amber-400">ProductLens</span>
                </h1>
                <div className="space-y-4 text-white/70 font-sans">
                  <p>
                    We are a team of passionate photographers and creative
                    professionals dedicated to making your products look their
                    absolute best.
                  </p>
                  <p>
                    With over a decade of experience in product photography,
                    we've developed a unique approach that combines technical
                    excellence with creative vision.
                  </p>
                  <p>
                    Our mission is to help brands tell their story through
                    exceptional product photography that drives results.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e"
                    alt="Studio setup"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-amber-500/10" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <p className="text-3xl font-sans text-amber-400 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-white/60 font-sans">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-sans text-white mb-4">
                Meet Our <span className="text-amber-400">Team</span>
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto font-sans">
                The creative professionals behind our exceptional product
                photography
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 group hover:border-amber-400/30 transition-all duration-300"
                >
                  <div className="aspect-square rounded-lg overflow-hidden mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-white text-xl font-sans mb-1">
                    {member.name}
                  </h3>
                  <p className="text-amber-400 text-sm font-sans mb-4">
                    {member.role}
                  </p>
                  <p className="text-white/60 text-sm font-sans">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
