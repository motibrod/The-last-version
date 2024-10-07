import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Login from "../Components/Register/Login";
import Signup from "../Components/Register/Singup";
import Manager from "../Components/Register/Event_manager";

const LoginPage = () => {
  const Navigate = useNavigate();
  let [IsLogin, setIsLogin] = useState(true);
  let [IsSignup, setIsSignup] = useState(false);
  let [IsManager, setIsManager] = useState(false);
  const handelchange = (e) => {
    setIsLogin((IsLogin = false));
    setIsSignup((IsSignup = false));
    setIsManager((IsManager = false));
    switch (e.target.name) {
      case "Login":
        setIsLogin(true);
        break;
      case "Signup":
        setIsSignup(true);
        break;
      case "Guset":
         Navigate("/Details");
        break;
      case "Event":
        setIsManager(true);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <form>
        <div>
          <Box
            display="flex"
            flexDirection={"column"}
            maxWidth={500}
            alignItems="center"
            justifyContent={"center"}
            margin="auto"
            marginTop={5}
            padding={3}
            borderRadius={5}
            boxShadow={"5px 5px 10px #ccc"}
            sx={{
              ":hover": {
                boxShadow: "10px 10px 20px #ccc",
              },
            }}
          >
            <div>
              <Button
                onClick={handelchange}
                name="Login"
                sx={{ margin: 1, borderRadius: 3 }}
                variant="contained"
              >
                Login
              </Button>

              <Button
                onClick={handelchange}
                name="Signup"
                sx={{ margin: 1, borderRadius: 3 }}
                variant="contained"
              >
                Signup
              </Button>
              <Button
                onClick={handelchange}
                name="Guset"
                sx={{ margin: 1, borderRadius: 3 }}
                variant="contained"
              >
                Guset
              </Button>
              <Button
                onClick={handelchange}
                name="Event"
                sx={{ margin: 1, borderRadius: 3 }}
                variant="contained"
              >
                Event Manager
              </Button>
            </div>
            {IsLogin && <Login />}
            {IsSignup && <Signup />}
            {IsManager && <Manager />}
          </Box>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
