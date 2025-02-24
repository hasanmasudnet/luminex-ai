import React from "react";
import Navigation from "@/components/Navigation";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-5xl font-exo text-[var(--theme-color)] mb-8 text-center">
            Get In Touch
          </h1>
          <div className="max-w-2xl mx-auto bg-zinc-900/50 backdrop-blur-xl p-8 rounded-xl border border-zinc-800">
            <form className="space-y-6">
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
                  className="w-full bg-black border border-zinc-800 rounded-lg p-3 text-white focus:border-[var(--theme-color)] focus:outline-none transition-colors"
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
                  className="w-full bg-black border border-zinc-800 rounded-lg p-3 text-white focus:border-[var(--theme-color)] focus:outline-none transition-colors"
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
                  className="w-full bg-black border border-zinc-800 rounded-lg p-3 text-white focus:border-[var(--theme-color)] focus:outline-none transition-colors"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[var(--theme-color)] text-black font-exo py-3 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
