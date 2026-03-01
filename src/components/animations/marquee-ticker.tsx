'use client';

import { motion } from 'framer-motion';

interface MarqueeTickerProps {
    items: Array<{ label: string; icon?: string }>;
    speed?: number; // seconds for one full loop
    direction?: 'left' | 'right';
    className?: string;
}

export default function MarqueeTicker({
    items,
    speed = 30,
    direction = 'left',
    className = '',
}: MarqueeTickerProps) {
    // Duplicate items for seamless loop
    const doubled = [...items, ...items, ...items];

    return (
        <div className={`marquee-wrapper relative overflow-hidden py-5 ${className}`}>
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to right, #050510, transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to left, #050510, transparent)' }} />

            <motion.div
                className="flex gap-6 w-max"
                animate={{
                    x: direction === 'left' ? [0, `-${100 / 3}%`] : [`-${100 / 3}%`, 0],
                }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: 'linear',
                    repeatType: 'loop',
                }}
            >
                {doubled.map((item, i) => (
                    <div
                        key={i}
                        className="marquee-item flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm whitespace-nowrap group hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300 cursor-default"
                    >
                        {item.icon && (
                            <span className="text-lg shrink-0 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </span>
                        )}
                        <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-300">
                            {item.label}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
