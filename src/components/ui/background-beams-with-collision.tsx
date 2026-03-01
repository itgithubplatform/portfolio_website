'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState } from 'react';

export const BackgroundBeamsWithCollision = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [beams, setBeams] = useState<Array<{ id: number; left: string; animationDuration: string; delay: string }>>([]);

    useEffect(() => {
        // Generate random beams
        const beamCount = 15;
        const generatedBeams = Array.from({ length: beamCount }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 3 + 5}s`,
            delay: `${Math.random() * 5}s`,
        }));
        setBeams(generatedBeams);
    }, []);

    return (
        <div
            ref={containerRef}
            className={cn(
                'relative w-full overflow-hidden',
                className
            )}
        >
            {/* Beams */}
            <div className="absolute inset-0 pointer-events-none">
                {beams.map((beam) => (
                    <div
                        key={beam.id}
                        className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent animate-beam"
                        style={{
                            left: beam.left,
                            animationDuration: beam.animationDuration,
                            animationDelay: beam.delay,
                        }}
                    />
                ))}
            </div>

            {/* Collision particles */}
            <div className="absolute inset-0 pointer-events-none">
                {beams.slice(0, 8).map((beam, idx) => (
                    <div
                        key={`particle-${beam.id}`}
                        className="absolute animate-particle"
                        style={{
                            left: beam.left,
                            top: `${(idx % 3) * 33}%`,
                            animationDelay: `${parseFloat(beam.delay) + 1}s`,
                            animationDuration: beam.animationDuration,
                        }}
                    >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-sm" />
                    </div>
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};
