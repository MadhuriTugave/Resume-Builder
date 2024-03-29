import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignUpLoginPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = input;
  //  console.log(input);
  
//hear checking if any field is missing to fill and weather it is signup or login.
    if (isSignup && name && email && password) {
      
      toast.success("Successfully signed up!");
      navigate("/Home");
    } else if (!isSignup && email && password) {
      toast.success("Successfully logged in!");
      navigate("/Home");
    } else {
      toast.error("Please fill all the fields");
    }
  };
  

  const resetState = () => {
    setIsSignup(!isSignup);
    setInput({ name: "", email: "", password: "" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          //  borderShadow={"6px 6px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 25px #ccc",
            },
          }}
        >
          <Typography variant="h2" padding={3} textAlign="center">
            {isSignup ? "SignUp" : "Login"}
          </Typography>
          {isSignup && (
            <TextField
              onChange={handleChange}
              name="name"
              value={input.name}
              margin="normal"
              type={"text"}
              variant="outlined"
              placeholder="Name"
            />
          )}
          <TextField
            onChange={handleChange}
            name="email"
            value={input.email}
            margin="normal"
            type={"email"}
            variant="outlined"
            placeholder="Email"
            
           
          />
          <TextField
            onChange={handleChange}
            name="password"
            value={input.password}
            margin="normal"
            type={"password"}
            variant="outlined"
            placeholder="Password"
          />
          <Button
            endIcon={isSignup ? <HowToRegIcon /> : <LoginOutlinedIcon />}
            type="submit"
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="warning"
          >
            {isSignup ? "SignUp" : "Login"}
          </Button>
          <Button
            endIcon={isSignup ? <LoginOutlinedIcon /> : <HowToRegIcon />}
            onClick={resetState}
            sx={{ marginTop: 3, borderRadius: 3 }}
          >
            Change To {isSignup ? "Login" : "SignUp"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default SignUpLoginPage;
