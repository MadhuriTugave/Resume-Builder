import React from 'react';
import  { useState } from "react";
import"../styles/SignUpLoginPage.css";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function SignUpLoginPage() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isLoginOrRegister, setisLoginOrRegister] = useState("Login");
   
    const navigate = useNavigate();
   
    const  handleSubmit =(e)=> {
        e.preventDefault();
        if (userName && password) {
    
          toast.success('Successfull !!!!');
          setTimeout(() => {
            navigate("/Home");
          }, 500);
        
         } else {
          toast.error("please fill all the fields");
        }
        
      };
  return (
<div className="firstdiv">
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="UserName..."
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        
          className="block w-full p-2 mb-2 rounded-sm "
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password..."
          className="block w-full p-2 mb-2 rounded-sm"
        />
        <button className="bg-blue-500 p-2 w-full rounded-lg text-white block ">
          {isLoginOrRegister === "register" ? "Register" : "Login"}
        
        </button>
        <div className="text-center mt-2">
          {isLoginOrRegister === "register" && (
            <div className="text-lg ">
              Already have account?{" "}
              <button 
              // target="/Login"
                onClick={() => {
                  setisLoginOrRegister("Login");
                 }}
                className="text-red-500 underline"
              >
               Login
              </button>
            </div>
          )}
          {isLoginOrRegister === "Login" && (
            <div className="text-lg ">
              Dont have account?{" "}
              <button 
              
                onClick={() => {
                  setisLoginOrRegister("register");
                }}
                className="text-red-500 underline"
              >
                Register
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default SignUpLoginPage
