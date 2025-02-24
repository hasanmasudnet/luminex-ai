import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-exo text-white mb-6">
            Let's <span className="text-purple-400">Connect</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto font-montserrat">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's create something amazing together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-purple-950/20 backdrop-blur-sm border border-purple-500/10 rounded-2xl p-8"
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-white font-montserrat mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-purple-950/30 border border-purple-500/20 rounded-lg p-3 text-white focus:border-purple-400 focus:outline-none transition-colors font-montserrat"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-white font-montserrat mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-purple-950/30 border border-purple-500/20 rounded-lg p-3 text-white focus:border-purple-400 focus:outline-none transition-colors font-montserrat"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-white font-montserrat mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full bg-purple-950/30 border border-purple-500/20 rounded-lg p-3 text-white focus:border-purple-400 focus:outline-none transition-colors font-montserrat"
                placeholder="Project Inquiry"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-white font-montserrat mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full bg-purple-950/30 border border-purple-500/20 rounded-lg p-3 text-white focus:border-purple-400 focus:outline-none transition-colors font-montserrat"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-purple-400 text-black font-exo py-4 rounded-lg hover:bg-purple-300 transition-colors flex items-center justify-center gap-2"
            >
              Send Message
              <Send size={18} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
