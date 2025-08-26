import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Download, Github, Linkedin, Twitter, Instagram, ExternalLink, Loader, Send, CheckCircle, ChevronDown } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Simular carga de datos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    
    // Configurar el evento de scroll
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    // Simulación de descarga
    const link = document.createElement('a');
    link.href = '/sample-cv.pdf';
    link.download = 'Mi_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFormSubmit = async (formData: any) => {
    setIsSending(true);
    
    // Simular envío del formulario
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSent(true);
      
      // Resetear el estado después de un tiempo
      setTimeout(() => {
        setIsSent(false);
      }, 5000);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    } finally {
      setIsSending(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'tu.email@ejemplo.com',
      href: 'mailto:tu.email@ejemplo.com',
      color: 'text-cyan-400'
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      color: 'text-green-400'
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Ciudad, País',
      href: 'https://maps.google.com',
      color: 'text-rose-400'
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com',
      color: 'hover:text-gray-300',
      bgColor: 'hover:bg-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com',
      color: 'hover:text-blue-400',
      bgColor: 'hover:bg-blue-900/20'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com',
      color: 'hover:text-sky-400',
      bgColor: 'hover:bg-sky-900/20'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com',
      color: 'hover:text-pink-400',
      bgColor: 'hover:bg-pink-900/20'
    },
  ];

  // Componente de carga
  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen pt-24 pb-16 px-4 flex items-center justify-center"
      >
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-4"
          >
            <Loader size={40} className="text-teal-400" />
          </motion.div>
          <h2 className="text-xl font-semibold text-white">Cargando información de contacto...</h2>
          <p className="text-gray-400 mt-2">Preparando todo para que podamos conversar</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-16 px-4 relative"
    >
      {/* Botón para volver arriba */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed right-6 bottom-6 z-50 bg-gradient-to-r from-cyan-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Volver arriba"
          >
            <ChevronDown size={24} className="transform rotate-180" />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Contáctame</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a hacerlas realidad
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 relative overflow-hidden">
              {/* Efecto de fondo */}
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-xl"></div>
              
              <h2 className="text-2xl font-bold text-white mb-6 relative z-10">Envíame un mensaje</h2>
              
              <AnimatePresence mode="wait">
                {isSent ? (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-center py-12"
                  >
                    <CheckCircle size={64} className="text-green-400 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje enviado!</h3>
                    <p className="text-gray-300 mb-6">
                      Gracias por contactarme. Te responderé lo antes posible.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsSent(false)}
                      className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-semibold"
                    >
                      Enviar otro mensaje
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <ContactForm 
                      onSubmit={handleFormSubmit} 
                      isSending={isSending}
                    />
                    
                    <motion.button
                      type="submit"
                      form="contact-form"
                      disabled={isSending}
                      whileHover={{ scale: isSending ? 1 : 1.02 }}
                      whileTap={{ scale: isSending ? 1 : 0.98 }}
                      className={`w-full mt-6 px-6 py-4 rounded-lg text-white font-semibold flex items-center justify-center space-x-2 transition-all duration-300 ${
                        isSending 
                          ? 'bg-gray-700 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:shadow-lg hover:shadow-cyan-500/25'
                      }`}
                    >
                      {isSending ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <Loader size={20} />
                          </motion.div>
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Enviar mensaje</span>
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 relative overflow-hidden"
            >
              {/* Efecto de fondo */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-xl"></div>
              
              <h2 className="text-2xl font-bold text-white mb-6">Información de Contacto</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors group relative z-10"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.div 
                      className="p-3 bg-gray-700/50 rounded-lg group-hover:bg-gradient-to-r group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <info.icon size={20} className={info.color} />
                    </motion.div>
                    <div>
                      <div className="font-medium">{info.label}</div>
                      <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Download CV */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 relative overflow-hidden"
            >
              {/* Efecto de fondo */}
              <div className="absolute -top-10 -left-10 w-28 h-28 bg-cyan-500/10 rounded-full blur-lg"></div>
              <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-purple-500/10 rounded-full blur-lg"></div>
              
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">¿Interesado en mi perfil?</h3>
              <p className="text-gray-300 mb-6 relative z-10">
                Descarga mi CV actualizado para obtener más detalles sobre mi experiencia y habilidades.
              </p>
              <motion.button
                onClick={handleDownloadCV}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 0 30px rgba(56, 189, 248, 0.3)',
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-semibold flex items-center justify-center space-x-2 group transition-all duration-300 relative z-10"
              >
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Download size={20} />
                </motion.div>
                <span>Descargar CV</span>
                <ExternalLink size={16} className="opacity-70" />
              </motion.button>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 relative overflow-hidden"
            >
              {/* Efecto de fondo */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-purple-500/10 rounded-full blur-lg"></div>
              
              <h3 className="text-xl font-bold text-white mb-6 relative z-10">Sígueme en redes sociales</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className={`flex items-center justify-center space-x-3 p-4 bg-gray-700/50 rounded-lg text-gray-300 ${social.color} ${social.bgColor} transition-all duration-300 relative z-10`}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <social.icon size={20} />
                    </motion.div>
                    <span className="font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30 relative overflow-hidden"
            >
              {/* Efecto de fondo */}
              <div className="absolute -top-5 -right-5 w-16 h-16 bg-green-500/10 rounded-full blur-md"></div>
              
              <div className="flex items-center space-x-3 relative z-10">
                <motion.div 
                  className="w-3 h-3 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
                <div>
                  <div className="text-white font-semibold">Disponible para proyectos</div>
                  <div className="text-gray-300 text-sm">
                    Actualmente acepto nuevos proyectos freelance y oportunidades de colaboración
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-800/20 backdrop-blur-sm rounded-2xl p-12 border border-gray-700 relative overflow-hidden">
            {/* Efecto de fondo */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0"></div>
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"></div>
            
            <h2 className="text-3xl font-bold text-white mb-4 relative z-10">
              ¿Listo para comenzar tu proyecto?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
              No importa si es una idea pequeña o un proyecto complejo, estoy aquí para ayudarte a convertir tu visión en realidad.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <motion.a
                href="#form"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.4), 0 5px 10px -5px rgba(139, 92, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold transition-all"
              >
                Iniciar Conversación
              </motion.a>
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all"
              >
                Ver Portfolio
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;