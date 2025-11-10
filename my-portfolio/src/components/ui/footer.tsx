'use client';
import { motion } from 'framer-motion';
import FadeIn from '../animations/fade-in';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com', icon: '🐙' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
  { name: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
  { name: 'Email', url: 'mailto:hello@example.com', icon: '✉️' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900/50 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Copyright */}
          <FadeIn direction="right">
            <div className="text-slate-400 text-sm">
              © {currentYear} AlexDev. All rights reserved.
            </div>
          </FadeIn>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <FadeIn key={social.name} direction="left" delay={index * 0.1}>
                <motion.a
                  href={social.url}
                  className="text-2xl hover:text-purple-400 transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              </FadeIn>
            ))}
          </div>

          {/* Made with love */}
          <FadeIn direction="up">
            <div className="text-slate-400 text-sm flex items-center space-x-2">
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-500"
              >
                ❤️
              </motion.span>
              <span>Made For My Perosnal and Insider work</span>
          </div>
          </FadeIn>
        </div>
      </div>
    </footer>
  );
}