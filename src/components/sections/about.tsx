'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../animations/scroll-reveal';

// Animated counter component
function AnimatedCounter({ to, suffix = '' }: { to: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (v) => `${Math.round(v)}${suffix}`);

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, to, { duration: 1.8, ease: [0.22, 1, 0.36, 1] });
            return controls.stop;
        }
    }, [isInView, count, to]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
}

const STATS = [
    { value: 10, suffix: '+', label: 'Projects Built' },
    { value: 3, suffix: '', label: 'Internships' },
    { value: 8.89, suffix: '/10', label: 'CGPA' },
    { value: 100, suffix: '+', label: 'GitHub Commits' },
];

const INFO_CARDS = [
    {
        icon: '🎓', title: 'Education',
        lines: ['B.Tech in CSE(AIML)', 'The Neotia University', 'CGPA: 8.89/10'],
        sub: '2023–27',
    },
    {
        icon: '📍', title: 'Location',
        lines: ['West Bengal, India', 'Mahishadal', 'East Medinipur'],
        sub: '721654',
    },
    {
        icon: '💼', title: 'Experience',
        lines: ['10+ Production Deployments', 'Academic & Personal Projects'],
        sub: '3 Internships Completed',
    },
    {
        icon: '⚡', title: 'Specialization',
        lines: ['AI/ML', 'Deep Learning', 'NLP'],
        sub: 'Full-Stack Development',
    },
];

export default function About() {
    return (
        <section id="about" className="relative py-32 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <ScrollReveal type="blur-in" className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full" />
                </ScrollReveal>

                {/* Stats Row — animated counters */}
                <StaggerContainer staggerDelay={0.12} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {STATS.map((stat) => (
                        <StaggerItem key={stat.label} type="scale-up">
                            <div className="glass p-6 rounded-2xl text-center group hover:border-purple-500/40 transition-all duration-300">
                                <div className="text-3xl md:text-4xl font-black text-gradient mb-1">
                                    <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-slate-400 text-sm">{stat.label}</div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* Main content grid */}
                <div className="grid md:grid-cols-2 gap-12 items-start">

                    {/* Left — Bio */}
                    <ScrollReveal type="fade-left" delay={0.1}>
                        <div className="glass p-8 rounded-3xl">
                            <h3 className="text-3xl font-bold mb-4 text-gradient">
                                Building the Future with AI
                            </h3>
                            <p className="text-lg text-slate-300 leading-relaxed mb-4">
                                I'm a passionate{' '}
                                <span className="text-purple-400 font-semibold">B.Tech 3rd Year student</span>{' '}
                                with a deep interest in leveraging cutting-edge technologies to solve real-world problems.
                            </p>
                            <p className="text-lg text-slate-300 leading-relaxed mb-4">
                                My expertise spans across{' '}
                                <span className="text-blue-400 font-semibold">Artificial Intelligence</span>,{' '}
                                <span className="text-pink-400 font-semibold">Machine Learning</span>, and{' '}
                                <span className="text-cyan-400 font-semibold">Full-Stack Web Development</span>,
                                with a special focus on GenAI applications.
                            </p>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                I'm constantly exploring new technologies, participating in hackathons, and building
                                projects that make a difference. Let's create something amazing together!
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Right — Info cards */}
                    <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 gap-4">
                        {INFO_CARDS.map((card) => (
                            <StaggerItem key={card.title} type="flip-x">
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -4 }}
                                    className="glass p-5 rounded-2xl cursor-default"
                                >
                                    <div className="text-3xl mb-2">{card.icon}</div>
                                    <div className="text-base font-bold text-white mb-2">{card.title}</div>
                                    <div className="text-xs text-slate-300 space-y-0.5">
                                        {card.lines.map((l) => <div key={l}>{l}</div>)}
                                        <div className="text-slate-500 pt-1">{card.sub}</div>
                                    </div>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

                {/* Specialisations */}
                <ScrollReveal type="fade-up" delay={0.1} className="mt-20">
                    <h3 className="text-3xl font-bold text-center mb-8">
                        What I <span className="text-gradient">Specialize</span> In
                    </h3>
                    <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: '🤖', title: 'AI & Machine Learning', desc: 'Deep Learning, Neural Networks, Computer Vision, NLP' },
                            { icon: '💻', title: 'Full-Stack Development', desc: 'React, Next.js, Node.js, MongoDB, PostgreSQL' },
                            { icon: '⚡', title: 'GenAI Applications', desc: 'LLMs, RAG Systems, AI Agents, Prompt Engineering' },
                        ].map((spec) => (
                            <StaggerItem key={spec.title} type="scale-up">
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="glass p-8 rounded-3xl text-center card-3d"
                                >
                                    <div className="text-6xl mb-4">{spec.icon}</div>
                                    <h4 className="text-xl font-bold mb-3">{spec.title}</h4>
                                    <p className="text-slate-400">{spec.desc}</p>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </ScrollReveal>

                {/* Download Resume */}
                <ScrollReveal type="scale-up" delay={0.2} className="text-center mt-12">
                    <motion.a
                        href="https://drive.google.com/file/d/1DqPJ6b5QN_0p_umhpAOtpnyx52lQCkvX/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="glass px-8 py-4 rounded-2xl font-semibold text-lg inline-flex items-center gap-3 hover:border-purple-500/50 transition-all group"
                    >
                        <svg className="w-6 h-6 stroke-slate-300 group-hover:stroke-purple-400 transition-colors" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 17V11L7 13M9 11L11 13M15 11H17M13 15H17M13 7H17M6 3H18C19.1046 3 20 3.89543 20 5V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V5C4 3.89543 4.89543 3 6 3Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Download Resume
                    </motion.a>
                </ScrollReveal>
            </div>
        </section>
    );
}
