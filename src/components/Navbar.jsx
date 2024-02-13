// import * as React from 'react';

// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';
// import "../styles/navbar.css"


// const drawerWidth = 240;
// const navItems = [ 'About', 'MyResumes'];

// function Navbar(props) {
//     const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         Resume Builder
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: 'center' }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}

//       </List>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <div className='Navbar'>
//        <Box sx={{ display: 'flex',marginBottom:"7px" }}>
//       <CssBaseline />
//       <AppBar component="nav">
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h5"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
//            <Link to="/" style={{textDecoration:"none",color:"white",marginRight:"6px"}} >Resume Builder</Link>
//           </Typography>
//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//             {navItems.map((item) => (
//                 <Button key={item} sx={{ color: '#fff' }}>
//                 {item ==="About" ? <Link to="/About" style={{textDecoration:"none",color:"white",marginRight:"6px"}} >About</Link>:
//                  <Link to="/MyResumes" style={{textDecoration:"none", color:"white"}}>Myresumes</Link>}
//               </Button>
//             ))}
            
          
                
         
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//       {/* <Box component="main" sx={{ p: 3 }}>
//         <Toolbar />
//         <Typography>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
//           fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
//           dolores sunt inventore perferendis, aut sapiente modi nesciunt.
//         </Typography>
//       </Box> */}
//     </Box>
//     </div>
//   )
// }

  

// export default Navbar




import "../styles/navbar.css";
import * as React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import logoresume from "../images/logoresume.png";


const drawerWidth = 240;
const logoTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
});

function Navbar(props) {
  //   const { window } = propxs;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <NavLink to="/">
          {" "}
          <img
            src={logoresume}
            height="40px"
            alt="logoapp"
          />
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
    <>
      <Box sx={{ display: "flex" }}>
        <ThemeProvider theme={logoTheme}>
          <AppBar component="nav" position="sticky" className="appbar" sx={{ color: "primary", boxShadow: "none" }}>
            <Toolbar id="toolbar">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                id="icon"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}>
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { sm: "block" },
                  fontSize: "25px",
                  position: "relative",
                  top: "5px",
                }}>
                <NavLink to="/" className="homeIcon">
                  {" "}
                  <img
                    className="logo"
                    src={logoresume}
                    height="30px"
                    alt="logoapp"
                  />
                </NavLink>
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <NavLink to="/" className="nav-link" color="inherit">
                  Resume Templates
                </NavLink>
                <NavLink to="/my/resumes" className="nav-link" color="inherit">
                  My Resumes
                </NavLink>
                <NavLink to="/about-us" className="nav-link aboutUs" color="inherit">
                  About Us
                </NavLink>
              </Box>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
        <Box component="nav">
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
        </Box>
      </Box>
    </>
  );
}

export default Navbar;