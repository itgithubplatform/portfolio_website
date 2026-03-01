'use client';

import { useRef, useEffect, useState } from 'react';
import { Confetti, type ConfettiRef } from '@/components/ui/confetti';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingConfetti() {
    const confettiRef = useRef<ConfettiRef>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fire confetti immediately on mount
        const timer = setTimeout(() => {
            confettiRef.current?.fire({
                particleCount: 100,
                spread: 70,
                origin: { x: 0.5, y: 0.5 },
            });
        }, 100);

        // Hide loading screen after animation
        const hideTimer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => {
            clearTimeout(timer);
            clearTimeout(hideTimer);
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950"
                >
                    <div className="relative flex flex-col items-center justify-center">
                        {/* Animated Welcome Text */}
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-center"
                        >
                            <h1 className="text-6xl md:text-8xl font-bold mb-4">
                                <span className="text-gradient">Welcome</span>
                            </h1>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full mx-auto"
                            />
                        </motion.div>

                        {/* Loading Spinner */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="mt-8"
                        >
                            <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
                        </motion.div>
                    </div>

                    {/* Confetti Effect */}
                    <Confetti
                        ref={confettiRef}
                        className="absolute inset-0 pointer-events-none"
                        options={{
                            particleCount: 150,
                            spread: 90,
                            colors: ['#9333ea', '#ec4899', '#3b82f6', '#22d3ee', '#a855f7'],
                        }}
                        manualstart={true}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
