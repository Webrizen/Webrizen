"use client";
import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Button,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Store as ProductsIcon,
  Build as ServicesIcon,
  Work as PortfolioIcon,
  Chat as BlogsIcon,
  Info as AboutIcon,
  Comment as TestimonialsIcon,
  Description as ProposalIcon,
  Gavel as LegalIcon,
  Person as PersonIcon,
} from '@mui/icons-material';
import Link from 'next/link';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backdropFilter: 'blur(8px)', background: '#4DDDE0' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component={Link} href='/' sx={{ flexGrow: 1, width: 'min-content' }}>
            WebRizen
          </Typography>
          <Link href='/login'>
            <Button color="inherit">
              Login
            </Button>
          </Link>
          <Link href='/signup'>
            <Button color="inherit">
              Sign Up
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }}>
          <List>
            <Link href='/'>
              <ListItem button onClick={toggleDrawer}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>
            <Link href='/products'>
              <ListItem button onClick={toggleDrawer}>
                <ListItemIcon>
                  <ProductsIcon />
                </ListItemIcon>
                <ListItemText primary="Products" />
              </ListItem>
            </Link>
            <Link href='/services'>
              <ListItem button onClick={toggleDrawer}>
                <ListItemIcon>
                  <ServicesIcon />
                </ListItemIcon>
                <ListItemText primary="Services" />
              </ListItem>
            </Link>
            <Link href='/portfolio'>
              <ListItem button onClick={toggleDrawer}>
                <ListItemIcon>
                  <PortfolioIcon />
                </ListItemIcon>
                <ListItemText primary="Portfolio" />
              </ListItem>
            </Link>
            <Link href='/blogs'>
              <ListItem button onClick={toggleDrawer}>
                <ListItemIcon>
                  <BlogsIcon />
                </ListItemIcon>
                <ListItemText primary="Blogs" />
              </ListItem>
            </Link>
            <Link href='/about'>
              <ListItem button onClick={toggleDrawer}>
                <ListItemIcon>
                  <AboutIcon />
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItem>
            </Link>
            <Link href='/testimonials'>
              <ListItem button onClick={toggleDrawer}>
                <ListItemIcon>
                  <TestimonialsIcon />
                </ListItemIcon>
                <ListItemText primary="Testimonials" />
              </ListItem>
            </Link>
            <Link href='/proposal'>
              <ListItem button onClick={toggleDrawer}>
                <ListItemIcon>
                  <ProposalIcon />
                </ListItemIcon>
                <ListItemText primary="Get A Proposal" />
              </ListItem>
            </Link>
            <Link href='/legal'>
              <ListItem button onClick={toggleDrawer}>
                <ListItemIcon>
                  <LegalIcon />
                </ListItemIcon>
                <ListItemText primary="Legal" />
              </ListItem>
            </Link>
          </List>
        </Box>
      </Drawer>
      <Toolbar />
    </>
  );
};

export default Navbar;