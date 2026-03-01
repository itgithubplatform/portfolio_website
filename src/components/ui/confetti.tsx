'use client';

import type { ReactNode } from 'react';
import React, {
    createContext,
    forwardRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    useMemo,
    useRef,
    useState,
} from 'react';

import { cn } from '@/lib/utils';

type ConfettiOptions = {
    particleCount?: number;
    angle?: number;
    spread?: number;
    startVelocity?: number;
    decay?: number;
    gravity?: number;
    drift?: number;
    flat?: boolean;
    ticks?: number;
    origin?: { x: number; y: number };
    colors?: string[];
    shapes?: ('square' | 'circle')[];
    scalar?: number;
    zIndex?: number;
    disableForReducedMotion?: boolean;
};

export interface ConfettiRef {
    fire: (options?: ConfettiOptions) => void;
}

interface ConfettiProps extends React.HTMLAttributes<HTMLCanvasElement> {
    options?: ConfettiOptions;
    globalOptions?: ConfettiOptions;
    manualstart?: boolean;
}

const ConfettiContext = createContext<ConfettiOptions>({});

const Confetti = forwardRef<ConfettiRef, ConfettiProps>((props, ref) => {
    const {
        options,
        globalOptions = {
            resize: true,
            useWorker: true,
        } as ConfettiOptions,
        manualstart = false,
        children,
        className,
        ...rest
    } = props;
    const instanceRef = useRef<any>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const fire = useCallback(
        (opts = {}) => {
            if (instanceRef.current) {
                instanceRef.current({
                    ...globalOptions,
                    ...options,
                    ...opts,
                });
            }
        },
        [globalOptions, options]
    );

    useImperativeHandle(ref, () => ({
        fire,
    }));

    useEffect(() => {
        if (!canvasRef.current) return;

        const loadConfetti = async () => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            // Simple confetti implementation
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            const particles: any[] = [];
            const particleCount = options?.particleCount || 50;
            const colors = options?.colors || ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

            class Particle {
                x: number;
                y: number;
                size: number;
                speedX: number;
                speedY: number;
                color: string;
                gravity: number;

                constructor() {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height - canvas.height;
                    this.size = Math.random() * 5 + 5;
                    this.speedX = Math.random() * 3 - 1.5;
                    this.speedY = Math.random() * -3 - 3;
                    this.color = colors[Math.floor(Math.random() * colors.length)];
                    this.gravity = 0.1;
                }

                update() {
                    this.x += this.speedX;
                    this.y += this.speedY;
                    this.speedY += this.gravity;

                    if (this.y > canvas.height) {
                        this.y = -10;
                        this.x = Math.random() * canvas.width;
                        this.speedY = Math.random() * -3 - 3;
                    }
                }

                draw() {
                    if (!ctx) return;
                    ctx.fillStyle = this.color;
                    ctx.fillRect(this.x, this.y, this.size, this.size);
                }
            }

            instanceRef.current = (opts: ConfettiOptions = {}) => {
                particles.length = 0;
                const count = opts.particleCount || particleCount;
                for (let i = 0; i < count; i++) {
                    particles.push(new Particle());
                }
            };

            const animate = () => {
                if (!ctx || !canvas) return;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                particles.forEach((particle) => {
                    particle.update();
                    particle.draw();
                });
                requestAnimationFrame(animate);
            };

            animate();

            if (!manualstart) {
                fire();
            }
        };

        loadConfetti();
    }, [fire, manualstart, options]);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const setCanvasSize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        return () => {
            window.removeEventListener('resize', setCanvasSize);
        };
    }, []);

    return (
        <ConfettiContext.Provider value={options || {}}>
            <canvas ref={canvasRef} className={cn(className)} {...rest} />
        </ConfettiContext.Provider>
    );
});

Confetti.displayName = 'Confetti';

export { Confetti };
