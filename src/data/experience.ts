export interface WorkExperience {
  id: number;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: 'remote' | 'onsite' | 'hybrid';
}

export const workExperience: WorkExperience[] = [
  {
    id: 1,
    company: 'TechCorp Solutions',
    position: 'Senior Full Stack Developer',
    period: '2022 - Presente',
    location: 'Madrid, España',
    description: 'Lidero el desarrollo de aplicaciones web complejas y mentoreo a desarrolladores junior.',
    achievements: [
      'Reduje el tiempo de carga de la aplicación principal en un 40%',
      'Implementé arquitectura de microservicios que mejoró la escalabilidad',
      'Lideré un equipo de 5 desarrolladores en proyectos críticos',
      'Establecí estándares de código y mejores prácticas para el equipo'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'Docker', 'AWS'],
    type: 'hybrid'
  },
  {
    id: 2,
    company: 'StartupXYZ',
    position: 'Frontend Developer',
    period: '2020 - 2022',
    location: 'Barcelona, España',
    description: 'Desarrollé interfaces de usuario modernas y responsivas para aplicaciones SaaS.',
    achievements: [
      'Creé un sistema de componentes reutilizables usado en 3 productos',
      'Mejoré la experiencia de usuario resultando en 25% más conversiones',
      'Implementé testing automatizado reduciendo bugs en producción',
      'Colaboré estrechamente con el equipo de UX/UI'
    ],
    technologies: ['React', 'Vue.js', 'Sass', 'Jest', 'Figma'],
    type: 'onsite'
  },
  {
    id: 3,
    company: 'Freelance',
    position: 'Desarrollador Web Full Stack',
    period: '2018 - 2020',
    location: 'Remoto',
    description: 'Trabajé con múltiples clientes desarrollando soluciones web personalizadas.',
    achievements: [
      'Completé más de 20 proyectos exitosos para diversos clientes',
      'Desarrollé e-commerce que generó +€100k en ventas anuales',
      'Creé aplicaciones móviles con +10k descargas',
      'Mantuve una calificación de 5 estrellas en plataformas freelance'
    ],
    technologies: ['JavaScript', 'PHP', 'MySQL', 'WordPress', 'React Native'],
    type: 'remote'
  }
];