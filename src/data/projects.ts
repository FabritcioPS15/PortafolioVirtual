export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  link: string;
  github: string;
  longDescription?: string;
  features?: string[];
  date: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Plataforma completa de comercio electrónico con React y Node.js',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express', 'Redux'],
    category: 'fullstack',
    link: '#',
    github: '#',
    longDescription: 'Una plataforma de comercio electrónico completa con funcionalidades avanzadas de carrito de compras, gestión de usuarios, procesamiento de pagos y panel de administración.',
    features: [
      'Carrito de compras avanzado',
      'Sistema de autenticación seguro',
      'Integración con Stripe para pagos',
      'Panel de administración completo',
      'Sistema de inventario en tiempo real',
      'Notificaciones por email automáticas'
    ],
    date: '2023-05-15'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Aplicación de gestión de tareas con funcionalidades avanzadas',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    category: 'frontend',
    link: '#',
    github: '#',
    date: '2023-03-10'
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'Dashboard interactivo con visualización de datos en tiempo real',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    technologies: ['Vue.js', 'D3.js', 'Express', 'Chart.js'],
    category: 'frontend',
    link: '#',
    github: '#',
    date: '2023-02-22'
  },
  {
    id: 4,
    title: 'Social Media API',
    description: 'API RESTful para aplicación de redes sociales con autenticación JWT',
    image: 'https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Socket.io'],
    category: 'backend',
    link: '#',
    github: '#',
    date: '2022-11-05'
  },
  {
    id: 5,
    title: 'Real Estate Portal',
    description: 'Portal inmobiliario con búsqueda avanzada y mapas interactivos',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    technologies: ['React', 'Next.js', 'PostgreSQL', 'Mapbox', 'Prisma'],
    category: 'fullstack',
    link: '#',
    github: '#',
    date: '2022-09-30'
  },
  {
    id: 6,
    title: 'Weather App',
    description: 'Aplicación del clima con geolocalización y pronósticos detallados',
    image: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg',
    technologies: ['React', 'OpenWeather API', 'Geolocation API', 'CSS3'],
    category: 'frontend',
    link: '#',
    github: '#',
    date: '2022-08-12'
  },
  {
    id: 7,
    title: 'Microservices Architecture',
    description: 'Arquitectura de microservicios con Docker y Kubernetes',
    image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
    technologies: ['Docker', 'Kubernetes', 'Node.js', 'Redis', 'PostgreSQL'],
    category: 'backend',
    link: '#',
    github: '#',
    date: '2022-07-18'
  },
  {
    id: 8,
    title: 'Mobile Banking App',
    description: 'Aplicación móvil de banca con React Native y funciones biométricas',
    image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg',
    technologies: ['React Native', 'TypeScript', 'Redux', 'Biometric Auth'],
    category: 'mobile',
    link: '#',
    github: '#',
    date: '2022-06-05'
  },
];

export const categories = [
  { id: 'all', label: 'Todos', count: projects.length, icon: '⭐' },
  { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length, icon: '🎨' },
  { id: 'backend', label: 'Backend', count: projects.filter(p => p.category === 'backend').length, icon: '⚙️' },
  { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length, icon: '🚀' },
  { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length, icon: '📱' },
];