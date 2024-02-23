import React from 'react'
import Navbar from './Navbar'
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
      <Navbar/>
       <Stack className='stack'>
       <Stack 
         direction={{
            xs: "column-reverse",
            sm: "column-reverse",
            md: "row",
            lg: "row",
          }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          mt="30px"
         
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
                xs: "15px",
                sm: "18px",
                md:"15px",
                lg: "20px",
              },
              textAlign: "justify",
              padding:"10px"
            }}>
           <h2> Welcome to our resume builder!</h2>
           We are a team of experienced professionals dedicated to helping job seekers create resumes and cover letters that stand out from the competition. Our mission is to provide you with the tools and resources you need to land your dream job.

            We understand that the job search can be overwhelming, which is why we're here to guide you every step of the way. Our easy-to-use platform offers a variety of customizable templates and industry-specific keywords to help you craft a resume that showcases your unique skills and accomplishments.

            At our resume builder, we're committed to providing you with a high-quality, affordable solution to your job search needs. 
                <br></br>
            Thank you for choosing our resume builder. We look forward to helping you achieve your career goals!
            <Box mt={0}>
          <Typography
            sx={{
              fontSize: {
                xs: "22px",
                sm: "25px",
                md: "27px",
                lg: "30px",
              },
              fontWeight: "350",
              color: "dark",
            }}>
            Share with your friends
          </Typography>
          <Box className="icons">
            <a  href="https://www.linkedin.com/"><LinkedInIcon
              sx={{ fontSize: "45px", paddingLeft: "15px" }}
              color="primary"
            /></a>
            <a href='https://www.facebook.com/'><FacebookOutlinedIcon
              sx={{ fontSize: "45px", paddingLeft: "15px" }}
              color="primary"
            /></a>
            <a href='https://www.whatsapp.com/'><WhatsAppIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="success"
            /></a>
            <a href='https://twitter.com/i/flow/login'><TwitterIcon
              sx={{ fontSize: "45px", paddingLeft: "15px" }}
              color="info"
            /></a>
            <a href='https://mail.google.com/'><EmailIcon
              sx={{ fontSize: "45px", paddingLeft: "15px" }}
              color="dark"
            /></a>
             
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
