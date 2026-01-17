import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const NeonDivider: React.FC = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '100%',
        py: 2,
        my: 4,
        opacity: 0.8
      }}
    >
        <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: '30%', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.5), #00D4FF)',
                boxShadow: '0 0 10px rgba(0, 212, 255, 0.5)',
            }}
        />
        <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
        >
            <Box 
                sx={{ 
                    mx: 3, 
                    color: '#00D4FF', 
                    fontSize: '1.2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textShadow: '0 0 10px #00D4FF, 0 0 20px #00D4FF',
                    animation: 'pulse 2s infinite',
                    '@keyframes pulse': {
                        '0%': { transform: 'scale(1)', opacity: 0.8 },
                        '50%': { transform: 'scale(1.2)', opacity: 1 },
                        '100%': { transform: 'scale(1)', opacity: 0.8 },
                    }
                }}
            >
                ❖
            </Box>
        </motion.div>
        <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: '30%', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{
                height: '1px',
                background: 'linear-gradient(90deg, #00D4FF, rgba(0, 212, 255, 0.5), transparent)',
                boxShadow: '0 0 10px rgba(0, 212, 255, 0.5)',
            }}
        />
    </Box>
  );
};

export default NeonDivider;
