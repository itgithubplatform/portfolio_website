'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { certifications, Certificate } from '@/data/certifications';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../animations/scroll-reveal';
import { BorderBeam } from '../ui/border-beam';

/* ─── palette tokens ─────────────────────────────────────── */
const TEAL = 'rgba(20, 184, 166, VAL)';
const EMERALD = 'rgba(16, 185, 129, VAL)';
const GOLD = 'rgba(245, 158, 11, VAL)';

function t(a: number) { return TEAL.replace('VAL', String(a)); }
function e(a: number) { return EMERALD.replace('VAL', String(a)); }
function g(a: number) { return GOLD.replace('VAL', String(a)); }

/* ─── Stats ──────────────────────────────────────────────── */
const STATS = [
    { icon: '🏆', value: '2', label: 'Certifications', color: g(1) },
    { icon: '⏱️', value: '30+', label: 'Training Hours', color: t(1) },
    { icon: '🏛️', value: '1', label: 'Institutions', color: e(1) },
    { icon: '✅', value: '100%', label: 'Completed', color: g(1) },
];

/* ─── Root section ───────────────────────────────────────── */
export default function Certifications() {
    const [showAll, setShowAll] = useState(false);
    const visibleCerts = showAll ? certifications : certifications.slice(0, 2);

    return (
        <section id="certifications" className="relative py-32 px-4 overflow-hidden">

            {/* Ambient background orbs */}
            <div className="absolute inset-0 pointer-events-none select-none">
                <div
                    className="absolute w-[600px] h-[600px] rounded-full opacity-[0.07] blur-3xl top-1/4 -left-40"
                    style={{ background: 'radial-gradient(circle, #14b8a6, transparent 70%)' }}
                />
                <div
                    className="absolute w-[500px] h-[500px] rounded-full opacity-[0.06] blur-3xl bottom-1/4 -right-40"
                    style={{ background: 'radial-gradient(circle, #f59e0b, transparent 70%)' }}
                />
                <div
                    className="absolute w-[400px] h-[400px] rounded-full opacity-[0.05] blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ background: 'radial-gradient(circle, #10b981, transparent 70%)' }}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* ── Section header ── */}
                <ScrollReveal type="blur-in" className="text-center mb-16">

                    {/* pill badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-bold tracking-widest uppercase"
                        style={{
                            background: `linear-gradient(135deg, ${t(0.15)}, ${g(0.15)})`,
                            border: `1px solid ${t(0.35)}`,
                            color: '#2dd4bf',
                        }}
                    >
                        <span>🎓</span> Professional Development
                    </motion.div>

                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        Certificates &amp;{' '}
                        <span
                            className="bg-clip-text text-transparent"
                            style={{
                                backgroundImage: 'linear-gradient(135deg, #2dd4bf 0%, #10b981 45%, #f59e0b 100%)',
                                backgroundSize: '200% 200%',
                                animation: 'gradient-shift 4s ease infinite',
                            }}
                        >
                            Training
                        </span>
                    </h2>

                    <div
                        className="w-24 h-1 mx-auto rounded-full mb-6"
                        style={{ background: 'linear-gradient(90deg, #14b8a6, #10b981, #f59e0b)' }}
                    />

                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Professional certifications and intensive training programs in cutting-edge technologies
                    </p>
                </ScrollReveal>

                {/* ── Stats row ── */}
                <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {STATS.map((stat) => (
                        <StaggerItem key={stat.label} type="scale-up">
                            <StatCard stat={stat} />
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* ── Cert grid ── */}
                <AnimatePresence>
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {visibleCerts.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                layout
                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <CertCard cert={cert} index={index} />
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* ── Coming soon placeholder when certs < 4 ── */}
                {certifications.length < 3 && (
                    <ScrollReveal type="fade-up" delay={0.3} className="mt-6">
                        <div
                            className="rounded-3xl border-2 border-dashed p-8 text-center"
                            style={{ borderColor: t(0.2), background: t(0.03) }}
                        >
                            <div className="text-4xl mb-3">🪪</div>
                            <p className="text-slate-500 text-sm">More certificates coming soon…</p>
                        </div>
                    </ScrollReveal>
                )}

                {/* ── View All button ── */}
                {certifications.length > 2 && (
                    <ScrollReveal type="scale-up" delay={0.25} className="text-center mt-12">
                        <motion.button
                            onClick={() => setShowAll(!showAll)}
                            whileHover={{ scale: 1.06, y: -4 }}
                            whileTap={{ scale: 0.96 }}
                            className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-semibold text-base text-white relative overflow-hidden"
                            style={{
                                background: `linear-gradient(135deg, ${t(0.8)}, ${e(0.8)}, ${g(0.8)})`,
                                backgroundSize: '200% 200%',
                                animation: 'gradient-shift 4s ease infinite',
                                boxShadow: `0 0 24px ${t(0.4)}, 0 0 48px ${t(0.15)}`,
                            }}
                        >
                            <span className="text-xl">🏅</span>
                            {showAll
                                ? `Show Less`
                                : `View All Certificates (${certifications.length})`}
                            <motion.span
                                animate={{ rotate: showAll ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-lg"
                            >
                                ↓
                            </motion.span>
                        </motion.button>
                    </ScrollReveal>
                )}
            </div>
        </section>
    );
}

/* ─── StatCard ───────────────────────────────────────────── */
function StatCard({ stat }: { stat: typeof STATS[number] }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <motion.div
            ref={ref}
            whileHover={{ y: -6, scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="relative p-6 rounded-2xl text-center group overflow-hidden"
            style={{
                background: 'rgba(15,23,42,0.6)',
                border: `1px solid ${t(0.18)}`,
                backdropFilter: 'blur(20px)',
            }}
        >
            {/* hover glow */}
            <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${t(0.08)}, transparent 70%)` }}
            />
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-3xl font-black mb-1" style={{ color: stat.color }}>
                {stat.value}
            </div>
            <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
        </motion.div>
    );
}

/* ─── CertCard ───────────────────────────────────────────── */
function CertCard({ cert, index }: { cert: Certificate; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const accentColor = index % 2 === 0 ? t(0.4) : g(0.4);
    const accentGlow = index % 2 === 0 ? t(0.15) : g(0.15);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50, scale: 0.95, filter: 'blur(6px)' }}
            animate={isInView
                ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }
                : { opacity: 0, y: 50, scale: 0.95, filter: 'blur(6px)' }
            }
            transition={{ duration: 0.7, delay: (index % 2) * 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8 }}
            className="relative p-8 rounded-3xl h-full group overflow-hidden card-3d"
            style={{
                background: 'rgba(8, 20, 35, 0.75)',
                border: `1px solid ${accentColor}`,
                backdropFilter: 'blur(24px)',
                boxShadow: `0 8px 32px rgba(0,0,0,0.35)`,
            }}
        >
            {/* hover radial glow top */}
            <motion.div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${accentGlow}, transparent 60%)` }}
            />

            {/* corner accent stripe */}
            <div
                className="absolute top-0 left-0 w-1 h-full rounded-l-3xl"
                style={{ background: `linear-gradient(180deg, ${accentColor}, transparent)` }}
            />

            {/* ── Header ── */}
            <div className="flex items-start gap-4 mb-5 relative z-10">
                {/* icon */}
                <motion.div
                    whileHover={{ scale: 1.12, rotate: 6 }}
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.iconBg} flex items-center justify-center text-2xl shrink-0`}
                    style={{ boxShadow: `0 8px 24px ${accentColor}` }}
                >
                    {cert.icon}
                </motion.div>

                <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white leading-tight mb-1">
                        {cert.title}
                    </h3>
                    {/* type badge */}
                    <span
                        className="inline-block text-xs font-bold px-3 py-0.5 rounded-full"
                        style={{
                            background: index % 2 === 0 ? t(0.18) : g(0.18),
                            color: index % 2 === 0 ? '#2dd4bf' : '#fbbf24',
                            border: `1px solid ${index % 2 === 0 ? t(0.35) : g(0.35)}`,
                        }}
                    >
                        {cert.type}
                    </span>
                </div>
            </div>

            {/* description */}
            <p className="text-slate-300 text-sm leading-relaxed mb-5 relative z-10">
                {cert.description}
            </p>

            {/* Institution */}
            <div className="flex items-center gap-2 mb-2 relative z-10">
                <span className="text-sm text-slate-500">🏛️</span>
                <span className="text-sm text-slate-400">{cert.institution}</span>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2 mb-6 relative z-10">
                <span className="text-sm text-slate-500">📅</span>
                <span className="text-sm text-slate-400">{cert.date}</span>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between relative z-10">
                {cert.earned && (
                    <span className="flex items-center gap-2 text-sm font-semibold" style={{ color: '#10b981' }}>
                        <span
                            className="w-2 h-2 rounded-full animate-pulse"
                            style={{ background: '#10b981', boxShadow: `0 0 6px #10b981` }}
                        />
                        Certificate Earned
                    </span>
                )}

                {cert.credentialUrl && (
                    <motion.a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.06, y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold text-white"
                        style={{
                            background: `linear-gradient(135deg, ${index % 2 === 0 ? '#14b8a6, #059669' : '#f59e0b, #d97706'})`,
                            boxShadow: `0 4px 14px ${accentColor}`,
                        }}
                    >
                        <span>🔗</span> View Certificate
                    </motion.a>
                )}
            </div>

            <BorderBeam
                duration={14}
                size={140}
                colorFrom={index % 2 === 0 ? '#14b8a6' : '#f59e0b'}
                colorTo={index % 2 === 0 ? '#10b981' : '#14b8a6'}
            />
        </motion.div>
    );
}
