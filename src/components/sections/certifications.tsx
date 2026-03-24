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

/* ─── accent palette per card index ─────────────────────── */
const ACCENTS = [
    { border: 'rgba(20,184,166,VAL)',  glow: 'rgba(20,184,166,VAL)',  from: '#14b8a6', to: '#059669', label: '#2dd4bf' },
    { border: 'rgba(245,158,11,VAL)', glow: 'rgba(245,158,11,VAL)', from: '#f59e0b', to: '#d97706', label: '#fbbf24' },
    { border: 'rgba(99,102,241,VAL)', glow: 'rgba(99,102,241,VAL)', from: '#6366f1', to: '#4f46e5', label: '#a5b4fc' },
    { border: 'rgba(236,72,153,VAL)', glow: 'rgba(236,72,153,VAL)', from: '#ec4899', to: '#db2777', label: '#f9a8d4' },
];
function accent(i: number, a: number) {
    const c = ACCENTS[i % ACCENTS.length];
    return {
        border: c.border.replace('VAL', String(a)),
        glow:   c.glow.replace('VAL', String(a)),
        from:   c.from,
        to:     c.to,
        label:  c.label,
    };
}

/* ─── Stats ──────────────────────────────────────────────── */
const STATS = [
    { icon: '🏆', value: '6', label: 'Certifications', color: g(1) },
    { icon: '⏱️', value: '30+', label: 'Training Hours', color: t(1) },
    { icon: '🏛️', value: '3+', label: 'Institutions', color: e(1) },
    { icon: '✅', value: '100%', label: 'Completed', color: g(1) },
];

/* ─── Root section ───────────────────────────────────────── */
export default function Certifications() {
    const [showAll, setShowAll] = useState(false);
    const visibleCerts = showAll ? certifications : certifications.slice(0, 4);
    const hasMore = !showAll && certifications.length > 4;

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
                    style={{ background: 'radial-gradient(circle, #6366f1, transparent 70%)' }}
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

                        {/* ── Coming Soon card ── always shown at the end of grid */}
                        <motion.div
                            layout
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.5, delay: visibleCerts.length * 0.1 + 0.05 }}
                            className="md:col-span-2"
                        >
                            <ComingSoonCard />
                        </motion.div>
                    </motion.div>
                </AnimatePresence>

                {/* ── Show More button — only visible while there are hidden certs ── */}
                {hasMore && (
                    <ScrollReveal type="scale-up" delay={0.25} className="text-center mt-12">
                        <motion.button
                            onClick={() => setShowAll(true)}
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
                            Show More Certificates ({certifications.length - 4} more)
                            <motion.span
                                animate={{ y: [0, 4, 0] }}
                                transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
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

    const a = accent(index, 0.4);
    const aGlow = accent(index, 0.15);
    const aBadge = accent(index, 0.18);
    const aBadgeBorder = accent(index, 0.35);

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
                border: `1px solid ${a.border}`,
                backdropFilter: 'blur(24px)',
                boxShadow: `0 8px 32px rgba(0,0,0,0.35)`,
            }}
        >
            {/* hover radial glow top */}
            <motion.div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${aGlow.glow}, transparent 60%)` }}
            />

            {/* corner accent stripe */}
            <div
                className="absolute top-0 left-0 w-1 h-full rounded-l-3xl"
                style={{ background: `linear-gradient(180deg, ${a.border}, transparent)` }}
            />

            {/* ── Header ── */}
            <div className="flex items-start gap-4 mb-5 relative z-10">
                {/* icon */}
                <motion.div
                    whileHover={{ scale: 1.12, rotate: 6 }}
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.iconBg} flex items-center justify-center text-2xl shrink-0`}
                    style={{ boxShadow: `0 8px 24px ${a.border}` }}
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
                            background: aBadge.glow,
                            color: a.label,
                            border: `1px solid ${aBadgeBorder.border}`,
                        }}
                    >
                        {cert.type}
                    </span>
                </div>
            </div>

            {/* description */}
            <p className="text-slate-300 text-sm leading-relaxed mb-4 relative z-10">
                {cert.description}
            </p>

            {/* Institution */}
            <div className="flex items-center gap-2 mb-2 relative z-10">
                <span className="text-sm text-slate-500">🏛️</span>
                <span className="text-sm text-slate-400">{cert.institution}</span>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2 mb-4 relative z-10">
                <span className="text-sm text-slate-500">📅</span>
                <span className="text-sm text-slate-400">{cert.date}</span>
            </div>

            {/* Certificate Code (if any) */}
            {cert.certificateCode && (
                <div className="flex items-center gap-2 mb-4 relative z-10">
                    <span className="text-sm text-slate-500">🪪</span>
                    <span className="font-mono text-xs text-slate-500 tracking-wide">{cert.certificateCode}</span>
                </div>
            )}

            {/* ── Status row ── */}
            <div className="flex items-center gap-2 relative z-10 mt-2">
                {cert.earned && (
                    <span className="flex items-center gap-2 text-xs font-semibold" style={{ color: '#10b981' }}>
                        <span
                            className="w-2 h-2 rounded-full animate-pulse"
                            style={{ background: '#10b981', boxShadow: `0 0 6px #10b981` }}
                        />
                        Certificate Earned
                    </span>
                )}
            </div>

            {/* ── View Certificate strip ── */}
            <div
                className="relative z-10 mt-5 pt-4"
                style={{ borderTop: `1px solid ${a.border.replace('0.4)', '0.15)')}` }}
            >
                {cert.credentialUrl && cert.credentialUrl !== '#' ? (
                    <motion.a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="group/btn relative w-full flex items-center justify-center gap-3 px-6 py-3 rounded-2xl font-semibold text-sm text-white overflow-hidden"
                        style={{
                            background: `linear-gradient(135deg, ${a.from}cc, ${a.to}cc)`,
                            border: `1px solid ${a.border}`,
                            boxShadow: `0 0 18px ${a.border.replace('0.4)', '0.25)')}`,
                        }}
                    >
                        {/* shimmer on hover */}
                        <motion.span
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                background: 'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.15) 50%, transparent 65%)',
                                backgroundSize: '200% 100%',
                            }}
                            initial={{ backgroundPositionX: '200%' }}
                            whileHover={{ backgroundPositionX: '-200%' }}
                            transition={{ duration: 0.5 }}
                        />
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        View Certificate
                        <span className="ml-auto text-xs opacity-60 font-normal">Google Drive ↗</span>
                    </motion.a>
                ) : (
                    <div
                        className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-sm font-medium"
                        style={{
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px dashed rgba(255,255,255,0.1)',
                            color: 'rgba(148,163,184,0.5)',
                        }}
                    >
                        <span>🔒</span>
                        Certificate Link Coming Soon
                    </div>
                )}
            </div>

            <BorderBeam
                duration={14}
                size={140}
                colorFrom={a.from}
                colorTo={a.to}
            />
        </motion.div>
    );
}

