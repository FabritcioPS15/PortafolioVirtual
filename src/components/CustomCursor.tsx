import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorVariant, setCursorVariant] = useState("default");
  const [hidden, setHidden] = useState(false);
  const [activeElement, setActiveElement] = useState<string | null>(null);
  const [textPosition, setTextPosition] = useState({ x: 0, y: 0, flip: false });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Calcular la posición del texto considerando los bordes de la ventana
      const flipX = e.clientX > window.innerWidth - 100;
      const flipY = e.clientY > window.innerHeight - 50;
      
      setTextPosition({
        x: e.clientX + (flipX ? -100 : 20),
        y: e.clientY + (flipY ? -30 : 20),
        flip: flipX || flipY
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Detectar diferentes tipos de elementos
      if (target.closest("button, [data-cursor='hover']")) {
        setIsHovering(true);
        setCursorVariant("hover");
        setActiveElement("button");
      } else if (target.closest("a, [data-cursor='link']")) {
        setIsHovering(true);
        setCursorVariant("link");
        setActiveElement("link");
      } else if (target.closest("[data-cursor='click']")) {
        setCursorVariant("clickable");
        setActiveElement("clickable");
      } else if (target.closest("input, textarea, [data-cursor='text']")) {
        setCursorVariant("text");
        setActiveElement("text");
      } else {
        setIsHovering(false);
        setCursorVariant("default");
        setActiveElement(null);
      }
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  // Variantes para diferentes estados del cursor con estética de neón azul
  const cursorVariants = {
    default: {
      scale: 1,
      opacity: 1,
      backgroundColor: "rgba(0, 195, 255, 0.2)",
      border: "1.5px solid rgba(0, 162, 255, 0.8)",
      boxShadow: "0 0 10px rgba(0, 162, 255, 0.5), 0 0 20px rgba(0, 162, 255, 0.3)",
    },
    hover: {
      scale: 1.5,
      opacity: 1,
      backgroundColor: "rgba(0, 140, 255, 0.3)",
      border: "1.5px solid rgba(0, 217, 255, 0.9)",
      boxShadow: "0 0 15px rgba(0, 140, 255, 0.7), 0 0 30px rgba(0, 140, 255, 0.4)",
    },
    link: {
      scale: 1.4,
      opacity: 1,
      backgroundColor: "rgba(0, 110, 255, 0.3)",
      border: "1.5px solid rgba(0, 110, 255, 0.9)",
      boxShadow: "0 0 15px rgba(0, 110, 255, 0.7), 0 0 25px rgba(0, 110, 255, 0.4)",
    },
    clickable: {
      scale: 1.3,
      opacity: 1,
      backgroundColor: "rgba(0, 200, 255, 0.3)",
      border: "1.5px solid rgba(0, 200, 255, 0.9)",
      boxShadow: "0 0 12px rgba(0, 200, 255, 0.7), 0 0 22px rgba(0, 200, 255, 0.4)",
    },
    text: {
      scale: 0.8,
      opacity: 0.8,
      backgroundColor: "rgba(100, 200, 255, 0.3)",
      border: "1.5px solid rgba(100, 200, 255, 0.7)",
      boxShadow: "0 0 8px rgba(100, 200, 255, 0.5), 0 0 15px rgba(100, 200, 255, 0.3)",
    }
  };

  // Efecto de pulso de neón
  const pulseVariants = {
    default: {
      scale: 1,
      opacity: 0.4,
      border: "1px solid rgba(0, 162, 255, 0.4)",
    },
    hover: {
      scale: 1.8,
      opacity: 0.6,
      border: "1px solid rgba(0, 217, 255, 0.6)",
    },
    link: {
      scale: 1.7,
      opacity: 0.6,
      border: "1px solid rgba(0, 110, 255, 0.6)",
    },
    clickable: {
      scale: 1.6,
      opacity: 0.5,
      border: "1px solid rgba(0, 200, 255, 0.6)",
    },
    text: {
      scale: 1.2,
      opacity: 0.4,
      border: "1px solid rgba(100, 200, 255, 0.4)",
    }
  };

  // Efecto de estela de neón
  const trailVariants = {
    default: {
      scale: 1,
      opacity: 0.7,
      backgroundColor: "rgba(0, 162, 255, 0.7)",
    },
    hover: {
      scale: 0.7,
      opacity: 0.5,
      backgroundColor: "rgba(0, 217, 255, 0.6)",
    },
    link: {
      scale: 0.8,
      opacity: 0.6,
      backgroundColor: "rgba(0, 110, 255, 0.6)",
    },
    clickable: {
      scale: 0.9,
      opacity: 0.6,
      backgroundColor: "rgba(0, 200, 255, 0.6)",
    },
    text: {
      scale: 0.6,
      opacity: 0.6,
      backgroundColor: "rgba(100, 200, 255, 0.6)",
    }
  };

  // Efecto de click (anillos concéntricos de neón)
  const clickEffectVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 3,
      opacity: [0.5, 0],
    }
  };

  // Texto para diferentes tipos de elementos
  const getHoverText = () => {
    switch (activeElement) {
      case "button": return "Click!";
      case "link": return "Visitar";
      case "clickable": return "Interactuar";
      case "text": return "Seleccionar";
      default: return "Interactuar";
    }
  };

  if (hidden) return null;

  return (
    <>
      {/* Cursor principal con efecto de neón */}
      <motion.div
        className="fixed pointer-events-none z-50 rounded-full"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          width: 20,
          height: 20,
        }}
        variants={cursorVariants}
        initial="default"
        animate={cursorVariant}
        transition={{ duration: 0.1, ease: "easeOut" }}
      />

      {/* Pulso de neón */}
      <motion.div
        className="fixed pointer-events-none z-40 rounded-full"
        style={{
          left: mousePosition.x - 15,
          top: mousePosition.y - 15,
          width: 30,
          height: 30,
        }}
        variants={pulseVariants}
        initial="default"
        animate={cursorVariant}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Estela de neón */}
      <motion.div
        className="fixed pointer-events-none z-30 rounded-full"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
          width: 8,
          height: 8,
        }}
        variants={trailVariants}
        initial="default"
        animate={cursorVariant}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />

      {/* Efecto de click (anillos de neón) */}
      <AnimatePresence>
        {isClicking && (
          <>
            <motion.div
              className="fixed pointer-events-none z-45 rounded-full border-2 border-blue-400"
              style={{
                left: mousePosition.x - 15,
                top: mousePosition.y - 15,
                width: 30,
                height: 30,
              }}
              variants={clickEffectVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            <motion.div
              className="fixed pointer-events-none z-45 rounded-full border border-blue-300"
              style={{
                left: mousePosition.x - 20,
                top: mousePosition.y - 20,
                width: 40,
                height: 40,
              }}
              variants={clickEffectVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            />
          </>
        )}
      </AnimatePresence>

      {/* Texto del cursor para elementos interactivos - POSICIÓN CORREGIDA */}
      {(cursorVariant === "hover" || cursorVariant === "link" || cursorVariant === "clickable") && (
        <motion.div
          className="fixed pointer-events-none z-50"
          style={{
            left: textPosition.x,
            top: textPosition.y,
          }}
          initial={{ opacity: 0, scale: 0.5, y: textPosition.flip ? -10 : 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: textPosition.flip ? -10 : 10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-2 py-1 bg-gradient-to-r from-blue-800 to-blue-600 text-white text-xs font-semibold rounded-md shadow-lg">
            {getHoverText()}
          </div>
        </motion.div>
      )}

      {/* Efecto de partículas al hacer hover (opcional) */}
      <AnimatePresence>
        {isHovering && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="fixed pointer-events-none z-40 rounded-full bg-blue-400"
                style={{
                  left: mousePosition.x - 2,
                  top: mousePosition.y - 2,
                  width: 4,
                  height: 4,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  left: mousePosition.x - 2 + (Math.random() * 20 - 10),
                  top: mousePosition.y - 2 + (Math.random() * 20 - 10),
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ 
                  duration: 0.8,
                  delay: i * 0.1,
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CustomCursor;