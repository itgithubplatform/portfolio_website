'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../animations/scroll-reveal';

export default function Experience() {
    const experiences = [
        {
            id: 1,
            logo: '💼',
            position: 'Full Stack Web Developer Intern',
            company: 'Unified Mentor',
            period: 'Jul 2024',
            description: [
                'Developed full-stack web applications using modern technologies',
                'Built responsive user interfaces with React and Next.js',
                'Designed and implemented RESTful APIs with Node.js and Express',
                'Integrated databases and implemented authentication systems',
            ],
            technologies: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB'],
            color: 'from-blue-500 to-cyan-500',
            accent: 'rgba(59, 130, 246, 0.4)',
        },
        {
            id: 2,
            logo: '🔐',
            position: 'Cyber Security Intern',
            company: 'DataSpace Academy',
            period: 'Jun 2024 - Jul 2024',
            description: [
                'Conducted security assessments and vulnerability analysis',
                'Implemented security best practices and protocols',
                'Performed penetration testing and security audits',
                'Developed security documentation and incident response procedures',
            ],
            technologies: ['Kali Linux', 'Wireshark', 'Python', 'Network Security', 'Ethical Hacking'],
            color: 'from-purple-500 to-pink-500',
            accent: 'rgba(147, 51, 234, 0.4)',
        },
        {
            id: 3,
            logo: '🏆',
            position: 'Top 10 Finalist',
            company: 'Google Cloud GenAI Exchange Hackathon',
            period: '2024',
            description: [
                'Built CareerSathi - An AI-powered skill gap analyzer and feedback provider',
                'Leveraged Google Cloud AI services and GenAI for intelligent career guidance',
                'Implemented personalized skill assessment and career path recommendations',
                'Ranked among Top 10 teams out of hundreds of participants',
            ],
            technologies: ['Google Cloud', 'GenAI', 'Python', 'LangChain', 'FastAPI', 'React'],
            color: 'from-pink-500 to-orange-500',
            accent: 'rgba(236, 72, 153, 0.4)',
        },
    ];

    // Ref for the whole timeline section
    const sectionRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const lineInView = useInView(lineRef, { once: true, amount: 0 });

    // Scroll-driven timeline line height
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start center', 'end center'],
    });
    const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <section id="experience" ref={sectionRef} className="relative py-32 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <ScrollReveal type="blur-in" className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        Internships &amp; <span className="text-gradient">Hackathons</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full" />
                    <p className="text-xl text-slate-400 mt-6 max-w-2xl mx-auto">
                        Real-world experience through internships and competitive hackathons
                    </p>
                </ScrollReveal>

                {/* Timeline */}
                <div className="relative" ref={lineRef}>

                    {/* Animated Timeline Line (scroll-driven) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-px bg-slate-800/60 overflow-hidden rounded-full">
                        <motion.div
                            className="w-full bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 rounded-full"
                            style={{ height: lineHeight, originY: 0 }}
                        />
                    </div>

                    <div className="space-y-16">
                        {experiences.map((exp, index) => (
                            <ExperienceCard
                                key={exp.id}
                                exp={exp}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ExperienceCard({ exp, index }: {
    exp: {
        id: number; logo: string; position: string; company: string; period: string;
        description: string[]; technologies: string[]; color: string; accent: string;
    };
    index: number;
}) {
    const cardRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(cardRef, { once: true, amount: 0.25 });
    const isLeft = index % 2 === 0;

    return (
        <div
            ref={cardRef}
            className={`relative md:flex ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
        >
            {/* Animated Timeline Dot */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 300 }}
                className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full items-center justify-center text-lg"
                style={{
                    background: `radial-gradient(circle, ${exp.accent} 0%, rgba(0,0,0,0.8) 100%)`,
                    border: `2px solid ${exp.accent}`,
                    boxShadow: `0 0 20px ${exp.accent}, 0 0 40px ${exp.accent.replace('0.4', '0.2')}`,
                }}
            >
                {exp.logo}
            </motion.div>

            {/* Card */}
            <div className="md:w-[calc(50%-2.5rem)]">
                <motion.div
                    initial={{ opacity: 0, x: isLeft ? -60 : 60, filter: 'blur(8px)' }}
                    animate={isInView
                        ? { opacity: 1, x: 0, filter: 'blur(0px)' }
                        : { opacity: 0, x: isLeft ? -60 : 60, filter: 'blur(8px)' }
                    }
                    transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -6, scale: 1.015 }}
                    className="glass p-8 rounded-3xl card-3d group relative overflow-hidden"
                    style={{
                        borderColor: isInView ? exp.accent.replace('0.4', '0.25') : 'transparent',
                        transition: 'border-color 0.6s ease',
                    }}
                >
                    {/* Card glow on hover */}
                    <div
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{ background: `radial-gradient(circle at 50% 0%, ${exp.accent.replace('0.4', '0.08')}, transparent 70%)` }}
                    />

                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6 relative z-10">
                        <motion.div
                            whileHover={{ scale: 1.15, rotate: 8 }}
                            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-2xl shrink-0`}
                            style={{ boxShadow: `0 8px 24px ${exp.accent}` }}
                        >
                            {exp.logo}
                        </motion.div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold mb-1 text-white">{exp.position}</h3>
                            <p className={`font-semibold mb-1 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                                {exp.company}
                            </p>
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                <p className="text-sm text-slate-400">{exp.period}</p>
                            </div>
                        </div>
                    </div>

                    {/* Description with stagger */}
                    <StaggerContainer staggerDelay={0.08} className="space-y-2.5 mb-6 relative z-10">
                        {exp.description.map((item) => (
                            <StaggerItem key={item} type="fade-left">
                                <div className="flex items-start gap-3">
                                    <span className="text-purple-400 mt-1 text-sm shrink-0">▹</span>
                                    <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>

                    {/* Tech badges */}
                    <StaggerContainer staggerDelay={0.05} className="flex flex-wrap gap-2 relative z-10">
                        {exp.technologies.map((tech) => (
                            <StaggerItem key={tech} type="scale-up">
                                <motion.span
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className={`px-3 py-1.5 bg-gradient-to-r ${exp.color} bg-opacity-20 rounded-full text-xs font-semibold text-white border border-white/10`}
                                    style={{ background: `${exp.accent.replace('0.4', '0.15')}` }}
                                >
                                    {tech}
                                </motion.span>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </motion.div>
            </div>

            {/* Spacer */}
            <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
        </div>
    );
}
