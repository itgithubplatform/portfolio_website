'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import FadeIn from '../animations/fade-in';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted! (This is a demo)');
  };

  const socialLinks = [
    { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com', color: 'from-blue-500 to-blue-600' },
    { icon: '📂', label: 'GitHub', href: 'https://github.com', color: 'from-purple-500 to-purple-600' },
    { icon: '✉️', label: 'Email', href: 'mailto:your@email.com', color: 'from-pink-500 to-pink-600' },
    { icon: '🐦', label: 'Twitter', href: 'https://twitter.com', color: 'from-cyan-500 to-cyan-600' },
  ];

  return (
    <section id="contact" className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full" />
            <p className="text-xl text-slate-400 mt-6 max-w-2xl mx-auto">
              Have a project in mind or just want to say hi? Drop me a message!
            </p>
          </motion.div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info & Social Links */}
          <FadeIn delay={0.2}>
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-3xl"
              >
                <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📍</span>
                    <span className="text-slate-300">India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✉️</span>
                    <a href="mailto:your@email.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                      your@email.com
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="text-2xl font-bold mb-6">Find Me On</h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={`glass p-6 rounded-2xl text-center group card-3d`}
                    >
                      <div className="text-4xl mb-2">{social.icon}</div>
                      <div className="font-semibold">{social.label}</div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.4}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-3 text-purple-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-slate-900/50 border-2 border-slate-700/50 rounded-xl focus:outline-none focus:border-purple-500 focus:bg-slate-900 transition-all text-lg"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3 text-purple-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-slate-900/50 border-2 border-slate-700/50 rounded-xl focus:outline-none focus:border-purple-500 focus:bg-slate-900 transition-all text-lg"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3 text-purple-300">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Tell me about your project..."
                    className="w-full px-6 py-4 bg-slate-900/50 border-2 border-slate-700/50 rounded-xl focus:outline-none focus:border-purple-500 focus:bg-slate-900 transition-all resize-none text-lg"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-5 rounded-xl font-bold text-lg bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 glow-purple transition-all"
                >
                  Send Message 🚀
                </motion.button>
              </form>
            </motion.div>
          </FadeIn>
        </div>

        {/* Footer */}
        <FadeIn delay={0.6}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 pt-12 border-t border-slate-800 text-center"
          >
            <p className="text-slate-400 text-lg mb-4">
              © 2024 Benu Gopal Kanjilal. Built with 💜 using Next.js
            </p>
            <p className="text-slate-500 text-sm">
              Designed to inspire. Developed to perform.
            </p>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}

