import About from "./components/About";
import Home from "./components/Home"
import { Route,  Routes } from "react-router-dom";
import MyResumes from "./components/MyResumes";
import  NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar></Navbar>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Myresumes" element={<MyResumes/>}/>
    <Route path="*" element={<NotFound/>}/>
    </Routes> 
    </>
     
    
    
    
  );
}

export default App;
