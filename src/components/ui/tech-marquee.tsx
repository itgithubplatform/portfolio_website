'use client';

import MarqueeTicker from '../animations/marquee-ticker';

const ROW_1 = [
    { label: 'Python', icon: '🐍' },
    { label: 'TypeScript', icon: '📘' },
    { label: 'React', icon: '⚛️' },
    { label: 'Next.js', icon: '▲' },
    { label: 'TensorFlow', icon: '🧠' },
    { label: 'PyTorch', icon: '🔥' },
    { label: 'LangChain', icon: '🔗' },
    { label: 'Node.js', icon: '🟢' },
    { label: 'PostgreSQL', icon: '🐘' },
    { label: 'Docker', icon: '🐳' },
    { label: 'Google Cloud', icon: '☁️' },
    { label: 'FastAPI', icon: '⚡' },
];

const ROW_2 = [
    { label: 'Machine Learning', icon: '🤖' },
    { label: 'Deep Learning', icon: '🧬' },
    { label: 'NLP', icon: '💬' },
    { label: 'Computer Vision', icon: '👁️' },
    { label: 'RAG Systems', icon: '📚' },
    { label: 'Prompt Engineering', icon: '✍️' },
    { label: 'Full Stack Dev', icon: '💻' },
    { label: 'REST APIs', icon: '🔌' },
    { label: 'MongoDB', icon: '🍃' },
    { label: 'Redis', icon: '🔴' },
    { label: 'Kubernetes', icon: '☸️' },
    { label: 'CI/CD', icon: '🔄' },
];

export default function TechMarquee() {
    return (
        <div className="relative py-4 overflow-hidden">
            {/* Top separator */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

            <div className="space-y-3">
                <MarqueeTicker items={ROW_1} speed={35} direction="left" />
                <MarqueeTicker items={ROW_2} speed={28} direction="right" />
            </div>

            {/* Bottom separator */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        </div>
    );
}
