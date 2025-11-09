'use client';

import { motion } from 'framer-motion';

const techs = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Tailwind', icon: '🎨' },
  { name: 'MongoDB', icon: '🍃' },
];

export default function TechIcons() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {techs.map((tech, i) => (
        <motion.div
          key={tech.name}
          className="text-4xl"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ scale: 1.2, rotate: 10 }}
        >
          {tech.icon}
        </motion.div>
      ))}
    </div>
  );
}
