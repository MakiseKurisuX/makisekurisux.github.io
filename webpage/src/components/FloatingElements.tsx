import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';

const shapes = [
  { type: 'circle', size: 100, x: '10%', y: '20%', duration: 20, delay: 0 },
  { type: 'square', size: 150, x: '80%', y: '10%', duration: 25, delay: 2 },
  { type: 'circle', size: 80, x: '15%', y: '80%', duration: 22, delay: 1 },
  { type: 'triangle', size: 120, x: '85%', y: '75%', duration: 28, delay: 4 },
  { type: 'square', size: 60, x: '50%', y: '50%', duration: 18, delay: 3 },
];

const FloatingElements: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          style={{
            position: 'absolute',
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
            borderRadius: shape.type === 'circle' ? '50%' : shape.type === 'square' ? '12px' : '0',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.05)',
            clipPath: shape.type === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : undefined,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "linear",
            delay: shape.delay,
          }}
        />
      ))}
    </Box>
  );
};

export default FloatingElements;
