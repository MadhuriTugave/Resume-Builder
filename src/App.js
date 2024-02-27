import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DetailsFilling from "./components/DetailsFilling";
import CheckSelectedId from "./components/CheckSelectedId";
import AboutUs from "./components/AboutUs";
import MyResumes from "./components/MyResumes";

import Notfound from "./components/NotFound";
import SignupLoginPage from "./components/SignUpLoginPage";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
    <Toaster/>
  <Routes>
   
<<<<<<< HEAD
     <Route exact path="/" element={<SignUpLoginPage/>}></Route>
=======
     <Route exact path="/" element={<SignupLoginPage/>}></Route>
>>>>>>> 2c91e33c710d43658dafd63014bf5cf101e5819a
        <Route exact path="/Home" element={<Home/>} />
        
        <Route
          exact
          path="/template/fill-details"
          element={
            <CheckSelectedId>
              <DetailsFilling />
            </CheckSelectedId>
          }
        />
       <Route exact path="/my/resumes" element={<MyResumes/>} />
       <Route exact path="/about-us" element={<AboutUs/>}/>
      
        {/* If someone attempts to navigate to a page that does not exist, they will be redirected to a 404 page. */}
         <Route exact path="*" element={<Notfound />}/>
      </Routes>
      </>
  );
};

export default App;