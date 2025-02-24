import React from "react";
import Navigation from "@/components/v3/Navigation";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="pt-20">
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
              >
                <h2 className="text-3xl font-sans text-white mb-6">
                  Get in <span className="text-amber-400">Touch</span>
                </h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-white font-sans mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-amber-400 focus:outline-none transition-colors font-sans"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-white font-sans mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-amber-400 focus:outline-none transition-colors font-sans"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-white font-sans mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-amber-400 focus:outline-none transition-colors font-sans"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-white font-sans mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-amber-400 focus:outline-none transition-colors font-sans"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-amber-400 text-black font-sans py-4 rounded-lg hover:bg-amber-300 transition-colors flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send size={18} />
                  </motion.button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-sans text-white mb-6">
                    Contact <span className="text-amber-400">Information</span>
                  </h2>
                  <p className="text-white/60 font-sans mb-8">
                    Ready to elevate your product photography? We're here to
                    help bring your vision to life.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-amber-400/10 text-amber-400">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-sans mb-1">Email Us</h3>
                      <p className="text-white/60 font-sans">
                        info@productlens.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-amber-400/10 text-amber-400">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-sans mb-1">Call Us</h3>
                      <p className="text-white/60 font-sans">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-amber-400/10 text-amber-400">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-sans mb-1">Visit Us</h3>
                      <p className="text-white/60 font-sans">
                        123 Studio Street
                        <br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-white font-sans mb-4">Studio Hours</h3>
                  <div className="space-y-2 text-white/60 font-sans">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
