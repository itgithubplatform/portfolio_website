'use client';

import { motion } from 'framer-motion';

const socials = [
  { name: 'GitHub', url: 'https://github.com', icon: '🐙', color: '#333' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼', color: '#0077B5' },
  { name: 'Twitter', url: 'https://twitter.com', icon: '🐦', color: '#1DA1F2' },
  { name: 'Email', url: 'mailto:hello@example.com', icon: '✉️', color: '#EA4335' },
];

export default function SocialIcons() {
  return (
    <div className="flex gap-4">
      {socials.map((social, i) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:scale-110 transition-transform"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
}