/* ─── ComingSoonCard ─────────────────────────────────────── */
function ComingSoonCard() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const dots = [
        { icon: '🎖️', label: 'Next Achievement' },
        { icon: '📜', label: 'In Progress' },
        { icon: '🌟', label: 'Loading...' },
    ];

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl overflow-hidden group"
            style={{
                border: '1px dashed rgba(20,184,166,0.3)',
                background: 'linear-gradient(135deg, rgba(20,184,166,0.04), rgba(99,102,241,0.04), rgba(245,158,11,0.04))',
                backdropFilter: 'blur(16px)',
            }}
        >
            {/* animated shimmer sweep */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'linear-gradient(105deg, transparent 40%, rgba(20,184,166,0.07) 50%, transparent 60%)',
                    backgroundSize: '200% 100%',
                }}
                animate={{ backgroundPositionX: ['200%', '-200%'] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'linear' }}
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-10 py-9">
                {/* left: text */}
                <div className="text-center md:text-left">
                    <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
                        className="text-5xl mb-3"
                    >
                        🚀
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-1">More Certificates on the Way!</h3>
                    <p className="text-slate-400 text-sm max-w-xs">
                        I&apos;m continuously upskilling. New achievements will be added here as they&apos;re earned.
                    </p>
                </div>

                {/* right: placeholder dots */}
                <div className="flex items-center gap-4">
                    {dots.map((d, i) => (
                        <motion.div
                            key={d.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.2 + i * 0.12 }}
                            whileHover={{ y: -5, scale: 1.08 }}
                            className="flex flex-col items-center gap-2 px-5 py-4 rounded-2xl cursor-default"
                            style={{
                                background: 'rgba(15,23,42,0.5)',
                                border: '1px dashed rgba(20,184,166,0.2)',
                            }}
                        >
                            <motion.span
                                className="text-3xl"
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 3 + i * 0.5, ease: 'easeInOut' }}
                            >
                                {d.icon}
                            </motion.span>
                            <span className="text-xs text-slate-500 font-medium whitespace-nowrap">{d.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* corner pulse dots */}
            {[0, 1].map(i => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                        top: i === 0 ? 16 : 'auto',
                        bottom: i === 1 ? 16 : 'auto',
                        right: 16,
                        background: i === 0 ? '#14b8a6' : '#f59e0b',
                    }}
                    animate={{ opacity: [1, 0.2, 1], scale: [1, 1.5, 1] }}
                    transition={{ repeat: Infinity, duration: 2 + i * 0.6, ease: 'easeInOut' }}
                />
            ))}
        </motion.div>
    );
}
