import React from 'react'
import Navbar from './Navbar'
import "../styles/homepage.css";
import { Stack, Typography } from '@mui/material';
const Home = () => {
  return (
    <div>
      <div className='Home top'>
        {/* <div> <Navbar active={"Resume Templates"}/></div> */}
    
      <div className='homepage'>
     
    
     <Typography
      sx={{
              fontSize: {
                xs: "13px",
                sm: "15px",
                md: "17px",
                lg: "19px",
              },
           textAlign: "justify",
              padding:"10px",
              marginTop:"55px",
             
            }}>
              <h1 className='h1'>The Ultimate Resume Builder</h1>
     Build beautiful, recruiter-tested resumes in a few clicks! Our resume builder 
is powerful and easy to use, with a range of amazing functions. Custom-tailor
 resumes for any job within minutes.Increase your interview chances and rise 
 above the competition.
 </Typography>

      </div>
      <Stack>
            <img className="about-img"
             
              // src={image}
              alt="img"
            />
          </Stack>
      
    </div>
    </div>
  )
}

export default Home



