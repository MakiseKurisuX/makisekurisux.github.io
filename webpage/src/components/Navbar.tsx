import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Box, Button, useMediaQuery, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#introduction' },
  { label: 'Experience', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Interests', href: '#interests' },
];

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1100 }}
          >
            <AppBar
              position="static"
              sx={{
                background: 'rgba(15, 15, 35, 0.95)',
                backdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              }}
            >
              <Toolbar sx={{ justifyContent: 'center', position: 'relative' }}>
                {isMobile ? (
                  <>
                    <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      edge="start"
                      onClick={toggleMobileMenu}
                      sx={{ position: 'absolute', left: 16 }}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Box sx={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#00D4FF' }}>
                      ET
                    </Box>
                  </>
                ) : (
                  <Box sx={{ display: 'flex', gap: 4 }}>
                    {navItems.map((item) => (
                      <Button
                        key={item.label}
                        onClick={() => handleNavClick(item.href)}
                        sx={{
                          color: 'white',
                          fontWeight: '500',
                          fontSize: '1rem',
                          textTransform: 'none',
                          position: 'relative',
                          '&:hover': {
                            color: '#00D4FF',
                            background: 'transparent',
                          },
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            width: '0%',
                            height: '2px',
                            bottom: -4,
                            left: '50%',
                            background: 'linear-gradient(90deg, #00D4FF, #FF6B9D)',
                            transition: 'all 0.3s ease',
                            transform: 'translateX(-50%)',
                          },
                          '&:hover::after': {
                            width: '100%',
                          },
                        }}
                      >
                        {item.label}
                      </Button>
                    ))}
                  </Box>
                )}
              </Toolbar>
            </AppBar>
          </motion.div>
        )}
      </AnimatePresence>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={toggleMobileMenu}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250,
            background: 'rgba(15, 15, 35, 0.95)',
            backdropFilter: 'blur(20px)',
            color: 'white',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton onClick={toggleMobileMenu} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} onClick={() => handleNavClick(item.href)} sx={{ cursor: 'pointer' }}>
              <ListItemText
                primary={item.label}
                sx={{
                  '& .MuiTypography-root': {
                    fontWeight: '500',
                    '&:hover': { color: '#00D4FF' },
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
