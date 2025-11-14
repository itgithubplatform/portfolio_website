'use client';

import { motion } from 'framer-motion';
import FadeIn from '../animations/fade-in';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/itgithubplatform', icon: '🐙' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/benug25', icon: '💼' },
  { name: 'Twitter', url: 'https://x.com/BenuKanjil55010', icon: '🐦' },
  { name: 'Email', url: 'mailto:benugopal2005@gmail.com', icon: '✉️' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900/50 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <FadeIn direction="right">
            <div className="text-slate-400 text-sm">
              © {currentYear} Benu Gopal Kanjilal. All rights reserved.
            </div>
          </FadeIn>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <FadeIn key={social.name} direction="left" delay={index * 0.1}>
                <motion.a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
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
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 1.4, repeat: Infinity }}
                className="text-red-500"
                aria-hidden
              >
                ❤️
              </motion.span>
              <span>For my personal & insider work</span>
            </div>
          </FadeIn>
        </div>
      </div>
    </footer>
  );
}
