'use client';

import { motion } from 'framer-motion';
import FadeIn from '../animations/fade-in';

export default function Experience() {
    const experiences = [
        {
            id: 1,
            logo: '🚀',
            position: 'ML Engineering Intern',
            company: 'Tech Innovations Lab',
            period: 'Jun 2024 - Present',
            description: [
                'Developed machine learning models for predictive analytics',
                'Implemented neural networks using TensorFlow and PyTorch',
                'Optimized model performance achieving 95% accuracy',
            ],
            technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn'],
            color: 'from-purple-500 to-pink-500',
        },
        {
            id: 2,
            logo: '💡',
            position: 'Full-Stack Developer',
            company: 'StartupHub',
            period: 'Jan 2024 - May 2024',
            description: [
                'Built responsive web applications using Next.js and React',
                'Designed RESTful APIs with Node.js and Express',
                'Integrated MongoDB for efficient data management',
            ],
            technologies: ['Next.js', 'React', 'Node.js', 'MongoDB'],
            color: 'from-blue-500 to-cyan-500',
        },
        {
            id: 3,
            logo: '🏆',
            position: 'Winner - AI Hackathon',
            company: 'TechFest 2024',
            period: 'Mar 2024',
            description: [
                'Built an AI-powered chatbot using GenAI and LangChain',
                'Implemented RAG system for context-aware responses',
                'Won 1st place among 50+ teams',
            ],
            technologies: ['LangChain', 'OpenAI', 'Python', 'FastAPI'],
            color: 'from-pink-500 to-orange-500',
        },
    ];

    return (
        <section id="experience" className="relative py-32 px-4">
            <div className="max-w-6xl mx-auto">
                <FadeIn>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl md:text-6xl font-bold mb-6">
                            My <span className="text-gradient">Journey</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full" />
                        <p className="text-xl text-slate-400 mt-6 max-w-2xl mx-auto">
                            Internships, hackathons, and hands-on experience building impactful projects
                        </p>
                    </motion.div>
                </FadeIn>

                {/* Timeline */}
                <div className="relative">
                    {/* Center Line */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <FadeIn key={exp.id} delay={0.2 + index * 0.2}>
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                    className={`relative md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                        } items-center gap-8`}
                                >
                                    {/* Timeline Dot */}
                                    <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 pulse-glow z-10" />

                                    {/* Content */}
                                    <div className="md:w-[calc(50%-2rem)]">
                                        <motion.div
                                            whileHover={{ scale: 1.02, y: -5 }}
                                            className="glass p-8 rounded-3xl card-3d"
                                        >
                                            {/* Header */}
                                            <div className="flex items-start gap-4 mb-6">
                                                <motion.div
                                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-3xl glow-purple`}
                                                >
                                                    {exp.logo}
                                                </motion.div>
                                                <div className="flex-1">
                                                    <h3 className="text-2xl font-bold mb-1">{exp.position}</h3>
                                                    <p className="text-purple-400 font-semibold mb-1">
                                                        {exp.company}
                                                    </p>
                                                    <p className="text-sm text-slate-400">{exp.period}</p>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <ul className="space-y-3 mb-6">
                                                {exp.description.map((item, i) => (
                                                    <motion.li
                                                        key={i}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: 0.3 + index * 0.1 + i * 0.05 }}
                                                        className="flex items-start gap-3"
                                                    >
                                                        <span className="text-purple-400 mt-1.5 text-lg">▹</span>
                                                        <span className="text-slate-300 leading-relaxed">{item}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>

                                            {/* Technologies */}
                                            <div className="flex flex-wrap gap-2">
                                                {exp.technologies.map((tech, i) => (
                                                    <motion.span
                                                        key={tech}
                                                        initial={{ opacity: 0, scale: 0 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: 0.4 + index * 0.1 + i * 0.05 }}
                                                        whileHover={{ scale: 1.1 }}
                                                        className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-300 rounded-full text-sm font-medium"
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Spacer for alternating layout */}
                                    <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                                </motion.div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

