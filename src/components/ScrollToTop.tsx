import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useScrollTop } from '../hooks/useScrollTop';

const ScrollToTop: React.FC = () => {
  const { showScrollTop, scrollToTop } = useScrollTop();

  return (
    <AnimatePresence>
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed right-6 bottom-6 z-50 bg-gradient-to-r from-blue-600 to-teal-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Volver arriba"
        >
          <ChevronDown size={24} className="transform rotate-180" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;