'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/skills';
import FadeIn from '../animations/fade-in';

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

  // Calculate average for each category
  const getCategoryAverage = (categoryKey: string) => {
    const categorySkills = skills.filter(skill => skill.category === categoryKey);
    if (categorySkills.length === 0) return 0;
    const sum = categorySkills.reduce((acc, skill) => acc + skill.level, 0);
    return Math.round(sum / categorySkills.length);
  };

  return (
    <section id="skills" className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full" />
            <p className="text-xl text-slate-400 mt-6 max-w-2xl mx-auto">
              A comprehensive toolkit across programming, development, AI/ML, and cloud technologies
            </p>
          </motion.div>
        </FadeIn>

        <div className="space-y-16">
          {categories.map((category, catIndex) => {
            const categorySkills = skills.filter(skill => skill.category === category.key);
            const avgLevel = getCategoryAverage(category.key);

            return (
              <div key={category.key}>
                <FadeIn delay={catIndex * 0.1}>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
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
                  </motion.div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {categorySkills.map((skill, index) => (
                    <FadeIn key={skill.name} delay={catIndex * 0.1 + index * 0.05}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIndex * 0.1 + index * 0.05 }}
                        whileHover={{ y: -5, scale: 1.01 }}
                        className="glass p-6 rounded-2xl"
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
                          <span className="text-sm font-bold text-slate-300">{skill.level}%</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="relative w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{
                              background: `linear-gradient(90deg, ${skill.color}, ${skill.color})`,
                            }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1.2,
                              delay: catIndex * 0.1 + index * 0.05 + 0.2,
                              ease: 'easeOut',
                            }}
                          >
                            {/* Shimmer effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              animate={{
                                x: ['-100%', '200%'],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 1,
                                ease: 'linear',
                              }}
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
