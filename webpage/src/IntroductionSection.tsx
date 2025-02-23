import React from 'react';
import { motion } from 'framer-motion';
import { Container, Typography, Avatar, Box, Grid } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';

const techStack = [
  { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
  { name: 'TypeScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
  { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
  { name: 'Java', logo: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },
  { name: 'C++', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg' },
  { name: 'SQL (Postgres)', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' },
  { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
  { name: 'Flask', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg' },
  { name: 'Django', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg' },
  { name: 'GraphQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg' },
  { name: 'Git', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg' },
  { name: 'Docker', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg' },
  { name: 'VS Code', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg' },
  { name: 'PyCharm', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/PyCharm_Icon.svg' },
  { name: 'Anaconda', logo: 'https://upload.wikimedia.org/wikipedia/en/c/cd/Anaconda_Logo.png' },
  { name: 'pandas', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg' },
  { name: 'NumPy', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg' },
  { name: 'Matplotlib', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg' },
  { name: 'Sci-Kit Learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
  { name: 'Seaborn', logo: 'https://seaborn.pydata.org/_images/logo-mark-lightbg.svg' },
  { name: 'Selenium', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png' }
];

const IntroductionSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Container
        sx={{
          height: '90vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Avatar
          src="https://images.alphacoders.com/902/thumb-1920-902852.jpg"
          alt="Ervin Tan"
          sx={{ width: 180, height: 180, marginBottom: 2, borderRadius: '50%', boxShadow: '0px 5px 15px rgba(0,0,0,0.2)' }}
        />

        <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
          <TypeAnimation
            sequence={['Hello, nice to meet you! 👋', 2000, 'My name is Ervin.', 2000, 'I love eating and listening to J-Pop.', 2000, 'And I am a software engineer.', 2000]}
            wrapper="span"
            speed={50}
            style={{ display: 'inline-block' }}
            repeat={Infinity}
          />
        </Typography>

        <Typography variant="body1" sx={{ marginTop: 2, maxWidth: '600px', color: 'gray', fontSize: '1.1rem', lineHeight: '1.6' }}>
          I am currently a Computer Science student at the National University of Singapore,
          specializing in AI and Software Engineering, and am always looking to learn more!
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          Reach out to me at: <b>ervintan018 [at] gmail [dot] com</b>
        </Typography>

        <Typography variant="h4" sx={{ fontWeight: 'bold', marginTop: 4 }}>
          Tech Stacks I've worked with...
        </Typography>

        <Grid container spacing={1} sx={{ marginTop: 2, maxWidth: '900px', justifyContent: 'center' }}>
          {techStack.map((tech, index) => (
            <Grid item xs={3} sm={2} md={2} key={index}>
              <Box component="img" src={tech.logo} alt={tech.name} title={tech.name} sx={{ width: '55px', height: '55px', objectFit: 'contain', borderRadius: '4px', transition: 'transform 0.2s ease-in-out', '&:hover': { transform: 'scale(1.1)' } }} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </motion.div>
  );
};

export default IntroductionSection;
