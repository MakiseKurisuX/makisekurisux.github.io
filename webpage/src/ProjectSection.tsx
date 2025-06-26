import React from 'react';
import { motion } from 'framer-motion';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActionArea, Box } from '@mui/material';
import AppIcon from './images/AppIcon.png';
import Thumbnail from './images/Thumbnail.jpg';

const projects = [
    {
      title: 'MindConnect',
      description: 'Mental Health Application for Students',
      image: AppIcon,
      link: 'https://github.com/MakiseKurisuX/MindConnect',
      techStack: [
        'https://cdn.worldvectorlogo.com/logos/react-native-1.svg', 
        'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
        'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
        'https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png', 
      ],
    },
    {
      title: 'Project Crisis',
      description: 'Adversarial Machine Learning CTF',
      image: Thumbnail,
      link: 'https://github.com/MakiseKurisuX/CTF-Crisis',
      techStack: [
        'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg', 
        'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
        'https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg',
        'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg'
      ],
    },
  ];
  
  const ProjectsSection: React.FC = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Container
          sx={{
            minHeight: '100vh',
            padding: '4rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
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
                background: 'linear-gradient(45deg, #00D4FF, #FF6B9D)',
                backgroundSize: '200% 200%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradientShift 3s ease infinite',
              }}
            >
              Featured Projects
            </Typography>
          </motion.div>
          
          <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: '1200px' }}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(20px)',
                      borderRadius: '24px',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                      transition: 'all 0.3s ease',
                      overflow: 'hidden',
                      position: 'relative',
                      '&:hover': {
                        transform: 'scale(1.02)',
                        boxShadow: '0 15px 40px rgba(0, 212, 255, 0.3)',
                        border: '1px solid rgba(0, 212, 255, 0.4)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: 'linear-gradient(90deg, #00D4FF, #FF6B9D, #C770F0)',
                        backgroundSize: '200% 100%',
                        animation: 'gradientShift 3s ease infinite',
                      },
                    }}
                  >
                    <CardActionArea 
                      href={project.link} 
                      target="_blank"
                      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                      <Box 
                        sx={{ 
                          display: 'flex', 
                          justifyContent: 'center', 
                          alignItems: 'center', 
                          padding: '2rem',
                          background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(255, 107, 157, 0.1) 100%)',
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1, rotateY: 15 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CardMedia
                            component="img"
                            sx={{ 
                              width: '120px', 
                              height: '120px', 
                              objectFit: 'contain',
                              borderRadius: '16px',
                              filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3))',
                            }}
                            image={project.image}
                            alt={project.title}
                          />
                        </motion.div>
                      </Box>
                      
                      <CardContent 
                        sx={{ 
                          textAlign: 'center', 
                          flexGrow: 1,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          padding: '2rem',
                        }}
                      >
                        <Box>
                          <Typography 
                            variant="h5" 
                            sx={{ 
                              fontWeight: 'bold', 
                              color: 'white',
                              marginBottom: 2,
                            }}
                          >
                            {project.title}
                          </Typography>
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              color: 'rgba(255, 255, 255, 0.8)', 
                              marginBottom: 3,
                              lineHeight: 1.6,
                            }}
                          >
                            {project.description}
                          </Typography>
                        </Box>
                        
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                          {project.techStack.map((logo, i) => (
                            <motion.div
                              key={i}
                              whileHover={{ scale: 1.2, rotateY: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Box
                                sx={{
                                  width: 50,
                                  height: 50,
                                  borderRadius: '12px',
                                  background: 'rgba(255, 255, 255, 0.1)',
                                  backdropFilter: 'blur(10px)',
                                  border: '1px solid rgba(255, 255, 255, 0.2)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  padding: '8px',
                                  transition: 'all 0.3s ease',
                                  '&:hover': {
                                    background: 'rgba(0, 212, 255, 0.2)',
                                    border: '1px solid rgba(0, 212, 255, 0.4)',
                                    boxShadow: '0 4px 15px rgba(0, 212, 255, 0.3)',
                                  },
                                }}
                              >
                                <CardMedia
                                  component="img"
                                  sx={{ 
                                    width: '100%', 
                                    height: '100%', 
                                    objectFit: 'contain',
                                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
                                  }}
                                  image={logo}
                                  alt="Tech Logo"
                                />
                              </Box>
                            </motion.div>
                          ))}
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </motion.div>
    );
  };
  
  export default ProjectsSection;