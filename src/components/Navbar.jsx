import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import "../styles/navbar.css";
import resumeLogo from "../images/resumelogo.png";

const drawerWidth = 240;

function Navbar(props) {
     
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    const drawer = (
      <Box onClick={handleDrawerToggle}  sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          <NavLink to="/Home" className="nav-link">
            {" "}
            <img
            src={resumeLogo}
            height="40px"
            alt="logoapp"
          />

            {/* Resume Builder */}
          </NavLink>
        </Typography>
        <Divider />
        <List
          className="drawerLinks"
          sx={{
            display: "flex",
            textAlign: "left",
            paddingLeft: "20px",
            flexDirection: "column",
          }}>
          <NavLink className="nav-link" to="/Home" color="inherit">
            Resume Templates
          </NavLink>
          <NavLink to="/my/resumes" className="nav-link" color="inherit">
            My Resumes
          </NavLink>
          <NavLink to="/about-us" color="inherit" className="nav-link">
            About us
          </NavLink>
        </List>
      </Box>
    );

 

  return (
    <div className='Navbar'>
       <Box sx={{ display: 'flex',marginBottom:"7px" }}>
      <CssBaseline />
      <AppBar component="nav">
       <Toolbar id="toolbar">
              <IconButton
                color="black"
                aria-label="open drawer"
                edge="start"
                id="icon"
                onClick={handleDrawerToggle}
                sx={{ mr: 3, display: { sm: "none" } }}>
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h3"
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { sm: "block" },
                  fontSize: "20px",
                  position: "relative",
                  top: "7px",
                 
                }}>
                <NavLink to="/Home"  className="nav-link">
                  {" "}
                  <img
                  className='logo'
            src={resumeLogo}
            height="40px"
            alt="logoapp"
          />
                
                </NavLink>
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <NavLink to="/Home" className="nav-link" color="inherit">
                  ResumeTemplates
                </NavLink>
                <NavLink to="/my/resumes" className="nav-link" color="inherit">
                  MyResumes
                </NavLink>
                <NavLink to="/about-us" className="nav-link aboutUs" color="inherit">
                  AboutUs
                </NavLink>
              </Box>
            </Toolbar>
      </AppBar>
      <nav component="nav"> 
      <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, //for Better performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}>
            {drawer}
          </Drawer>
      </nav>
     </Box>
     </div>
  );
}



export default Navbar;



  

