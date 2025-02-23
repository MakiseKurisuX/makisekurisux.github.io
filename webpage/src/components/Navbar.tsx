import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box, Divider, IconButton, AppBar, Toolbar } from '@mui/material';
import { Menu, Home, Work, Folder, Interests, GitHub, LinkedIn, Email } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const drawerWidth = 260; 

const SidebarNavbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        width: drawerWidth,
        boxSizing: 'border-box',
        backgroundColor: '#1E1E1E',
        color: 'white',
        paddingTop: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingX: '1rem',
      }}
    >
      <List sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {[
          { name: 'Home', icon: <Home />, link: '/' },
          { name: 'Work', icon: <Work />, link: '/work' },
          { name: 'Projects', icon: <Folder />, link: '/projects' },
          { name: 'Interests', icon: <Interests />, link: '/interests' },
        ].map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={Link}
              to={item.link}
              sx={{
                color: 'white',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                paddingY: '1rem',
                '&:hover': {
                  backgroundColor: '#333',
                  color: '#FFD700',
                },
              }}
              onClick={handleDrawerToggle}
            >
              <ListItemIcon sx={{ color: 'white', minWidth: '40px' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} sx={{ textAlign: 'left' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ textAlign: 'center', paddingBottom: '1.5rem' }}>
        <Divider sx={{ backgroundColor: 'gray', marginBottom: '1rem' }} />
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <IconButton href="https://github.com/MakiseKurisuX" target="_blank" sx={{ color: 'white', '&:hover': { color: '#FFD700' } }}>
            <GitHub sx={{ fontSize: '2rem' }} />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/ervintanzh" target="_blank" sx={{ color: 'white', '&:hover': { color: '#0077B5' } }}>
            <LinkedIn sx={{ fontSize: '2rem' }} />
          </IconButton>
          <IconButton href="mailto:ervintan018@gmail.com" target="_blank" sx={{ color: 'white', '&:hover': { color: '#FFD700' } }}>
            <Email sx={{ fontSize: '2rem' }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#1E1E1E', display: { md: 'none' } }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{ display: { xs: 'block', md: 'none' }, '& .MuiDrawer-paper': { width: drawerWidth } }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default SidebarNavbar;