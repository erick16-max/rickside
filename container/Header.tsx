import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Logo from '../public/img/logo.png';
import { Fade } from '@mui/material';


interface Iprops {
  navBg: boolean,
  window?: () => Window;
}



const drawerWidth = 240;
const navItems = ['Home', 'About', 'Services', 'Products', 'Clients'];

export default function Header(props: Iprops) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      <Image
              src={Logo}
              alt='logo'
              width={140}
              height={50}
            />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button
        sx={{ 
          bgcolor: "#ff1744",
          width: '90%', 
          "&:hover": {
            bgcolor:"#ef5350",
          }, 
        }}
        variant="contained"
        href="#contained-buttons"
      >
        Contact Us
    </Button>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
      <Box 
        sx={{ 
          display: "flex", 
          bgcolor: props.navBg ? "#ffffff" : "#e6f0ff" ,
          }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            bgcolor: props.navBg ? "#ffffff" : "#e6f0ff",
            boxShadow: 0,
            
          }}
        >
          <Toolbar sx={{display: 'flex', justifyContent: 'center'}}>
            <Box 
              component="div" 
              sx={{ 
                flexGrow: 1,
                }}>
              <Image src={Logo} alt="logo" width={140} height={50} />
            </Box>

            <Box sx={{ display: { xs: "none", sm: "none", md: "flex" }, flexWrap: "wrap", }}>
              {navItems.map((item) => (
                <Button 
                  key={item} 
                  sx={{ 
                    color: "#0F2137", 
                    fontWeight: 500,
                    "&:hover": {
                      bgcolor:"#ef5350",
                      color: '#fff',
                    },
                  }}>
                  {item}
                </Button>
              ))}
              <Button
                sx={{  
                  bgcolor: "#ff1744", 
                  ml: 12,
                  "&:hover": {
                    bgcolor:"#ef5350",
                  }, 
                }}
                variant="contained"
                href="#contained-buttons"
              >
                Contact Us
              </Button>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ }}
            >
              <MenuIcon
                sx={{
                  fontSize: 36,
                  color: "#1E5E92",
                  display: { sm: "block", md: "none" },
                }}
              />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "block", md: 'none', },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
  );
}