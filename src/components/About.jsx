import React from 'react'

import { Stack, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import { Box } from "@mui/system";
import image  from  '../images/resume.jpg';
import "../styles/about.css";


function About() {
  return (
    <>
      {/* <Navbar/> */}
     
        <Stack p={{ xs: "5px", sm: "10px", md: "15px", lg: "40px " }} className=''>
        {/* <h2 className="template-header-title">Resume Builder</h2> */}
        {/* <span><img style={{ width: "200px", height: "50px" }}   alt="aboutline" /></span> */}
        <Stack 
          className="midContainer"
          
          direction={{
            xs: "column-reverse",
            sm: "column-reverse",
            md: "row",
            lg: "row",
          }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
         >
          <Typography
            sx={{
              fontSize: {
                xs: "13px",
                sm: "15px",
                
                md: "17px",
                lg: "19px",
              },
              paddingRight: {
                xs: "5px",
                sm: "10px",
                md:"20px",
                lg: "25px",
              },
              textAlign: "justify",
            //  justifyContent:{
            //     xs: "center",
            //     sm: "center",
            //     md:"",
            //     lg: "",
            //   }
             
            }}>
            Welcome to our resume builder! We are a team of experienced professionals dedicated to helping job seekers create resumes and cover letters that stand out from the competition. Our mission is to provide you with the tools and resources you need to land your dream job.

            We understand that the job search can be overwhelming, which is why we're here to guide you every step of the way. Our easy-to-use platform offers a variety of customizable templates and industry-specific keywords to help you craft a resume that showcases your unique skills and accomplishments.

            Thank you for choosing our resume builder. We look forward to helping you achieve your career goals!
            <Box marginTop={3}>
          <Typography
            sx={{
              fontSize: {
                xs: "22px",
                sm: "25px",
                md: "27px",
                lg: "30px",
              },
              fontWeight: "400",
              color: "dark",
            }}>
            Share with your friends
          </Typography>
          <Box className="icons">
            <LinkedInIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="primary"
            />
            <FacebookOutlinedIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="primary"
            />
            <WhatsAppIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="success"
            />
            <TwitterIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="info"
            />
            <EmailIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="dark"
            />
          </Box>
        </Box>
          </Typography>
          <Stack>
            <img className="about-img"
             
              src={image}
              alt="img"
            />
          </Stack>
        </Stack>
        
      </Stack>
    
    </>
  )
}

export default About
