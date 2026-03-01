'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import { useInView } from 'framer-motion';

type RevealType = 'fade-up' | 'fade-left' | 'fade-right' | 'scale-up' | 'flip-x' | 'blur-in' | 'slide-up';

interface ScrollRevealProps {
    children: ReactNode;
    type?: RevealType;
    delay?: number;
    duration?: number;
    className?: string;
    once?: boolean;
    threshold?: number;
}

const variants: Record<RevealType, Variants> = {
    'fade-up': {
        hidden: { opacity: 0, y: 60, filter: 'blur(4px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
    },
    'fade-left': {
        hidden: { opacity: 0, x: -60, filter: 'blur(4px)' },
        visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
    },
    'fade-right': {
        hidden: { opacity: 0, x: 60, filter: 'blur(4px)' },
        visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
    },
    'scale-up': {
        hidden: { opacity: 0, scale: 0.75, filter: 'blur(6px)' },
        visible: { opacity: 1, scale: 1, filter: 'blur(0px)' },
    },
    'flip-x': {
        hidden: { opacity: 0, rotateX: 40, y: 30 },
        visible: { opacity: 1, rotateX: 0, y: 0 },
    },
    'blur-in': {
        hidden: { opacity: 0, filter: 'blur(20px)', scale: 1.05 },
        visible: { opacity: 1, filter: 'blur(0px)', scale: 1 },
    },
    'slide-up': {
        hidden: { opacity: 0, y: 80, clipPath: 'inset(100% 0 0 0)' },
        visible: { opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)' },
    },
};

export default function ScrollReveal({
    children,
    type = 'fade-up',
    delay = 0,
    duration = 0.65,
    className = '',
    once = true,
    threshold = 0.15,
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, amount: threshold });

    return (
        <motion.div
            ref={ref}
            variants={variants[type]}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={className}
            style={{ perspective: 1000 }}
        >
            {children}
        </motion.div>
    );
}

// Stagger container for groups of animated children
interface StaggerContainerProps {
    children: ReactNode;
    staggerDelay?: number;
    className?: string;
    once?: boolean;
}

export function StaggerContainer({ children, staggerDelay = 0.1, className = '', once = true }: StaggerContainerProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, amount: 0.1 });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                        delayChildren: 0.05,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Individual child item for stagger groups
interface StaggerItemProps {
    children: ReactNode;
    type?: RevealType;
    className?: string;
}

export function StaggerItem({ children, type = 'fade-up', className = '' }: StaggerItemProps) {
    return (
        <motion.div
            variants={variants[type]}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
