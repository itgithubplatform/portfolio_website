'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      className={cn(
        'bg-white/10 dark:bg-slate-800/50 backdrop-blur-lg border border-white/20 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl',
        hover && 'hover:bg-white/20 dark:hover:bg-slate-800/70 transition-all duration-300',
        className
      )}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}