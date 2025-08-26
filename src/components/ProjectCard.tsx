import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Calendar, Code } from 'lucide-react';

interface Project {
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
  dateCompleted?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        className="group bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700 hover:border-teal-400/50 transition-all duration-300"
        data-cursor="hover"
      >
        <div className="relative overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
          
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex space-x-2">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-gray-900/80 rounded-full text-gray-300 hover:text-white"
              >
                <Github size={16} />
              </motion.a>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-gray-900/80 rounded-full text-gray-300 hover:text-white"
              >
                <ExternalLink size={16} />
              </motion.a>
            </div>
          </div>

          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-gradient-to-r from-blue-600/80 to-teal-600/80 text-white text-xs rounded-full backdrop-blur-sm">
              {project.category}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300"
          >
            Ver Detalles
          </motion.button>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
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
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-2 bg-gray-900/80 rounded-full text-white hover:bg-gray-900 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                    <p className="text-gray-400">{project.description}</p>
                  </div>
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-3 bg-gray-700 rounded-full text-gray-300 hover:text-white hover:bg-gray-600 transition-colors"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-3 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full text-white hover:shadow-lg transition-all"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <Code size={20} className="mr-2 text-blue-400" />
                      Tecnologías
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-teal-500/20 border border-teal-500/30 text-teal-400 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <Calendar size={20} className="mr-2 text-emerald-400" />
                      Información del Proyecto
                    </h3>
                    <div className="space-y-2 text-gray-300">
                      <p><span className="text-gray-400">Categoría:</span> {project.category}</p>
                      <p><span className="text-gray-400">Estado:</span> Completado</p>
                      <p><span className="text-gray-400">Tipo:</span> Proyecto Personal</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Descripción Detallada</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.longDescription || project.description + ' Este proyecto demuestra mis habilidades en desarrollo web moderno, implementando las mejores prácticas de la industria y utilizando tecnologías de vanguardia para crear una experiencia de usuario excepcional.'}
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Características Principales</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {(project.features || [
                      'Diseño responsive y moderno',
                      'Interfaz de usuario intuitiva',
                      'Optimización de rendimiento',
                      'Arquitectura escalable',
                      'Código limpio y documentado',
                      'Testing y calidad asegurada'
                    ]).map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center text-gray-300"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mr-3" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;