import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, User, Briefcase, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Inicio', icon: User },
    { path: '/projects', label: 'Proyectos', icon: Briefcase },
    { path: '/contact', label: 'Contacto', icon: Mail },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-8 w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/90 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent">
              Portfolio
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link key={path} to={path} className="relative group">
                  <motion.div
                    whileHover={{ y: -2 }}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                      location.pathname === path
                        ? 'text-teal-400 bg-teal-400/10'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{label}</span>
                  </motion.div>
                  {location.pathname === path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500"
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden bg-gray-800/95 backdrop-blur-lg"
      >
        <div className="px-4 py-4 space-y-2">
          {navItems.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                location.pathname === path
                  ? 'text-teal-400 bg-teal-400/10'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <Icon size={20} />
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

const PageWrapper: React.FC = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-28 pb-16 px-4"
    >
      {children}
    </motion.div>
  );
};

export default Navbar;
export { PageWrapper };