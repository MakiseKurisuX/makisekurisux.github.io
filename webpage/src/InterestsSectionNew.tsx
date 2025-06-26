import React from 'react';
import { motion } from 'framer-motion';
import { Container, Typography, Box, Link } from '@mui/material';

const InterestsSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <Container
        sx={{
            minHeight: '100vh', 
            paddingTop: '4rem', 
            paddingBottom: '4rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(255, 107, 157, 0.1) 0%, rgba(199, 112, 240, 0.1) 100%)',
            position: 'relative',
        }}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 'bold', 
              marginBottom: 4, 
              color: 'white',
              background: 'linear-gradient(45deg, #FF6B9D, #C770F0)',
              backgroundSize: '200% 200%',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradientShift 3s ease infinite',
            }}
          >
            Beyond Code
          </Typography>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <Box
            sx={{
              maxWidth: '800px',
              padding: '3rem',
              borderRadius: '24px',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #FF6B9D, #C770F0, #00D4FF)',
                backgroundSize: '200% 100%',
                animation: 'gradientShift 3s ease infinite',
              },
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Box
                component="img"
                src="https://upload.wikimedia.org/wikipedia/en/e/e8/Pok%C3%A9mon_World_Championships_logo.png"
                alt="Pokemon VGC"
                sx={{
                  width: '100%', 
                  maxWidth: '280px',
                  height: 'auto',
                  borderRadius: '16px',
                  marginBottom: 3,
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                }}
              />
            </motion.div>
            
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 'bold', 
                marginBottom: 2, 
                color: 'white',
                textAlign: 'center',
              }}
            >
              Pokémon VGC Champion
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                lineHeight: 1.8, 
                color: 'rgba(255, 255, 255, 0.9)', 
                textAlign: 'justify',
                fontSize: '1.1rem',
                marginBottom: 3,
              }}
            >
              Since early 2021, I returned to playing VGC at a high level. Ever since returning,
              I have gotten Top 8 at the Singapore Nationals twice and won Singapore Nationals last year,
              representing Singapore at the Honolulu World Championships.
              <br /><br />
              Outside of the primary competitions, I am also an active contributor to VGC's 'draft league' scene,
              where I frequently manage in these draft leagues. Currently, I am Manager-Emeritus of the Snowbelle
              Blizzards in the prestigious NPA (National Pokemon Association) draft league.
            </Typography>
            
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 'bold', 
                marginBottom: 2, 
                color: '#FF6B9D',
                textAlign: 'center',
              }}
            >
              Articles & Achievements
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                lineHeight: 1.8, 
                color: 'rgba(255, 255, 255, 0.8)', 
                textAlign: 'center',
                marginBottom: 3,
                fontSize: '1rem',
              }}
            >
              A collection of the various teams and articles I have written over my several years of playing VGC.
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
              <motion.div whileHover={{ scale: 1.02, x: 10 }}>
                <Link 
                    href='https://www.smogon.com/forums/threads/the-gunner-turtle-and-the-dragonic-shark-top-16-victory-road-qualifier-4.3685528/' 
                    target="_blank" 
                    sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    color: '#00D4FF', 
                    textDecoration: 'none', 
                    fontFamily: 'Poppins, sans-serif', 
                    fontSize: '1.1rem', 
                    fontWeight: '600',
                    padding: '12px 20px',
                    borderRadius: '12px',
                    background: 'rgba(0, 212, 255, 0.1)',
                    border: '1px solid rgba(0, 212, 255, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        background: 'rgba(0, 212, 255, 0.2)',
                        transform: 'translateX(10px)',
                        boxShadow: '0 4px 15px rgba(0, 212, 255, 0.3)',
                    },
                    }}
                >
                    🏆 Top 16, Victory Road Spring Qualifier
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.02, x: 10 }}>
                <Link 
                    href='https://www.smogon.com/forums/threads/new-blood-smogon-vgc-pl-report.3690004/' 
                    target="_blank" 
                    sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    color: '#FF6B9D', 
                    textDecoration: 'none', 
                    fontFamily: 'Poppins, sans-serif', 
                    fontSize: '1.1rem', 
                    fontWeight: '600',
                    padding: '12px 20px',
                    borderRadius: '12px',
                    background: 'rgba(255, 107, 157, 0.1)',
                    border: '1px solid rgba(255, 107, 157, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        background: 'rgba(255, 107, 157, 0.2)',
                        transform: 'translateX(10px)',
                        boxShadow: '0 4px 15px rgba(255, 107, 157, 0.3)',
                    },
                    }}
                >
                    📝 Smogon VGC Player League Report
                </Link>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default InterestsSection;
