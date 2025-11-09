'use client';

import { motion } from 'framer-motion';

export default function FloatingElements() {
  const elements = [
    { emoji: '⚛️', x: '10%', y: '20%', duration: 20 },
    { emoji: '🚀', x: '80%', y: '30%', duration: 25 },
    { emoji: '💻', x: '15%', y: '70%', duration: 22 },
    { emoji: '🎨', x: '85%', y: '75%', duration: 18 },
    { emoji: '⚡', x: '50%', y: '50%', duration: 24 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl opacity-20"
          style={{ left: el.x, top: el.y }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {el.emoji}
        </motion.div>
      ))}
    </div>
  );
}
