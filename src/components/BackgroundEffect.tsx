import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffect: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'linear-gradient(45deg, #0f172a, #1e3a8a, #000706ff)',
            'linear-gradient(45deg, #1e3a8a, #1e3a8a, #030712ff)',
            'linear-gradient(45deg, #051d17ff, #0f172a, #1e3a8a)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Floating particles */}
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-teal-500 rounded-full opacity-40"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-8 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <motion.div
              key={i}
              className="border border-teal-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      </div>

      {/* Glowing orbs */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-64 h-64 rounded-full"
          style={{
            background: `radial-gradient(circle, ${
              ['rgba(59, 130, 246, 0.1)', 'rgba(20, 184, 166, 0.1)', 'rgba(16, 185, 129, 0.1)'][i]
            } 0%, transparent 70%)`,
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundEffect;