'use client';

import { motion } from 'framer-motion';
import FadeIn from '../animations/fade-in';

export default function Testimonials() {
    const testimonials = [
        {
            name: 'Dr. Rajesh Kumar',
            role: 'Professor, Department of AI & ML',
            image: '👨‍🏫',
            quote: 'Benu has shown exceptional aptitude in machine learning and AI projects. His innovative approach to problem-solving and dedication to learning make him stand out.',
            rating: 5,
        },
        {
            name: 'Sarah Johnson',
            role: 'Senior Developer, Tech Corp',
            image: '👩‍💼',
            quote: 'Working with Benu on a full-stack project was a great experience. His code quality, attention to detail, and ability to grasp complex concepts quickly are impressive.',
            rating: 5,
        },
        {
            name: 'Amit Sharma',
            role: 'Hackathon Mentor',
            image: '👨‍💻',
            quote: 'Benu\'s GenAI project at the hackathon was outstanding. The creativity and technical execution were top-notch. He has a bright future ahead!',
            rating: 5,
        },
    ];

    return (
        <section id="testimonials" className="relative py-32 px-4">
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
                            What People <span className="text-gradient">Say</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full" />
                        <p className="text-xl text-slate-400 mt-6 max-w-2xl mx-auto">
                            Don't just take my word for it - here's what mentors and collaborators have to say
                        </p>
                    </motion.div>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <FadeIn key={testimonial.name} delay={0.2 + index * 0.1}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="relative"
                            >
                                {/* Quote Mark */}
                                <div className="absolute -top-4 -left-4 text-7xl text-purple-500/20 z-0">
                                    "
                                </div>

                                <div className="glass p-8 rounded-3xl card-3d h-full relative z-10">
                                    {/* Avatar */}
                                    <div className="flex items-center mb-6">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-3xl mr-4 glow-purple">
                                            {testimonial.image}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">{testimonial.name}</h4>
                                            <p className="text-sm text-slate-400">{testimonial.role}</p>
                                        </div>
                                    </div>

                                    {/* Stars */}
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <motion.span
                                                key={i}
                                                initial={{ opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.4 + index * 0.1 + i * 0.05 }}
                                                className="text-yellow-400 text-xl"
                                            >
                                                ⭐
                                            </motion.span>
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <p className="text-slate-300 leading-relaxed italic">
                                        "{testimonial.quote}"
                                    </p>
                                </div>
                            </motion.div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
