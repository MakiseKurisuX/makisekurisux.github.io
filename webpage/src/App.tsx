import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import IntroductionSection from './IntroductionSection';
import WorkExperienceSection from './WorkExperience';
import ProjectsSection from './ProjectSection';
import InterestsSection from './InterestsSection'; 
import { Box, IconButton } from '@mui/material';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
    
      <Box sx={{ paddingTop: '5rem' }}> 
        <Routes>
          <Route path="/" element={<IntroductionSection />} />
          <Route path="/work" element={<WorkExperienceSection />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/interests" element={<InterestsSection />} /> 
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
