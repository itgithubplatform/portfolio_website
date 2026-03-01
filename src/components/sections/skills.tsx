'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '@/data/skills';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../animations/scroll-reveal';

export default function Skills() {
  const categories = [
    { key: 'programming', label: 'Programming Languages', icon: '🅲', color: 'from-purple-500 to-pink-500' },
    { key: 'frontend', label: 'Frontend Development', icon: '🎨', color: 'from-blue-500 to-cyan-500' },
    { key: 'backend', label: 'Backend Development', icon: '⚙️', color: 'from-pink-500 to-orange-500' },
    { key: 'ai', label: 'AI / ML & Deep Learning', icon: '🤖', color: 'from-purple-600 to-blue-600' },
    { key: 'database', label: 'Databases', icon: '🗄️', color: 'from-green-500 to-teal-500' },
    { key: 'cloud', label: 'Cloud & DevOps', icon: '☁️', color: 'from-cyan-500 to-blue-500' },
    { key: 'tools', label: 'Tools & Productivity', icon: '🛠️', color: 'from-orange-500 to-red-500' },
    { key: 'specialized', label: 'Specialized Skills', icon: '🎯', color: 'from-indigo-500 to-purple-500' },
  ] as const;

  const getCategoryAverage = (categoryKey: string) => {
    const categorySkills = skills.filter(skill => skill.category === categoryKey);
    if (categorySkills.length === 0) return 0;
    return Math.round(categorySkills.reduce((acc, s) => acc + s.level, 0) / categorySkills.length);
  };

  return (
    <section id="skills" className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <ScrollReveal type="blur-in" className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full" />
          <p className="text-xl text-slate-400 mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit across programming, development, AI/ML, and cloud technologies
          </p>
        </ScrollReveal>

        <div className="space-y-16">
          {categories.map((category, catIndex) => {
            const categorySkills = skills.filter(s => s.category === category.key);
            const avgLevel = getCategoryAverage(category.key);
            if (categorySkills.length === 0) return null;

            return (
              <SkillCategory
                key={category.key}
                category={category}
                categorySkills={categorySkills}
                avgLevel={avgLevel}
                catIndex={catIndex}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SkillCategory({
  category, categorySkills, avgLevel, catIndex,
}: {
  category: { key: string; label: string; icon: string; color: string };
  categorySkills: typeof skills;
  avgLevel: number;
  catIndex: number;
}) {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.5 });

  return (
    <div>
      {/* Category Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, x: catIndex % 2 === 0 ? -50 : 50, filter: 'blur(6px)' }}
        animate={headerInView
          ? { opacity: 1, x: 0, filter: 'blur(0px)' }
          : { opacity: 0, x: catIndex % 2 === 0 ? -50 : 50, filter: 'blur(6px)' }
        }
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-between mb-8"
      >
        <div className="flex items-center gap-4">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl glow-purple`}>
            {category.icon}
          </div>
          <div>
            <h3 className="text-3xl font-bold">{category.label}</h3>
            <p className="text-slate-400 text-sm mt-1">
              {categorySkills.length} Skills • {avgLevel}% Avg
            </p>
          </div>
        </div>

        {/* Average ring */}
        <div className="hidden sm:flex items-center gap-2">
          <div className="relative w-12 h-12">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
              <motion.circle
                cx="18" cy="18" r="14" fill="none"
                stroke="url(#ring-grad)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 14}`}
                initial={{ strokeDashoffset: 2 * Math.PI * 14 }}
                animate={headerInView ? { strokeDashoffset: 2 * Math.PI * 14 * (1 - avgLevel / 100) } : {}}
                transition={{ duration: 1.4, delay: 0.3, ease: 'easeOut' }}
              />
              <defs>
                <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
              {avgLevel}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Skill Cards with stagger */}
      <StaggerContainer staggerDelay={0.07} className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {categorySkills.map((skill) => (
          <StaggerItem key={skill.name} type="fade-up">
            <SkillCard skill={skill} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}

function SkillCard({ skill }: { skill: typeof skills[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -5, scale: 1.01 }}
      className="glass p-6 rounded-2xl group"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <motion.span
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="text-3xl"
          >
            {skill.icon}
          </motion.span>
          <h4 className="font-semibold text-lg text-white">{skill.name}</h4>
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="text-sm font-bold text-slate-300"
        >
          {skill.level}%
        </motion.span>
      </div>

      {/* Progress Bar */}
      <div className="relative w-full h-2 bg-slate-800/80 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full relative"
          style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)` }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.3, delay: 0.25, ease: 'easeOut' }}
        >
          {/* Shimmer */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 1.5, ease: 'linear' }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
