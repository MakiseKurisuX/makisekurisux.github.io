import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Box } from '@mui/material';

const ScrollProgressIndicator: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Box
      component={motion.div}
      style={{ scaleX }}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, #1e3a8a, #61dafb, #d946ef)',
        transformOrigin: '0%',
        zIndex: 99999,
      }}
    />
  );
};

export default ScrollProgressIndicator;
