import React from "react";
import Navigation from "@/components/v4/Navigation";
import { motion } from "framer-motion";

export default function CompanyPage() {
  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
    {
      name: "Mike Johnson",
      role: "Head of Technology",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
    },
    {
      name: "Elena Rodriguez",
      role: "Creative Director",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=elena",
    },
    {
      name: "David Kim",
      role: "Lead Engineer",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
    },
  ];

  const stats = [
    { label: "Photos Processed", value: "10M+" },
    { label: "Enterprise Clients", value: "500+" },
    { label: "Countries", value: "50+" },
    { label: "Team Members", value: "100+" },
  ];

  return (
    <div className="min-h-screen bg-[#1a1c18]">
      <Navigation />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-20">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mb-20"
          >
            <h1 className="text-5xl font-mono text-white mb-6">
              Our <span className="text-[#e5e926]">Company /</span>
            </h1>
            <p className="text-white/70 text-lg font-mono mb-12">
              We're on a mission to revolutionize enterprise photography through
              technology and innovation
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-white/5 backdrop-blur-sm border border-[#e5e926]/10"
              >
                <div className="text-[#e5e926] font-mono text-3xl mb-2">
                  {stat.value}
                </div>
                <div className="text-white/70 font-mono text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-mono text-white mb-12">
              Leadership <span className="text-[#e5e926]">/</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-[#e5e926]/10 p-6 text-center group hover:border-[#e5e926]/30 transition-all duration-300"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#e5e926]/10"
                  />
                  <h3 className="text-[#e5e926] font-mono text-lg mb-1">
                    {member.name}
                  </h3>
                  <p className="text-white/70 font-mono text-sm">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
