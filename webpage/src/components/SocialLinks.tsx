import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { motion } from 'framer-motion';

const SocialLinks: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: '50%',
        left: 0,
        transform: 'translateY(-50%)',
        // Hide on extra-small (xs) to small screens, show on medium (md) and above
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        padding: '1rem 0.5rem',
        background: 'rgba(15, 15, 35, 0.9)',
        backdropFilter: 'blur(20px)',
        borderRadius: '0 20px 20px 0',
        border: '1px solid rgba(0, 212, 255, 0.3)',
        zIndex: 1000,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Tooltip title="GitHub" placement="right">
          <IconButton
            href="https://github.com/MakiseKurisuX"
            target="_blank"
            sx={{
              color: 'white',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: '#00D4FF',
                background: 'rgba(0, 212, 255, 0.1)',
                boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
              },
            }}
          >
            <GitHub sx={{ fontSize: '2rem' }} />
          </IconButton>
        </Tooltip>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Tooltip title="LinkedIn" placement="right">
          <IconButton
            href="https://www.linkedin.com/in/ervintanzh"
            target="_blank"
            sx={{
              color: 'white',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: '#0077B5',
                background: 'rgba(0, 119, 181, 0.1)',
                boxShadow: '0 0 20px rgba(0, 119, 181, 0.5)',
              },
            }}
          >
            <LinkedIn sx={{ fontSize: '2rem' }} />
          </IconButton>
        </Tooltip>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Tooltip title="Email" placement="right">
          <IconButton
            href="mailto:ervintan018@gmail.com"
            target="_blank"
            sx={{
              color: 'white',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: '#FF6B9D',
                background: 'rgba(255, 107, 157, 0.1)',
                boxShadow: '0 0 20px rgba(255, 107, 157, 0.5)',
              },
            }}
          >
            <Email sx={{ fontSize: '2rem' }} />
          </IconButton>
        </Tooltip>
      </motion.div>
    </Box>
  );
};

export default SocialLinks;
