import React from 'react'
import image from "../images/resume.jpg"
import"../styles/homepage.css"

import { Stack, Typography } from '@mui/material';
const Home = () => {
  return (
    <div className='Home'>
    
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
             }}
            >
              <h2 className='h1'>The Ultimate Resume Builder</h2>
     Build beautiful, recruiter-tested resumes in a few clicks! Our resume builder 
is powerful and easy to use, with a range of amazing functions. Custom-tailor
 resumes for any job within minutes.Increase your interview chances and rise 
 above the competition.
 </Typography>

      </div>
      <Stack>
      <img className="empty-img"
            Item
             style={{
              maxWidth:" 100%",
              height: "auto",
              padding: "0",
              margin:"0"
          }}
             src={image}
             alt="img"
           ></img>
          </Stack>
      
    </div>
   
  )
}

export default Home



