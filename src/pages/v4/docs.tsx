import React from "react";
import Navigation from "@/components/v4/Navigation";
import { motion } from "framer-motion";

export default function DocsPage() {
  const sections = [
    {
      title: "Getting Started",
      items: [
        { title: "Quick Start Guide", path: "/docs/quickstart" },
        { title: "Installation", path: "/docs/installation" },
        { title: "Basic Concepts", path: "/docs/concepts" },
      ],
    },
    {
      title: "Core Features",
      items: [
        { title: "Photo Management", path: "/docs/photo-management" },
        { title: "Batch Processing", path: "/docs/batch" },
        { title: "AI Enhancement", path: "/docs/ai" },
      ],
    },
    {
      title: "Integration",
      items: [
        { title: "API Reference", path: "/docs/api" },
        { title: "Webhooks", path: "/docs/webhooks" },
        { title: "SDKs", path: "/docs/sdks" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#1a1c18]">
      <Navigation />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl font-mono text-white mb-6">
              Documentation <span className="text-[#e5e926]">/</span>
            </h1>
            <p className="text-white/70 text-lg font-mono mb-12">
              Everything you need to integrate and scale your photography
              workflow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-[#e5e926]/10 p-6"
              >
                <h2 className="text-[#e5e926] font-mono text-xl mb-6">
                  {section.title}
                </h2>
                <ul className="space-y-4">
                  {section.items.map((item, i) => (
                    <li key={i}>
                      <a
                        href={item.path}
                        className="text-white/70 hover:text-[#e5e926] font-mono text-sm flex items-center group"
                      >
                        <span className="text-[#e5e926] mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          /
                        </span>
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
