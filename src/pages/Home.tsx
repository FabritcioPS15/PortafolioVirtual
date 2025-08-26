import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Download, ExternalLink, Mail, ArrowRight } from 'lucide-react';
import TypewriterEffect from '../components/TypewriterEffect';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';
import AnimatedCounter from '../components/AnimatedCounter';

const Home: React.FC = () => {
  const featuredProjects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Plataforma completa de comercio electrónico con React y Node.js',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas con funcionalidades avanzadas',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg',
      technologies: ['React', 'TypeScript', 'Firebase'],
      category: 'frontend',
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Dashboard interactivo con visualización de datos en tiempo real',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      technologies: ['Vue.js', 'D3.js', 'Express'],
      category: 'frontend',
      link: '#',
      github: '#',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-teal-500 to-emerald-400 bg-clip-text text-transparent"
              >
                Hola, soy
                <br />
                <span className="text-white">Tu Nombre</span>
              </motion.h1>
              
              <div className="text-xl lg:text-2xl text-gray-300 h-16 flex items-center">
                <TypewriterEffect
                  texts={[
                    'Desarrollador Full Stack',
                    'Creador de Experiencias UI/UX',
                    'Especialista en React & Node.js',
                    'Arquitecto de Soluciones Web',
                  ]}
                />
              </div>
            </div>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-400 max-w-lg"
            >
              Creando experiencias digitales extraordinarias que combinan diseño innovador 
              con tecnología de vanguardia para impulsar el éxito de tu negocio.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(20, 184, 166, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full text-white font-semibold flex items-center space-x-2 group"
              >
                <span>Ver Proyectos</span>
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg text-white font-semibold flex items-center justify-center space-x-2 group"
              >
                <Download size={20} />
                <span>Descargar CV</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex space-x-8 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <div className="text-gray-400">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400">
                  <AnimatedCounter end={5} suffix="+" />
                </div>
                <div className="text-gray-400">Años Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <div className="text-gray-400">Satisfacción</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 opacity-20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 opacity-20"
              />
              <div className="absolute inset-8 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Proyectos Destacados</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Algunos de mis trabajos más recientes que demuestran mi experiencia en desarrollo web
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(20, 184, 166, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-full text-white font-semibold flex items-center space-x-2 mx-auto group"
              >
                <span>Ver Todos los Proyectos</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">¿Listo para colaborar?</h2>
            <p className="text-xl text-gray-400">
              Envíame un mensaje rápido o contáctame para proyectos más complejos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ContactForm isPreview />
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Trabajemos juntos</h3>
                <p className="text-gray-400">
                  Siempre estoy interesado en nuevos proyectos y oportunidades emocionantes. 
                  Si tienes una idea genial, ¡hablemos!
                </p>
              </div>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-semibold flex items-center justify-center space-x-2 group"
                >
                  <Mail size={20} />
                  <span>Contacto Completo</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;