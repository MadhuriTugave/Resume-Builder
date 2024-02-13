// import React from 'react'
// import Navbar from './Navbar'
// import "../styles/homepage.css";
// import { Stack, Typography } from '@mui/material';
// const Home = () => {
//   return (
//     <div>
//       <div className='Home top'>
//         {/* <div> <Navbar active={"Resume Templates"}/></div> */}
    
//       <div className='homepage'>
     
    
//      <Typography
//       sx={{
//               fontSize: {
//                 xs: "13px",
//                 sm: "15px",
//                 md: "17px",
//                 lg: "19px",
//               },
//            textAlign: "justify",
//               padding:"10px",
//               marginTop:"55px",
             
//             }}>
//               <h1 className='h1'>The Ultimate Resume Builder</h1>
//      Build beautiful, recruiter-tested resumes in a few clicks! Our resume builder 
// is powerful and easy to use, with a range of amazing functions. Custom-tailor
//  resumes for any job within minutes.Increase your interview chances and rise 
//  above the competition.
//  </Typography>

//       </div>
//       <Stack>
//             <img className="about-img"
             
//               // src={image}
//               alt="img"
//             />
//           </Stack>
      
//     </div>
//     </div>
//   )
// }

// export default Home



import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import { templates } from "../Data/templates";
import BlackScreen from "../components/BlackScreen";
import { Button, Stack } from "@mui/material";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectTemplate } from "../Redux/actions";

const mapStateToProps = (state) => ({
  selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedTemplateId: (id) => dispatch(selectTemplate(id)),
});

const Home = (props) => {
  const navigate = useNavigate();

  const navigateToFillDetails = (id) => {
    props.setSelectedTemplateId(id);
    navigate("/template/fill-details");
  };

  // console.log(props.selectedTemplateId);
  
  return (
    <>
    <Navbar active={"Resume Templates"} />
      
      <>
         <div className="home">
        <div className="home-templates-cont">
          <h2 className="template-header-title">Templates</h2>
          <p className="template-select-text">Select a template to get started</p>
          
          <Stack
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: {
                sm: "1fr 1fr",
                md: "1fr 1fr",
                lg: "1fr 1fr 0.3fr",
                xl: "1fr 1fr 1fr 1fr",
              },
              gridGap: "30px",
            }}>
            {templates.map((template) => {
              return (
                <div key={template.id} id="template" className="templates-img-cont">
                  <img
                    className="template-img"
                    src={template.template_img}
                    alt={template.template_name}
                  />
                  <BlackScreen />
                  <Button
                    className="use-template-btn"
                    onClick={() => navigateToFillDetails(template.id)}
                    size="medium"
                    variant="contained">
                    Use Template
                  </Button>
                </div>
              );
            })}
          </Stack>
        </div>
      </div>
      </>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);