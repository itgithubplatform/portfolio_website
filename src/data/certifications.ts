export interface Certificate {
    id: string;
    title: string;
    type: string;
    description: string;
    institution: string;
    date: string;
    icon: string;
    iconBg: string;
    credentialUrl?: string;
    certificateCode?: string;
    earned: boolean;
}

export const certifications: Certificate[] = [
    {
        id: 'cyber-security',
        title: 'Cyber Security Training Certificate',
        type: 'One Month Internship',
        description:
            'Completed one month summer training and internship program in cyber security fundamentals',
        institution: 'DataSpace Academy & The Neotia University',
        date: 'July 2024',
        icon: '🔐',
        iconBg: 'from-purple-600 to-indigo-600',
        credentialUrl: '#',
        earned: true,
    },
    {
        id: 'aws-foundations',
        title: 'Foundations and Practical Applications of AWS',
        type: '30 Hours Hands-on Training',
        description:
            'Comprehensive training on AWS cloud services, EC2, S3, Lambda, and cloud deployment strategies',
        institution: 'DataSpace Academy & The Neotia University',
        date: 'November 2024',
        icon: '☁️',
        iconBg: 'from-cyan-600 to-blue-600',
        credentialUrl: '#',
        earned: true,
    },
    {
        id: 'isro-hackathon',
        title: 'Bharatiya Antariksh Hackathon 2025',
        type: 'Certificate of Acknowledgement',
        description:
            'Successfully submitted an idea for the Bharatiya Antariksh Hackathon 2025. Participation reflects innovation, curiosity, and commitment in solving real-world challenges of space and technology.',
        institution: 'ISRO — Indian Space Research Organisation',
        date: '2025',
        icon: '🚀',
        iconBg: 'from-orange-500 to-red-600',
        credentialUrl: 'https://drive.google.com/file/d/1etSPqqeZyS1RYdWStYX6BoV9sN3kFHqf/view?usp=sharing',
        certificateCode: '2025H2S06BAH25-PI4253',
        earned: true,
    },
    {
        id: 'kaggle-google-ai-agents',
        title: '5-Day AI Agents Intensive Course with Google',
        type: 'Badge Certificate',
        description:
            'Successfully earned the badge for completing the 5-Day AI Agents Intensive Course — a hands-on program covering cutting-edge AI agent design, tool use, and multi-agent orchestration.',
        institution: 'Kaggle × Google',
        date: 'December 18, 2025',
        icon: '🤖',
        iconBg: 'from-blue-500 to-indigo-600',
        credentialUrl: 'https://drive.google.com/file/d/1j90_ukPa38DsehpumqAwf3d-DoTw1dvT/view?usp=sharing',
        earned: true,
    },
    {
        id: 'anthropic-agent-skills',
        title: 'Introduction to Agent Skills',
        type: 'Certificate of Completion',
        description:
            'Completed the Introduction to Agent Skills course, gaining hands-on knowledge of building and deploying intelligent AI agents powered by Claude.',
        institution: 'Anthropic',
        date: '2025',
        icon: '🧠',
        iconBg: 'from-sky-500 to-blue-600',
        credentialUrl: 'https://drive.google.com/file/d/11jMEr1bnb31i4lDni-vEMjCfmEdCXS0g/view?usp=sharing',
        earned: true,
    },
    {
        id: 'google-cloud-gen-ai',
        title: 'Gen AI Exchange Hackathon',
        type: 'Certificate of Participation',
        description:
            'Awarded for valuable contribution through prototype submission under "Personalized Career and Skills Advisor" problem statement. Participation enriched this national platform for AI innovation.',
        institution: 'Google Cloud & Hack2Skill',
        date: 'January 14, 2026',
        icon: '✨',
        iconBg: 'from-blue-600 to-violet-700',
        credentialUrl: 'https://drive.google.com/file/d/16x5wGTVTwVfW7dOCTFZpWACp9lb7B7vX/view?usp=sharing',
        certificateCode: '2025H2S08GH-PI001622',
        earned: true,
    },
];
