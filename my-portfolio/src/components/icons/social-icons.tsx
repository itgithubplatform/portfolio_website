'use client';

import { motion } from 'framer-motion';

const socials = [
  { name: 'GitHub', url: 'https://github.com/itgithubplatform', icon: '🐙', bg: 'from-gray-700 to-gray-900' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/benug25', icon: '💼', bg: 'from-blue-600 to-blue-800' },
  { name: 'Twitter', url: 'https://x.com/BenuKanjil55010', icon: '🐦', bg: 'from-sky-500 to-blue-600' },
  { name: 'Email', url: 'mailto:benugopal2005@gmail.com', icon: '✉️', bg: 'from-red-500 to-pink-600' },
];

export default function SocialIcons() {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {socials.map((social, i) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative flex flex-col items-center gap-2 p-4 rounded-2xl bg-gradient-to-br ${social.bg} shadow-lg hover:shadow-2xl transition-all duration-300`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15, type: 'spring' }}
          whileHover={{ y: -8, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="text-5xl"
            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
            transition={{ duration: 0.5 }}
          >
            {social.icon}
          </motion.div>
          <span className="text-sm font-semibold text-white opacity-90 group-hover:opacity-100 transition-opacity">
            {social.name}
          </span>
          <motion.div
            className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 transition-opacity"
          />
        </motion.a>
      ))}
    </div>
  );
}
