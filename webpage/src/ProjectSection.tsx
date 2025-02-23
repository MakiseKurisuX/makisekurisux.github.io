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
            minHeight: '80vh',
            padding: '3rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 3, color: '#333' }}>
            Projects
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    borderRadius: '12px',
                    boxShadow: '0px 5px 15px rgba(0,0,0,0.15)',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0px 10px 20px rgba(0,0,0,0.2)',
                    },
                  }}
                >
                  <CardActionArea href={project.link} target="_blank">
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '20px' }}>
                      <CardMedia
                        component="img"
                        sx={{ width: '80%', height: 'auto', maxHeight: '180px', objectFit: 'contain' }}
                        image={project.image}
                        alt={project.title}
                      />
                    </Box>
                    <CardContent sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#222' }}>{project.title}</Typography>
                      <Typography variant="body2" sx={{ color: '#555', marginTop: 1 }}>{project.description}</Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 2 }}>
                        {project.techStack.map((logo, i) => (
                          <CardMedia
                            key={i}
                            component="img"
                            sx={{ width: 40, height: 40, objectFit: 'contain' }}
                            image={logo}
                            alt="Tech Logo"
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </motion.div>
    );
  };
  
  export default ProjectsSection;