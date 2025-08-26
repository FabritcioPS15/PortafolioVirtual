import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase, Award } from 'lucide-react';
import { workExperience } from '../data/experience';

const Experience: React.FC = () => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'remote': return '🌐';
      case 'onsite': return '🏢';
      case 'hybrid': return '🔄';
      default: return '💼';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'remote': return 'Remoto';
      case 'onsite': return 'Presencial';
      case 'hybrid': return 'Híbrido';
      default: return 'Presencial';
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-800/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Experiencia Laboral</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Mi trayectoria profesional construyendo soluciones innovadoras
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-teal-500 to-emerald-500 hidden md:block" />

          <div className="space-y-12">
            {workExperience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:items-center`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full border-4 border-gray-900 hidden md:block z-10"
                />

                {/* Content card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-teal-400/50 transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Background effect */}
                    <div className={`absolute -top-10 ${index % 2 === 0 ? '-right-10' : '-left-10'} w-32 h-32 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-full blur-xl`} />
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{job.position}</h3>
                          <h4 className="text-lg text-blue-400 font-semibold">{job.company}</h4>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <span>{getTypeIcon(job.type)}</span>
                          <span>{getTypeLabel(job.type)}</span>
                        </div>
                      </div>

                      {/* Meta info */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{job.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={14} />
                          <span>{job.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-6">{job.description}</p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h5 className="text-white font-semibold mb-3 flex items-center space-x-2">
                          <Award size={16} className="text-yellow-400" />
                          <span>Logros Principales</span>
                        </h5>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.2 + achIndex * 0.1 + 0.5 }}
                              className="flex items-start space-x-2 text-gray-300 text-sm"
                            >
                              <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0" />
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h5 className="text-white font-semibold mb-3 flex items-center space-x-2">
                          <Briefcase size={16} className="text-blue-400" />
                          <span>Tecnologías</span>
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-teal-500/20 border border-teal-500/30 text-teal-400 rounded-full text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;