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

const drawerWidth = 240;

function Navbar(props) {
     
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    const drawer = (
      <Box onClick={handleDrawerToggle}  sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          <NavLink to="/" className="nav-link">
            {" "}
            Resume Builder
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
          <NavLink className="nav-link" to="/" color="inherit">
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
                <NavLink to="/"  className="nav-link">
                  {" "}
                 
                <h2>Resume Builder</h2>
                
                </NavLink>
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <NavLink to="/" className="nav-link" color="inherit">
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



  

// export default Navbar




// import "../styles/navbar.css";
// import * as React from "react";
// import { NavLink } from "react-router-dom";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import logoresume from "../images/logoresume.png";


// const drawerWidth = 240;
// const logoTheme = createTheme({
//   palette: {
//     primary: {
//       main: "#fff",
//     },
//   },
// });

// function Navbar(props) {
//   //   const { window } = propxs;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         <NavLink to="/">
//           {" "}
//           <img
//             src={logoresume}
//             height="40px"
//             alt="logoapp"
//           />
//         </NavLink>
//       </Typography>
//       <Divider />
//       <List
//         className="drawerLinks"
//         sx={{
//           display: "flex",
//           textAlign: "left",
//           paddingLeft: "20px",
//           flexDirection: "column",
//         }}>
//         <NavLink className="nav-link" to="/" color="inherit">
//           Resume Templates
//         </NavLink>
//         <NavLink to="/my/resumes" className="nav-link" color="inherit">
//           My Resumes
//         </NavLink>
//         <NavLink to="/about-us" color="inherit" className="nav-link">
//           About us
//         </NavLink>
//       </List>
//     </Box>
//   );

//   return (
//     <>
//       <Box sx={{ display: "flex" }}>
//         <ThemeProvider theme={logoTheme}>
//           <AppBar component="nav" position="sticky" className="appbar" sx={{ color: "primary", boxShadow: "none" }}>
//             <Toolbar id="toolbar">
//               <IconButton
//                 color="inherit"
//                 aria-label="open drawer"
//                 edge="start"
//                 id="icon"
//                 onClick={handleDrawerToggle}
//                 sx={{ mr: 3, display: { sm: "none" } }}>
//                 <MenuIcon />
//               </IconButton>
//               <Typography
//                 variant="h3"
//                 component="div"
//                 sx={{
//                   flexGrow: 1,
//                   display: { sm: "block" },
//                   fontSize: "20px",
//                   position: "relative",
//                   top: "7px",
                 
//                 }}>
//                 <NavLink to="/"  className="nav-link">
//                   {" "}
//                   {/* <img
//                     className="logo"
//                     src={logoresume}
//                     height="30px"
//                     alt="logoapp"
//                   /> */}
//                 <h2>Resume Builder</h2>
                
//                 </NavLink>
//               </Typography>
//               <Box sx={{ display: { xs: "none", sm: "block" } }}>
//                 <NavLink to="/" className="nav-link" color="inherit">
//                   Resume Templates
//                 </NavLink>
//                 <NavLink to="/my/resumes" className="nav-link" color="inherit">
//                   My Resumes
//                 </NavLink>
//                 <NavLink to="/about-us" className="nav-link aboutUs" color="inherit">
//                   About Us
//                 </NavLink>
//               </Box>
//             </Toolbar>
//           </AppBar>
//         </ThemeProvider>
//         <Box component="nav">
//           <Drawer
//             variant="temporary"
//             open={mobileOpen}
//             onClose={handleDrawerToggle}
//             ModalProps={{
//               keepMounted: true, //for Better performance on mobile.
//             }}
//             sx={{
//               display: { xs: "block", sm: "none" },
//               "& .MuiDrawer-paper": {
//                 boxSizing: "border-box",
//                 width: drawerWidth,
//               },
//             }}>
//             {drawer}
//           </Drawer>
//         </Box>
//       </Box>
//     </>
//   );
// }

// export default Navbar;