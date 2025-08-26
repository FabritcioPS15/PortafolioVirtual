export interface TechSkill {
  name: string;
  level: number;
  color: string;
  icon: string;
}

export interface TechCategory {
  title: string;
  skills: TechSkill[];
  gradient: string;
}

export const techStack: TechCategory[] = [
  {
    title: 'Frontend',
    gradient: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React', level: 95, color: 'text-blue-400', icon: '⚛️' },
      { name: 'TypeScript', level: 90, color: 'text-blue-500', icon: '📘' },
      { name: 'Next.js', level: 88, color: 'text-gray-300', icon: '▲' },
      { name: 'Tailwind CSS', level: 92, color: 'text-cyan-400', icon: '🎨' },
      { name: 'Vue.js', level: 75, color: 'text-green-400', icon: '💚' },
    ]
  },
  {
    title: 'Backend',
    gradient: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Node.js', level: 93, color: 'text-green-400', icon: '🟢' },
      { name: 'Express.js', level: 90, color: 'text-gray-300', icon: '🚀' },
      { name: 'Python', level: 80, color: 'text-yellow-400', icon: '🐍' },
      { name: 'GraphQL', level: 75, color: 'text-pink-400', icon: '📊' },
      { name: 'REST APIs', level: 95, color: 'text-blue-300', icon: '🔗' },
    ]
  },
  {
    title: 'Database',
    gradient: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'MongoDB', level: 88, color: 'text-green-500', icon: '🍃' },
      { name: 'PostgreSQL', level: 85, color: 'text-blue-600', icon: '🐘' },
      { name: 'Redis', level: 78, color: 'text-red-400', icon: '⚡' },
      { name: 'Supabase', level: 82, color: 'text-green-400', icon: '⚡' },
    ]
  },
  {
    title: 'Mobile & Tools',
    gradient: 'from-orange-500 to-red-500',
    skills: [
      { name: 'React Native', level: 80, color: 'text-blue-400', icon: '📱' },
      { name: 'Docker', level: 85, color: 'text-blue-500', icon: '🐳' },
      { name: 'Git', level: 95, color: 'text-orange-400', icon: '🔧' },
      { name: 'AWS', level: 70, color: 'text-yellow-500', icon: '☁️' },
    ]
  }
];