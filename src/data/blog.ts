export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
  date: string;
  readTime: number;
  author: string;
  views: number;
  likes: number;
  comments: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'El Futuro del Desarrollo Web: Tendencias 2024',
    excerpt: 'Exploramos las tecnologías emergentes que están transformando el desarrollo web moderno.',
    content: 'El desarrollo web está evolucionando a un ritmo acelerado. En este artículo, exploramos las tendencias más importantes que están definiendo el futuro de nuestra industria...',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
    category: 'tecnologia',
    tags: ['React', 'Next.js', 'AI', 'Web3'],
    date: '2024-01-15',
    readTime: 8,
    author: 'Fabritcio Peña',
    views: 1250,
    likes: 89,
    comments: 23
  },
  {
    id: 2,
    title: 'Optimización de Performance en React',
    excerpt: 'Técnicas avanzadas para mejorar el rendimiento de tus aplicaciones React.',
    content: 'La optimización de performance es crucial para crear aplicaciones React que brinden una excelente experiencia de usuario...',
    image: 'https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg',
    category: 'desarrollo',
    tags: ['React', 'Performance', 'Optimization'],
    date: '2024-01-10',
    readTime: 12,
    author: 'Fabritcio Peña',
    views: 980,
    likes: 67,
    comments: 15
  },
  {
    id: 3,
    title: 'Mi Experiencia Migrando a TypeScript',
    excerpt: 'Lecciones aprendidas al migrar proyectos grandes de JavaScript a TypeScript.',
    content: 'Migrar de JavaScript a TypeScript puede parecer intimidante, pero los beneficios a largo plazo son enormes...',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    category: 'experiencia',
    tags: ['TypeScript', 'JavaScript', 'Migration'],
    date: '2024-01-05',
    readTime: 10,
    author: 'Fabritcio Peña',
    views: 756,
    likes: 45,
    comments: 12
  },
  {
    id: 4,
    title: 'Arquitectura de Microservicios con Node.js',
    excerpt: 'Cómo diseñar y implementar una arquitectura de microservicios escalable.',
    content: 'Los microservicios han revolucionado la forma en que construimos aplicaciones a gran escala...',
    image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
    category: 'arquitectura',
    tags: ['Node.js', 'Microservices', 'Docker', 'Kubernetes'],
    date: '2023-12-28',
    readTime: 15,
    author: 'Fabritcio Peña',
    views: 1100,
    likes: 78,
    comments: 19
  },
  {
    id: 5,
    title: 'CSS Grid vs Flexbox: Cuándo usar cada uno',
    excerpt: 'Una guía completa para elegir entre CSS Grid y Flexbox según el caso de uso.',
    content: 'CSS Grid y Flexbox son dos herramientas poderosas para el layout, pero cada una tiene sus fortalezas...',
    image: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg',
    category: 'css',
    tags: ['CSS', 'Grid', 'Flexbox', 'Layout'],
    date: '2023-12-20',
    readTime: 7,
    author: 'Fabritcio Peña',
    views: 892,
    likes: 56,
    comments: 8
  },
  {
    id: 6,
    title: 'Construyendo APIs RESTful con Express.js',
    excerpt: 'Mejores prácticas para crear APIs robustas y escalables con Express.js.',
    content: 'Express.js sigue siendo una de las mejores opciones para construir APIs en Node.js...',
    image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg',
    category: 'backend',
    tags: ['Express.js', 'API', 'REST', 'Node.js'],
    date: '2023-12-15',
    readTime: 11,
    author: 'Fabritcio Peña',
    views: 634,
    likes: 41,
    comments: 7
  }
];

export const blogCategories = [
  { id: 'all', label: 'Todos', count: blogPosts.length },
  { id: 'tecnologia', label: 'Tecnología', count: blogPosts.filter(p => p.category === 'tecnologia').length },
  { id: 'desarrollo', label: 'Desarrollo', count: blogPosts.filter(p => p.category === 'desarrollo').length },
  { id: 'experiencia', label: 'Experiencia', count: blogPosts.filter(p => p.category === 'experiencia').length },
  { id: 'arquitectura', label: 'Arquitectura', count: blogPosts.filter(p => p.category === 'arquitectura').length },
  { id: 'css', label: 'CSS', count: blogPosts.filter(p => p.category === 'css').length },
  { id: 'backend', label: 'Backend', count: blogPosts.filter(p => p.category === 'backend').length },
];