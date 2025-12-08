'use client';

import { useEffect, useRef } from 'react';

export default function SimpleAnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Store canvas dimensions for particle class
        let canvasWidth = canvas.width;
        let canvasHeight = canvas.height;

        // Update dimensions on resize
        const originalResize = resizeCanvas;
        const resizeCanvasWithUpdate = () => {
            originalResize();
            canvasWidth = canvas.width;
            canvasHeight = canvas.height;
        };
        window.removeEventListener('resize', resizeCanvas);
        window.addEventListener('resize', resizeCanvasWithUpdate);

        // Particle class
        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            color: string;
            opacity: number;

            constructor() {
                this.x = Math.random() * canvasWidth;
                this.y = Math.random() * canvasHeight;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;

                const colors = ['#8b5cf6', '#ec4899', '#3b82f6', '#06b6d4'];
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.opacity = Math.random() * 0.5 + 0.3;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvasWidth) this.x = 0;
                if (this.x < 0) this.x = canvasWidth;
                if (this.y > canvasHeight) this.y = 0;
                if (this.y < 0) this.y = canvasHeight;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1;
            }
        }

        // Create particles
        const particles: Particle[] = [];
        const particleCount = 150;

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Animation loop
        let animationFrameId: number;
        const animate = () => {
            ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });

            // Draw connections
            particles.forEach((a, i) => {
                particles.slice(i + 1).forEach((b) => {
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.strokeStyle = a.color;
                        ctx.globalAlpha = (1 - distance / 100) * 0.2;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                        ctx.globalAlpha = 1;
                    }
                });
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvasWithUpdate);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10"
            style={{ background: 'linear-gradient(to bottom right, #0f172a, #1e1b4b, #0f172a)' }}
        />
    );
}
