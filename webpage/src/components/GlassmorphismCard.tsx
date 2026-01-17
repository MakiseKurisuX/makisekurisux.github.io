import React, { ReactNode } from 'react';
import { Box, BoxProps } from '@mui/material';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlassProps extends BoxProps {
  children: ReactNode;
  delay?: number;
}

const GlassmorphismCard: React.FC<GlassProps> = ({ children, delay = 0, sx, ...props }) => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      sx={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        padding: '2rem',
        color: '#fff',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          background: 'rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default GlassmorphismCard;
