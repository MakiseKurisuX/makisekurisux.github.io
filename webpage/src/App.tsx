import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import SocialLinks from './components/SocialLinks';
import GlobalBackground from './components/DynamicBackground';
import IntroductionSection from './IntroductionSection';
import WorkExperienceSection from './WorkExperience';
import ProjectsSection from './ProjectSection';
import InterestsSection from './InterestsSection';
import { Box } from '@mui/material';

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
  return (
    <Router>
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
        <div id="work">
          <WorkExperienceSection />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="interests">
          <InterestsSection />
        </div>
      </Box>
    </Router>
  );
};

export default App;