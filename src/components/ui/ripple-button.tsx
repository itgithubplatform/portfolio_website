'use client';

import React, { useState, useRef, MouseEvent } from 'react';
import { cn } from '@/lib/utils';

interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    rippleColor?: string;
    className?: string;
    as?: 'button' | 'a';
    href?: string;
    target?: string;
    rel?: string;
}

interface Ripple {
    x: number;
    y: number;
    size: number;
    id: number;
}

export function RippleButton({
    children,
    rippleColor = '#ADD8E6',
    className,
    onClick,
    as = 'button',
    href,
    target,
    rel,
    ...props
}: RippleButtonProps) {
    const [ripples, setRipples] = useState<Ripple[]>([]);
    const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

    const createRipple = (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        const button = buttonRef.current;
        if (!button) return;

        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        const newRipple: Ripple = {
            x,
            y,
            size,
            id: Date.now(),
        };

        setRipples((prev) => [...prev, newRipple]);

        // Remove ripple after animation
        setTimeout(() => {
            setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
        }, 600);

        // Call original onClick if provided
        if (onClick) {
            onClick(event as MouseEvent<HTMLButtonElement>);
        }
    };

    const commonProps = {
        ref: buttonRef as any,
        onClick: createRipple,
        className: cn(
            'relative overflow-hidden',
            className
        ),
    };

    const rippleElements = (
        <>
            {ripples.map((ripple) => (
                <span
                    key={ripple.id}
                    className="absolute rounded-full animate-ripple pointer-events-none"
                    style={{
                        left: ripple.x,
                        top: ripple.y,
                        width: ripple.size,
                        height: ripple.size,
                        backgroundColor: rippleColor,
                        opacity: 0.6,
                    }}
                />
            ))}
        </>
    );

    if (as === 'a') {
        return (
            <a
                {...commonProps}
                href={href}
                target={target}
                rel={rel}
            >
                {children}
                {rippleElements}
            </a>
        );
    }

    return (
        <button {...commonProps} {...props}>
            {children}
            {rippleElements}
        </button>
    );
}
