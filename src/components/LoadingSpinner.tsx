import React from 'react';
import { motion } from 'framer-motion';
import { Loader } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
  message?: string;
  description?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 40,
  color = 'text-teal-400',
  message = 'Cargando...',
  description
}) => {
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
          <Loader size={size} className={color} />
        </motion.div>
        <h2 className="text-xl font-semibold text-white">{message}</h2>
        {description && (
          <p className="text-gray-400 mt-2">{description}</p>
        )}
      </div>
    </motion.div>
  );
};

export default LoadingSpinner;