import React from 'react';
import { motion } from 'framer-motion';
import { Container, Typography, Box, Link } from '@mui/material';

const InterestsSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Container
        sx={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 3, color: '#333' }}>
          My Interests
        </Typography>

        <Box
          sx={{
            maxWidth: '700px',
            padding: '2rem',
            borderRadius: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '0px 10px 20px rgba(0,0,0,0.15)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Box
            component="img"
            src="https://upload.wikimedia.org/wikipedia/en/e/e8/Pok%C3%A9mon_World_Championships_logo.png"
            alt="Pokemon VGC"
            sx={{
              width: '100%', 
              maxWidth: '220px',
              height: 'auto',
              borderRadius: '12px',
              marginBottom: 2,
              boxShadow: '0px 5px 15px rgba(0,0,0,0.2)'
            }}
          />
          <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 1, color: '#222' }}>
            Pokémon VGC
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.6, color: '#444', textAlign: 'justify' }}>
            Since early 2021, I returned to playing VGC at a high level. Ever since returning,
            I have gotten Top 8 at the Singapore Nationals twice and won Singapore Nationals last year,
            representing Singapore at the Honolulu World Championships.
            <br /><br />
            Outside of the primary competitions, I am also an active contributor to VGC's 'draft league' scene,
            where I frequently manage in these draft leagues. Currently, I am Manager-Emeritus of the Snowbelle
            Blizzards in the prestigious NPA (National Pokemon Association) draft league.
          </Typography>
          <br />
          <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 1, color: '#222' }}>
            Articles & Teams
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.6, color: '#444', textAlign: 'justify' }}>
            A collection of the various teams and articles I have written over my several years of playing VGC.
          </Typography>
          <Box sx={{ marginTop: 2, textAlign: 'center' }}>
            <Link 
                href='https://www.smogon.com/forums/threads/the-gunner-turtle-and-the-dragonic-shark-top-16-victory-road-qualifier-4.3685528/' 
                target="_blank" 
                sx={{ 
                display: 'block', 
                color: '#0073e6', 
                textDecoration: 'none', 
                marginBottom: 1, 
                fontFamily: 'Roboto, sans-serif', 
                fontSize: '1rem', 
                fontWeight: '500' 
                }}
            >
                Top 16, Victory Road Spring Qualifier
            </Link>
            <Link 
                href='https://www.smogon.com/forums/threads/new-blood-smogon-vgc-pl-report.3690004/' 
                target="_blank" 
                sx={{ 
                display: 'block', 
                color: '#0073e6', 
                textDecoration: 'none', 
                marginBottom: 1, 
                fontFamily: 'Roboto, sans-serif', 
                fontSize: '1rem', 
                fontWeight: '500' 
                }}
            >
                Smogon VGCPL 5-0 run
            </Link>
            <Link 
                href='https://pokepast.es/ed061d44aceba9ed' 
                target="_blank" 
                sx={{ 
                display: 'block', 
                color: '#0073e6', 
                textDecoration: 'none', 
                marginBottom: 1, 
                fontFamily: 'Roboto, sans-serif', 
                fontSize: '1rem', 
                fontWeight: '500' 
                }}
            >
                Singapore Nationals Champion Team
            </Link>
            <Link 
                href='https://pokepast.es/e4ec7c7def344e49' 
                target="_blank" 
                sx={{ 
                display: 'block', 
                color: '#0073e6', 
                textDecoration: 'none', 
                fontFamily: 'Roboto, sans-serif', 
                fontSize: '1rem', 
                fontWeight: '500' 
                }}
            >
                World Championships 2024 Team
            </Link>
        </Box>
        </Box>
      </Container>
    </motion.div>
  );
};

export default InterestsSection;