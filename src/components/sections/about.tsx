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

                    {/* Right: Info Grid */}
                    <FadeIn delay={0.4}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="grid grid-cols-2 gap-6"
                        >
                            {/* Education */}
                            <motion.div
                                initial={{ scale: 0, rotate: -10 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, type: 'spring' }}
                                whileHover={{ scale: 1.05 }}
                                className="glass p-6 rounded-2xl"
                            >
                                <div className="text-4xl mb-3">🎓</div>
                                <div className="text-lg font-bold text-white mb-3">Education</div>
                                <div className="text-sm text-slate-300 space-y-1">
                                    <div>B.Tech in CSE(AIML)</div>
                                    <div>The Neotia University</div>
                                    <div>CGPA: 8.89/10</div>
                                    <div className="text-slate-400">2023-27</div>
                                </div>
                            </motion.div>

                            {/* Location */}
                            <motion.div
                                initial={{ scale: 0, rotate: -10 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6, type: 'spring' }}
                                whileHover={{ scale: 1.05 }}
                                className="glass p-6 rounded-2xl"
                            >
                                <div className="text-4xl mb-3">📍</div>
                                <div className="text-lg font-bold text-white mb-3">Location</div>
                                <div className="text-sm text-slate-300 space-y-1">
                                    <div>West Bengal, India</div>
                                    <div>Mahishadal</div>
                                    <div>East Medinipur</div>
                                    <div className="text-slate-400">721654</div>
                                </div>
                            </motion.div>

                            {/* Experience */}
                            <motion.div
                                initial={{ scale: 0, rotate: -10 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7, type: 'spring' }}
                                whileHover={{ scale: 1.05 }}
                                className="glass p-6 rounded-2xl"
                            >
                                <div className="text-4xl mb-3">💼</div>
                                <div className="text-lg font-bold text-white mb-3">Experience</div>
                                <div className="text-sm text-slate-300 space-y-1">
                                    <div>10+ Production Deployments</div>
                                    <div>Academic and Personal Projects</div>
                                    <div className="text-slate-400">3 Internships Completed</div>
                                </div>
                            </motion.div>

                            {/* Specialization */}
                            <motion.div
                                initial={{ scale: 0, rotate: -10 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8, type: 'spring' }}
                                whileHover={{ scale: 1.05 }}
                                className="glass p-6 rounded-2xl"
                            >
                                <div className="text-4xl mb-3">⚡</div>
                                <div className="text-lg font-bold text-white mb-3">Specialization</div>
                                <div className="text-sm text-slate-300 space-y-1">
                                    <div>AI/ML</div>
                                    <div>Deep Learning</div>
                                    <div>NLP</div>
                                    <div className="text-slate-400">Full-Stack Development</div>
                                </div>
                            </motion.div>
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

                {/* Download Resume Button */}
                <FadeIn delay={0.8}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mt-12"
                    >
                        <motion.a
                            href="https://drive.google.com/file/d/1DqPJ6b5QN_0p_umhpAOtpnyx52lQCkvX/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="glass px-8 py-4 rounded-2xl font-semibold text-lg inline-flex items-center gap-3 hover:border-purple-500/50 transition-all"
                        >
                            <svg className="w-6 h-6 fill-slate-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                            </svg>
                            Download Resume
                        </motion.a>
                    </motion.div>
                </FadeIn>
            </div>
        </section>
    );
}
