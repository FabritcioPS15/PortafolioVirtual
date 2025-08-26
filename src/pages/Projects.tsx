import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ChevronDown } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ScrollToTop from '../components/ScrollToTop';
import { useLoading } from '../hooks/useLoading';
import { projects, categories } from '../data/projects';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const isLoading = useLoading(1500);
  const sortOptions = [
    { id: 'newest', label: 'Más recientes' },
    { id: 'oldest', label: 'Más antiguos' },
    { id: 'name', label: 'Por nombre' }
  ];

  const filteredProjects = useMemo(() => {
    let result = projects.filter(project => {
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });

    // Ordenar proyectos
    if (sortBy === 'newest') {
      result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (sortBy === 'oldest') {
      result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    } else if (sortBy === 'name') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [selectedCategory, searchTerm, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSearchTerm('');
    setSortBy('newest');
  };

  // Componente de carga
  if (isLoading) {
    return <LoadingSpinner message="Cargando proyectos..." description="Preparando una muestra de mi trabajo" />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-16 px-4 relative"
    >
      <ScrollToTop />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Mis <span className="bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent">Proyectos</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Una colección de proyectos que demuestran mis habilidades y experiencia en desarrollo web
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center mb-8">
            {/* Search */}
            <div className="relative w-full md:max-w-md">
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar proyectos, tecnologías..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-10 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400 transition-colors"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-3 w-full md:w-auto">
              <span className="text-gray-400 whitespace-nowrap">Ordenar por:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-gray-800/50 border border-gray-600 rounded-lg py-2 pl-4 pr-8 text-white focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400"
                >
                  {sortOptions.map(option => (
                    <option key={option.id} value={option.id}>{option.label}</option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400" />
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2.5 rounded-full font-medium transition-all flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg'
                    : 'bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.label}</span>
                <span className="bg-gray-600 text-xs px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </motion.button>
            ))}
            
            {(selectedCategory !== 'all' || searchTerm) && (
              <motion.button
                onClick={clearFilters}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 rounded-full font-medium bg-gray-700 text-gray-300 hover:text-white hover:bg-gray-600 flex items-center space-x-2"
              >
                <X size={16} />
                <span>Limpiar filtros</span>
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${searchTerm}-${sortBy}`}
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-teal-400/30 transition-all duration-300 hover:shadow-xl hover:shadow-teal-400/5"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No se encontraron proyectos</h3>
            <p className="text-gray-400 mb-6">
              Intenta cambiar los filtros o el término de búsqueda
            </p>
            <button
              onClick={clearFilters}
              className="px-5 py-2.5 rounded-full font-medium bg-gradient-to-r from-blue-600 to-teal-600 text-white hover:shadow-lg transition-all flex items-center space-x-2 mx-auto"
            >
              <X size={16} />
              <span>Limpiar filtros</span>
            </button>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 bg-gray-800/50 rounded-2xl px-8 py-6 border border-gray-700/50">
            <div>
              <div className="text-2xl font-bold text-blue-400">{projects.length}</div>
              <div className="text-gray-400 text-sm">Total Proyectos</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-gray-600"></div>
            <div>
              <div className="text-2xl font-bold text-teal-400">{filteredProjects.length}</div>
              <div className="text-gray-400 text-sm">Mostrando</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-gray-600"></div>
            <div>
              <div className="text-2xl font-bold text-emerald-400">
                {new Set(projects.flatMap(p => p.technologies)).size}
              </div>
              <div className="text-gray-400 text-sm">Tecnologías</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;