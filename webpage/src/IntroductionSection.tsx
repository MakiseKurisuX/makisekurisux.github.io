import React from 'react';
import { motion } from 'framer-motion';
import { Container, Typography, Avatar, Box, Grid, useMediaQuery, Button } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import { Download, ArrowDownward } from '@mui/icons-material';

const techStackCategories = {
  'Programming Languages': [
    { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
    { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    { name: 'TypeScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
    { name: 'Java', logo: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },
    { name: 'C++', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg' },
    { name: 'SQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' },
  ],
  'Frameworks & Libraries': [
    { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
    { name: 'Flask', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg' },
    { name: 'Django', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg' },
    { name: 'GraphQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg' },
  ],
  'Data Science & ML': [
    { name: 'pandas', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg' },
    { name: 'NumPy', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg' },
    { name: 'Scikit-Learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
    { name: 'Matplotlib', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg' },
    { name: 'Seaborn', logo: 'https://seaborn.pydata.org/_images/logo-mark-lightbg.svg' },
    { name: 'PyTorch', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Pytorch_logo.png' },
  ],
  'Tools & Platforms': [
    { name: 'Git', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg' },
    { name: 'Docker', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg' },
    { name: 'VS Code', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg' },
    { name: 'Selenium', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png' },
    { name: 'Anaconda', logo: 'https://upload.wikimedia.org/wikipedia/en/c/cd/Anaconda_Logo.png' },
  ]
};

const IntroductionSection: React.FC = () => {
    const isMobile = useMediaQuery('(max-width:600px)'); // Detects mobile screens

    const scrollToNextSection = () => {
      const workSection = document.querySelector('#work');
      if (workSection) {
        workSection.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Container
          sx={{
            minHeight: '100vh', 
            paddingTop: '1rem', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
            zIndex: 2,
          }}
        >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Avatar
                src="https://images.alphacoders.com/902/thumb-1920-902852.jpg"
                alt="Ervin Tan"
                sx={{
                  width: 180, 
                  height: 180,
                  marginBottom: 3,
                  borderRadius: '50%',
                  boxShadow: '0px 10px 30px rgba(0, 212, 255, 0.3)',
                  border: '4px solid rgba(0, 212, 255, 0.2)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0px 15px 40px rgba(0, 212, 255, 0.5)',
                  },
                }}
              />
            </motion.div>
    
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Typography
                variant={isMobile ? "h4" : "h2"}
                sx={{ 
                  fontWeight: 'bold',
                  background: 'linear-gradient(45deg, #00D4FF, #FF6B9D, #C770F0)',
                  backgroundSize: '200% 200%',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'gradientShift 3s ease infinite',
                  marginBottom: 2,
                  '@keyframes gradientShift': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                  },
                }}
              >
                <TypeAnimation
                  sequence={[
                    'Hello, nice to meet you! 👋', 2000,
                    'My name is Ervin.', 2000,
                    'I love eating and listening to J-Pop.', 2000,
                    'And I am a software engineer.', 2000
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ display: 'inline-block' }}
                  repeat={Infinity}
                />
              </Typography>
            </motion.div>
    
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Typography
                variant="body1"
                sx={{
                  marginTop: 2,
                  maxWidth: '700px',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: isMobile ? '1.1rem' : '1.3rem',
                  lineHeight: '1.8',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                }}
              >
                I am currently a Computer Science student at the National University of Singapore,
                specializing in AI and Software Engineering, and am always looking to learn more!
              </Typography>
            </motion.div>
    
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Typography 
                variant="body1" 
                sx={{ 
                  marginTop: 3, 
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '1.1rem',
                }}
              >
                Reach out to me at: <Box component="span" sx={{ color: '#00D4FF', fontWeight: 'bold' }}>ervintan018 [at] gmail [dot] com</Box>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              style={{ marginTop: '2rem' }}
            >
              <Button
                variant="outlined"
                startIcon={<Download />}
                href="/documents/Resume.pdf"
                download="Ervin_Tan_Resume.pdf"
                component="a"
                sx={{
                  borderColor: '#00D4FF',
                  color: '#00D4FF',
                  padding: '12px 24px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  borderRadius: '50px',
                  textTransform: 'none',
                  background: 'rgba(0, 212, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: '#FF6B9D',
                    color: '#FF6B9D',
                    background: 'rgba(255, 107, 157, 0.1)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 25px rgba(0, 212, 255, 0.3)',
                  },
                }}
              >
                Download Resume
              </Button>
            </motion.div>
    
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 'bold', 
                  marginTop: 6,
                  marginBottom: 3,
                  color: 'white',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                }}
              >
                Tech Stack I've Mastered
              </Typography>
            </motion.div>
    
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.1 }}
              style={{ maxWidth: '1200px', width: '100%' }}
            >
              {Object.entries(techStackCategories).map(([categoryName, techs], categoryIndex) => (
                <Box key={categoryName} sx={{ marginBottom: 4 }}>
                  <motion.div
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 2.1 + categoryIndex * 0.2 }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#00D4FF',
                        fontWeight: '600',
                        marginBottom: 2,
                        textAlign: 'left',
                        fontSize: isMobile ? '1.1rem' : '1.2rem',
                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                        borderLeft: '4px solid #00D4FF',
                        paddingLeft: 2,
                      }}
                    >
                      {categoryName}
                    </Typography>
                  </motion.div>
                  
                  <Grid container spacing={2} sx={{ justifyContent: 'flex-start' }}>
                    {techs.map((tech, techIndex) => (
                      <Grid item xs={4} sm={3} md={2} key={tech.name}>
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: 2.3 + categoryIndex * 0.2 + techIndex * 0.1 
                          }}
                          whileHover={{ 
                            scale: 1.1,
                            rotateY: 15,
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Box
                            sx={{
                              background: 'rgba(255, 255, 255, 0.1)',
                              backdropFilter: 'blur(10px)',
                              borderRadius: '16px',
                              padding: '16px',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              gap: 1,
                              border: '1px solid rgba(255, 255, 255, 0.2)',
                              transition: 'all 0.3s ease',
                              cursor: 'pointer',
                              height: '100px',
                              '&:hover': {
                                background: 'rgba(0, 212, 255, 0.1)',
                                border: '1px solid rgba(0, 212, 255, 0.3)',
                                boxShadow: '0 8px 25px rgba(0, 212, 255, 0.2)',
                              },
                            }}
                          >
                            <Box
                              component="img"
                              src={tech.logo}
                              alt={tech.name}
                              sx={{
                                width: isMobile ? '35px' : '45px',
                                height: isMobile ? '35px' : '45px',
                                objectFit: 'contain',
                                filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
                              }}
                            />
                            <Typography
                              variant="caption"
                              sx={{
                                color: 'rgba(255, 255, 255, 0.9)',
                                fontSize: '0.75rem',
                                fontWeight: '500',
                                textAlign: 'center',
                              }}
                            >
                              {tech.name}
                            </Typography>
                          </Box>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 3 }}
              style={{ 
                position: 'absolute', 
                bottom: '2rem',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Button
                  onClick={scrollToNextSection}
                  sx={{
                    minWidth: 'auto',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    background: 'rgba(0, 212, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(0, 212, 255, 0.3)',
                    color: '#00D4FF',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(0, 212, 255, 0.2)',
                      transform: 'scale(1.1)',
                    },
                  }}
                >
                  <ArrowDownward />
                </Button>
              </motion.div>
            </motion.div>
          </Container>
        </motion.div>
    );
  };
  
  export default IntroductionSection;