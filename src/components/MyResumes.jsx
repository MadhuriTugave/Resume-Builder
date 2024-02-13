import {  Stack } from '@mui/material'
import React from 'react'
import image from "../images/sign-in-empty.png"



function MyResumes() {
  
  return (
    <div className='MyResume top '>
      <Stack direction={{
        xs:"column-reverse",
        sm:"column-reverse",
        md:"row",
        lg:"row row-wrap"
      }} spacing={{ xs: 1, sm: 2, md: 2,lg: 1}}
      m={2}
      alignItems={{
        xs:"center",
        sm:"center",
        md:"flex-start",
        lg:"flex-start"
      }}
      useFlexGap flexWrap="wrap"
      justifyContent={{
        xs:"center",
        sm:"center",
        md:"space-around",
        lg:"space-around"
      }}
      >
     
        
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
             {/* <img className="empty-img"
             style={{
              maxWidth:" 100%",
              height: "auto",
              padding: "0",
              margin:"0"
          }}
             src={image}
             alt="img"
           /> */}
          
          
     </Stack>
    </div>
  )
}

export default MyResumes
