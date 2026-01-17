import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import SocialLinks from './components/SocialLinks';
import GlobalBackground from './components/DynamicBackground';
import SVGDrawingAnimation from './components/SVGDrawingAnimation';
import ScrollProgressIndicator from './components/ScrollProgressIndicator';
import FloatingElements from './components/FloatingElements';
import NeonDivider from './components/NeonDivider';
import IntroductionSection from './IntroductionSection';
import WorkExperienceSection from './WorkExperience';
import ProjectsSection from './ProjectSection';
import InterestsSection from './InterestsSection';
import { Box, ThemeProvider, createTheme, CssBaseline } from '@mui/material';

// Create a dark theme instance
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#61dafb',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#0a0a0a',
      paper: '#1a1a2e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          // Additional global styles if needed
        },
      },
    },
  },
});

// A helper component to handle scrolling based on the URL hash.
const ScrollToSection: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
};

const App: React.FC = () => {
  const [showAnimation, setShowAnimation] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);

  const handleAnimationComplete = () => {
    setShowAnimation(false);
    // Small delay before showing main content for smooth transition
    setTimeout(() => {
      setShowMainContent(true);
    }, 500);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollProgressIndicator />
        <FloatingElements />
        <AnimatePresence mode="wait">
          {showAnimation && (
            <SVGDrawingAnimation 
              key="svg-animation"
              onComplete={handleAnimationComplete} 
            />
          )}
        </AnimatePresence>

        {showMainContent && (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Global Vanta.js Background */}
            <GlobalBackground />
            
            <Navbar />
            
            {/* Fixed SocialLinks on the left center */}
            <Box
              sx={{
                position: 'fixed',
                top: '50%',
                left: 0,
                transform: 'translateY(-50%)',
                zIndex: 1000, // Ensure it appears on top of other content
                backgroundColor: 'transparent', // Change if needed
                padding: '0.5rem',
              }}
            >
              <SocialLinks />
            </Box>
            <ScrollToSection />
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              {/* Each section has an id corresponding to the hash in the URL */}
              <div id="introduction">
                <IntroductionSection />
              </div>
              <NeonDivider />
              <div id="work">
                <WorkExperienceSection />
              </div>
              <NeonDivider />
              <div id="projects">
                <ProjectsSection />
              </div>
              <NeonDivider />
              <div id="interests">
                <InterestsSection />
              </div>
            </Box>
          </motion.div>
        )}
      </Router>
    </ThemeProvider>
  );
};

export default App;