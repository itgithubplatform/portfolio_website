import { Skill } from '@/types';

export const skills: Skill[] = [
  // Programming Languages
  { name: 'C / C++', level: 85, category: 'programming', icon: '🅲', color: '#00599C' },
  { name: 'Python', level: 95, category: 'programming', icon: '🐍', color: '#3776AB' },
  { name: 'Java', level: 78, category: 'programming', icon: '☕', color: '#007396' },
  { name: 'R', level: 85, category: 'programming', icon: '📈', color: '#276DC3' },

  // Frontend Development
  { name: 'HTML / CSS / JavaScript', level: 90, category: 'frontend', icon: '🧩', color: '#E34F26' },
  { name: 'React.js / Vite', level: 88, category: 'frontend', icon: '⚛️', color: '#61DAFB' },
  { name: 'Tailwind CSS / Bootstrap', level: 85, category: 'frontend', icon: '🎨', color: '#06B6D4' },
  { name: 'Framer Motion', level: 80, category: 'frontend', icon: '✨', color: '#FF0080' },

  // Backend Development
  { name: 'Node.js / Express.js', level: 90, category: 'backend', icon: '🟢', color: '#339933' },
  { name: 'Flask / FastAPI', level: 88, category: 'backend', icon: '�', color: '#000000' },
  { name: 'Authentication (JWT, Google Auth, bcrypt)', level: 85, category: 'backend', icon: '🔐', color: '#4285F4' },
  { name: 'RESTful API Design', level: 87, category: 'backend', icon: '🔌', color: '#FF6C37' },

  // AI / ML & Deep Learning
  { name: 'TensorFlow / Keras', level: 90, category: 'ai', icon: '🧠', color: '#FF6F00' },
  { name: 'PyTorch / Lightning', level: 85, category: 'ai', icon: '🔥', color: '#EE4C2C' },
  { name: 'Scikit-learn / Transfer Learning', level: 88, category: 'ai', icon: '📊', color: '#F7931E' },
  { name: 'OpenCV / Mediapipe', level: 83, category: 'ai', icon: '👁️', color: '#5C3EE8' },

  // Databases
  { name: 'MongoDB / MySQL', level: 88, category: 'database', icon: '🍃', color: '#47A248' },
  { name: 'PostgreSQL / OracleDB', level: 80, category: 'database', icon: '🐘', color: '#4169E1' },
  { name: 'Supabase / Firebase', level: 85, category: 'database', icon: '🔥', color: '#3ECF8E' },
  { name: 'SQLite (Local Testing)', level: 78, category: 'database', icon: '💾', color: '#003B57' },

  // Cloud & DevOps
  { name: 'AWS (EC2, S3)', level: 82, category: 'cloud', icon: '☁️', color: '#FF9900' },
  { name: 'Railway / Render', level: 85, category: 'cloud', icon: '🚂', color: '#0B0D0E' },
  { name: 'Vercel / Streamlit', level: 90, category: 'cloud', icon: '🚀', color: '#000000' },
  { name: 'GitHub / Docker', level: 88, category: 'cloud', icon: '🐙', color: '#181717' },

  // Tools & Productivity
  { name: 'VS Code / Cursor', level: 92, category: 'tools', icon: '💻', color: '#007ACC' },
  { name: 'Jupyter / Google Colab / Kaggle', level: 88, category: 'tools', icon: '�', color: '#F37626' },
  { name: 'Hugging Face / Ollama', level: 86, category: 'tools', icon: '🤗', color: '#FFD21E' },
  { name: 'Postman / Thunder Client', level: 82, category: 'tools', icon: '�', color: '#FF6C37' },

  // Specialized Skills
  { name: 'Research Paper Writing (Overleaf / LaTeX)', level: 90, category: 'specialized', icon: '📜', color: '#008080' },
  { name: 'CI/CD & Deployment Automation', level: 82, category: 'specialized', icon: '⚡', color: '#2088FF' },
  { name: 'Cross-Dataset Validation & Model Evaluation', level: 85, category: 'specialized', icon: '📈', color: '#FF6384' },
  { name: 'Team Collaboration & Hackathons', level: 88, category: 'specialized', icon: '🤝', color: '#36A2EB' },
];