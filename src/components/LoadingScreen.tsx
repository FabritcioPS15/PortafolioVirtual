import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50"
    >
      <div className="relative">
        {/* Animated logo/text */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-teal-500 to-emerald-400 bg-clip-text text-transparent mb-8"
        >
          Portfolio
        </motion.div>

        {/* Loading animation */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{
                y: [-20, 0, -20],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: index * 0.2,
              }}
              className="w-3 h-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"
            />
          ))}
        </div>

        {/* Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400 rounded-full"
            initial={{
              x: Math.random() * 400 - 200,
              y: Math.random() * 400 - 200,
              opacity: 0,
            }}
            animate={{
              x: Math.random() * 400 - 200,
              y: Math.random() * 400 - 200,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default LoadingScreen;