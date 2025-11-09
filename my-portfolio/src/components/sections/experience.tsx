'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/data/experience';
import Card from '../ui/card';
import FadeIn from '../animations/fade-in';

export default function Experience() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </FadeIn>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <FadeIn key={exp.id} delay={index * 0.2}>
              <Card>
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{exp.logo}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold">{exp.position}</h3>
                    <p className="text-purple-400 mb-2">{exp.company}</p>
                    <p className="text-slate-400 text-sm mb-4">{exp.period}</p>
                    
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <span className="text-purple-400 mt-1">▹</span>
                          <span className="text-slate-300">{item}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
