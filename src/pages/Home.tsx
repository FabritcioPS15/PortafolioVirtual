import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Download, ExternalLink, Mail, ArrowRight, Code, Database, Globe, Smartphone, Server, Briefcase, Calendar, MapPin } from 'lucide-react';
import TypewriterEffect from '../components/TypewriterEffect';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';
import AnimatedCounter from '../components/AnimatedCounter';
import TechStack from '../components/TechStack';
import Experience from '../components/Experience';
import { projects } from '../data/projects';

const Home: React.FC = () => {
  const featuredProjects = projects.slice(0, 3);

  const techStack = [
    {
      category: 'Frontend',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      technologies: [
        { name: 'React', level: 95, icon: '⚛️' },
        { name: 'TypeScript', level: 90, icon: '🔷' },
        { name: 'Next.js', level: 88, icon: '▲' },
        { name: 'Vue.js', level: 85, icon: '💚' },
        { name: 'Tailwind CSS', level: 92, icon: '🎨' },
        { name: 'Sass/SCSS', level: 87, icon: '💅' }
      ]
    },
    {
      category: 'Backend',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      technologies: [
        { name: 'Node.js', level: 93, icon: '🟢' },
        { name: 'Express.js', level: 90, icon: '🚀' },
        { name: 'Python', level: 82, icon: '🐍' },
        { name: 'PHP', level: 78, icon: '🐘' },
        { name: 'GraphQL', level: 85, icon: '📊' },
        { name: 'REST APIs', level: 95, icon: '🔗' }
      ]
    },
    {
      category: 'Database',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      technologies: [
        { name: 'MongoDB', level: 88, icon: '🍃' },
        { name: 'PostgreSQL', level: 85, icon: '🐘' },
        { name: 'MySQL', level: 82, icon: '🐬' },
        { name: 'Redis', level: 80, icon: '🔴' },
        { name: 'Firebase', level: 87, icon: '🔥' },
        { name: 'Supabase', level: 83, icon: '⚡' }
      ]
    },
    {
      category: 'Mobile & Tools',
      icon: Smartphone,
      color: 'from-orange-500 to-red-500',
      technologies: [
        { name: 'React Native', level: 85, icon: '📱' },
        { name: 'Docker', level: 82, icon: '🐳' },
        { name: 'AWS', level: 78, icon: '☁️' },
        { name: 'Git', level: 95, icon: '📝' },
        { name: 'Linux', level: 80, icon: '🐧' },
        { name: 'Figma', level: 75, icon: '🎨' }
      ]
    }
  ];

  const workExperience = [
    {
      id: 1,
      company: 'Tech Solutions Inc.',
      position: 'Senior Full Stack Developer',
      period: 'Enero 2022 - Presente',
      location: 'Remoto',
      description: 'Lidero el desarrollo de aplicaciones web escalables utilizando React, Node.js y AWS. Responsable de la arquitectura técnica y mentoría del equipo junior.',
      achievements: [
        'Mejoré el rendimiento de la aplicación principal en un 40%',
        'Implementé arquitectura de microservicios que redujo los tiempos de despliegue en 60%',
        'Lideré un equipo de 5 desarrolladores en proyectos críticos'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB', 'Docker']
    },
    {
      id: 2,
      company: 'Digital Agency Pro',
      position: 'Full Stack Developer',
      period: 'Marzo 2020 - Diciembre 2021',
      location: 'Ciudad, País',
      description: 'Desarrollé soluciones web personalizadas para clientes corporativos, desde e-commerce hasta sistemas de gestión empresarial.',
      achievements: [
        'Entregué más de 15 proyectos exitosos para clientes Fortune 500',
        'Reduje los bugs en producción en un 35% implementando testing automatizado',
        'Optimicé el SEO de sitios web logrando un aumento del 50% en tráfico orgánico'
      ],
      technologies: ['Vue.js', 'PHP', 'MySQL', 'Laravel', 'JavaScript', 'CSS3']
    },
    {
      id: 3,
      company: 'StartUp Innovate',
      position: 'Frontend Developer',
      period: 'Junio 2018 - Febrero 2020',
      location: 'Ciudad, País',
      description: 'Desarrollé interfaces de usuario modernas y responsivas para aplicaciones SaaS, enfocándome en la experiencia del usuario y performance.',
      achievements: [
        'Creé un sistema de componentes reutilizables que aceleró el desarrollo en 30%',
        'Implementé Progressive Web App que aumentó la retención de usuarios en 25%',
        'Colaboré estrechamente con el equipo de UX/UI para mejorar la usabilidad'
      ],
      technologies: ['React', 'JavaScript', 'Sass', 'Webpack', 'Jest', 'Figma']
    }
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

      {/* Tech Stack Section */}
      <section className="py-20 px-4 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Mi Stack Tecnológico</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Tecnologías y herramientas que domino para crear soluciones web excepcionales
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((stack, stackIndex) => (
              <motion.div
                key={stack.category}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: stackIndex * 0.1 }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${stack.color}`}>
                    <stack.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{stack.category}</h3>
                </div>

                <div className="space-y-4">
                  {stack.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (stackIndex * 0.1) + (techIndex * 0.05) }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{tech.icon}</span>
                          <span className="text-gray-300 font-medium">{tech.name}</span>
                        </div>
                        <span className="text-sm text-gray-400">{tech.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: (stackIndex * 0.1) + (techIndex * 0.05) }}
                          className={`h-2 rounded-full bg-gradient-to-r ${stack.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Experiencia Laboral</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Mi trayectoria profesional construyendo soluciones tecnológicas innovadoras
            </p>
          </motion.div>

          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-teal-400/50 transition-all duration-300 relative overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-full blur-xl" />
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-2xl font-bold text-white mb-2">{job.position}</h3>
                      <div className="flex items-center space-x-4 text-gray-400 mb-2">
                        <div className="flex items-center space-x-2">
                          <Briefcase size={16} />
                          <span className="font-semibold text-teal-400">{job.company}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin size={16} />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Calendar size={16} />
                        <span>{job.period}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Logros Principales:</h4>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: (index * 0.2) + (achIndex * 0.1) }}
                          className="flex items-start space-x-3 text-gray-300"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Tecnologías Utilizadas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: (index * 0.2) + (techIndex * 0.05) }}
                          className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-teal-500/20 border border-teal-500/30 text-teal-400 rounded-full text-sm"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStack />

      {/* Experience Section */}
      <Experience />

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
      <section className="py-20 px-4 bg-gray-800/20">
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