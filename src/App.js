// import About from "./components/About";
// import Home from "./components/Home"
// import { Route,  Routes } from "react-router-dom";
// import MyResumes from "./components/MyResumes";
// import  NotFound from "./components/NotFound";
// import Navbar from "./components/Navbar";

// function App() {
//   return (
//     <>
//     <Navbar></Navbar>
//   <Routes>
//     <Route path="/" element={<Home/>}/>
//     <Route path="/About" element={<About/>}/>
//     <Route path="/Myresumes" element={<MyResumes/>}/>
//     <Route path="*" element={<NotFound/>}/>
//     </Routes> 
//     </>
     
    
    
    
//   );
// }

// export default App;




import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DetailsFilling from "./components/DetailsFilling";
import CheckSelectedId from "./components/CheckSelectedId";
import AboutUs from "./components/AboutUs";
import MyResumes from "./components/MyResumes";
import Notfound from "./components/NotFound";

const App = () => {
  return (
  
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/template/fill-details"
          element={
            <CheckSelectedId>
              <DetailsFilling />
            </CheckSelectedId>
          }
        />
        <Route exact path="/my/resumes" element={<MyResumes />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        {/* If someone attempts to navigate to a page that does not exist, they will be redirected to a 404 page. */}
        <Route exact path="*" element={<Notfound />} />
      </Routes>

  );
};

export default App;