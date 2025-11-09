'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/skills';
import Card from '../ui/card';
import FadeIn from '../animations/fade-in';

export default function Skills() {
  const categories = ['frontend', 'backend', 'ai', 'tools'] as const;

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My <span className="text-gradient">Skills</span>
          </h2>
        </FadeIn>

        {categories.map((category, catIndex) => (
          <div key={category} className="mb-12">
            <FadeIn delay={catIndex * 0.1}>
              <h3 className="text-2xl font-bold mb-6 capitalize">{category}</h3>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <FadeIn key={skill.name} delay={index * 0.1}>
                    <Card>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-4xl">{skill.icon}</span>
                        <div className="flex-1">
                          <h4 className="font-semibold">{skill.name}</h4>
                          <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                            <motion.div
                              className="h-2 rounded-full"
                              style={{ backgroundColor: skill.color }}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.2 }}
                            />
                          </div>
                        </div>
                      </div>
                    </Card>
                  </FadeIn>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
