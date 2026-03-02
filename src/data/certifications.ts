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
];
