'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        // Aurora blobs
        const blobs = [
            { x: width * 0.2, y: height * 0.3, r: 380, vx: 0.18, vy: 0.1, color: 'rgba(120, 60, 220, 0.18)' },
            { x: width * 0.75, y: height * 0.6, r: 420, vx: -0.14, vy: 0.12, color: 'rgba(56, 120, 255, 0.15)' },
            { x: width * 0.5, y: height * 0.1, r: 350, vx: 0.1, vy: 0.15, color: 'rgba(220, 60, 150, 0.13)' },
            { x: width * 0.1, y: height * 0.8, r: 300, vx: 0.2, vy: -0.1, color: 'rgba(0, 200, 180, 0.1)' },
            { x: width * 0.85, y: height * 0.15, r: 280, vx: -0.12, vy: 0.18, color: 'rgba(90, 60, 255, 0.14)' },
        ];

        let animId: number;

        function draw() {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, width, height);

            // Draw each blob as a soft radial gradient
            for (const blob of blobs) {
                const grad = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.r);
                grad.addColorStop(0, blob.color);
                grad.addColorStop(1, 'rgba(0,0,0,0)');
                ctx.beginPath();
                ctx.arc(blob.x, blob.y, blob.r, 0, Math.PI * 2);
                ctx.fillStyle = grad;
                ctx.fill();

                // Move blob
                blob.x += blob.vx;
                blob.y += blob.vy;

                // Bounce off edges
                if (blob.x < -blob.r) blob.x = width + blob.r;
                if (blob.x > width + blob.r) blob.x = -blob.r;
                if (blob.y < -blob.r) blob.y = height + blob.r;
                if (blob.y > height + blob.r) blob.y = -blob.r;
            }

            animId = requestAnimationFrame(draw);
        }

        draw();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Deep dark base */}
            <div className="absolute inset-0 bg-[#050510]" />

            {/* Subtle grid mesh */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(148,100,245,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,100,245,0.8) 1px, transparent 1px)
          `,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Noise texture overlay for depth */}
            <div
                className="absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    backgroundSize: '200px 200px',
                }}
            />

            {/* Moving aurora canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ mixBlendMode: 'screen' }} />

            {/* Static glows for immediate visual impact */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-purple-700/10 blur-[120px] animate-aurora-1" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-700/10 blur-[100px] animate-aurora-2" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-pink-700/8 blur-[120px] animate-aurora-3" />
        </div>
    );
}
