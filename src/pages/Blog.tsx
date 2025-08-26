import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, Tag, Search, ChevronRight, BookOpen, Heart, MessageCircle, Share2, Eye } from 'lucide-react';

interface BlogPost {
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

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const blogPosts: BlogPost[] = [
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

  const categories = [
    { id: 'all', label: 'Todos', count: blogPosts.length },
    { id: 'tecnologia', label: 'Tecnología', count: blogPosts.filter(p => p.category === 'tecnologia').length },
    { id: 'desarrollo', label: 'Desarrollo', count: blogPosts.filter(p => p.category === 'desarrollo').length },
    { id: 'experiencia', label: 'Experiencia', count: blogPosts.filter(p => p.category === 'experiencia').length },
    { id: 'arquitectura', label: 'Arquitectura', count: blogPosts.filter(p => p.category === 'arquitectura').length },
    { id: 'css', label: 'CSS', count: blogPosts.filter(p => p.category === 'css').length },
    { id: 'backend', label: 'Backend', count: blogPosts.filter(p => p.category === 'backend').length },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen pt-24 pb-16 px-4 flex items-center justify-center"
      >
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-4"
          >
            <BookOpen size={40} className="text-blue-400" />
          </motion.div>
          <h2 className="text-xl font-semibold text-white">Cargando artículos...</h2>
          <p className="text-gray-400 mt-2">Preparando el contenido del blog</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Mi <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comparto mis experiencias, conocimientos y reflexiones sobre desarrollo web y tecnología
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400 transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full font-medium transition-all flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                <span>{category.label}</span>
                <span className="bg-gray-600 text-xs px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400/50 transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-600/80 to-purple-600/80 text-white text-xs rounded-full backdrop-blur-sm">
                    {categories.find(c => c.id === post.category)?.label}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 flex items-center space-x-3 text-white text-sm">
                  <div className="flex items-center space-x-1">
                    <Eye size={14} />
                    <span>{post.views}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart size={14} />
                    <span>{post.likes}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString('es-ES')}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{post.readTime} min</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded flex items-center space-x-1"
                    >
                      <Tag size={10} />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User size={16} className="text-gray-400" />
                    <span className="text-gray-400 text-sm">{post.author}</span>
                  </div>
                  
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-1 text-blue-400 text-sm font-medium"
                  >
                    <span>Leer más</span>
                    <ChevronRight size={16} />
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* No results */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-white mb-2">No se encontraron artículos</h3>
            <p className="text-gray-400 mb-6">
              Intenta cambiar los filtros o el término de búsqueda
            </p>
          </motion.div>
        )}
      </div>

      {/* Blog Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
            >
              <div className="relative">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 p-2 bg-gray-900/80 rounded-full text-white hover:bg-gray-900 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{new Date(selectedPost.date).toLocaleDateString('es-ES')}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{selectedPost.readTime} min de lectura</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User size={14} />
                    <span>{selectedPost.author}</span>
                  </div>
                </div>

                <h1 className="text-3xl font-bold text-white mb-6">{selectedPost.title}</h1>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-400 rounded-full text-sm flex items-center space-x-1"
                    >
                      <Tag size={12} />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 leading-relaxed text-lg mb-6">
                    {selectedPost.content}
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed">
                    Este es un ejemplo de contenido del blog. En un blog real, aquí tendríamos el contenido completo del artículo con formato markdown, imágenes, código y otros elementos enriquecidos.
                  </p>
                </div>

                <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-700">
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-2 text-gray-400 hover:text-red-400 transition-colors">
                      <Heart size={20} />
                      <span>{selectedPost.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors">
                      <MessageCircle size={20} />
                      <span>{selectedPost.comments}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors">
                      <Share2 size={20} />
                      <span>Compartir</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Blog;