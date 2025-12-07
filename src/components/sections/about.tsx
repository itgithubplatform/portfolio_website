'use client';

import { motion } from 'framer-motion';
import FadeIn from '../animations/fade-in';

export default function About() {
    return (
        <section id="about" className="relative py-32 px-4">
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
                            About <span className="text-gradient">Me</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full" />
                    </motion.div>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Description */}
                    <FadeIn delay={0.2}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <div className="glass p-8 rounded-3xl">
                                <h3 className="text-3xl font-bold mb-4 text-gradient">
                                    Building the Future with AI
                                </h3>
                                <p className="text-lg text-slate-300 leading-relaxed mb-4">
                                    I'm a passionate <span className="text-purple-400 font-semibold">B.Tech 3rd Year student</span> with
                                    a deep interest in leveraging cutting-edge technologies to solve real-world problems.
                                </p>
                                <p className="text-lg text-slate-300 leading-relaxed mb-4">
                                    My expertise spans across <span className="text-blue-400 font-semibold">Artificial Intelligence</span>,
                                    {' '}<span className="text-pink-400 font-semibold">Machine Learning</span>, and
                                    {' '}<span className="text-cyan-400 font-semibold">Full-Stack Web Development</span>,
                                    with a special focus on GenAI applications.
                                </p>
                                <p className="text-lg text-slate-300 leading-relaxed">
                                    I'm constantly exploring new technologies, participating in hackathons, and building
                                    projects that make a difference. Let's create something amazing together!
                                </p>
                            </div>
                        </motion.div>
                    </FadeIn>

                    {/* Right: Stats Grid */}
                    <FadeIn delay={0.4}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="grid grid-cols-2 gap-6"
                        >
                            {[
                                { icon: '🎓', title: 'Education', value: 'B.Tech CSE', desc: '3rd Year' },
                                { icon: '💼', title: 'Experience', value: '3+ Years', desc: 'Coding' },
                                { icon: '🏆', title: 'Achievements', value: '10+', desc: 'Certifications' },
                                { icon: '🚀', title: 'Projects', value: '20+', desc: 'Completed' },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.title}
                                    initial={{ scale: 0, rotate: -10 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                                    whileHover={{ scale: 1.05, rotate: 2 }}
                                    className="gradient-border p-6 text-center hover-3d"
                                >
                                    <div className="text-5xl mb-3">{stat.icon}</div>
                                    <div className="text-2xl font-bold text-gradient mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-slate-400 font-medium">{stat.title}</div>
                                    <div className="text-sm text-slate-500">{stat.desc}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </FadeIn>
                </div>

                {/* Specializations */}
                <FadeIn delay={0.6}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-16"
                    >
                        <h3 className="text-3xl font-bold text-center mb-8">
                            What I <span className="text-gradient">Specialize</span> In
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: '🤖',
                                    title: 'AI & Machine Learning',
                                    desc: 'Deep Learning, Neural Networks, Computer Vision, NLP',
                                },
                                {
                                    icon: '💻',
                                    title: 'Full-Stack Development',
                                    desc: 'React, Next.js, Node.js, MongoDB, PostgreSQL',
                                },
                                {
                                    icon: '⚡',
                                    title: 'GenAI Applications',
                                    desc: 'LLMs, RAG Systems, AI Agents, Prompt Engineering',
                                },
                            ].map((spec, index) => (
                                <motion.div
                                    key={spec.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.7 + index * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    className="glass p-8 rounded-3xl text-center card-3d"
                                >
                                    <div className="text-6xl mb-4">{spec.icon}</div>
                                    <h4 className="text-xl font-bold mb-3">{spec.title}</h4>
                                    <p className="text-slate-400">{spec.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </FadeIn>
            </div>
        </section>
    );
}
