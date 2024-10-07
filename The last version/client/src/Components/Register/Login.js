import React, { useState, useContext } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Context } from "../../App";

const Login = (props) => {
  const { setUserId } = useContext(Context);
  const { setDetailsId } = useContext(Context);
  const Navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handelchange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const email = input.email;
    const passsword = input.password;

    axios
      .post("http://localhost:5000/api/users/login", {
        email: email,
        password: passsword,
      })
      .then((response) => {
        console.log("res:", response);
        axios
          .post("http://localhost:5000/api/users/userid", { email })
          .then((response) => {
            console.log("response.data in Login:", response.data);
            setUserId(response.data.userid[0]._id);
            setDetailsId(response.data.userid[0].giftsId);
          });

        if (
          props.a === "manager" &&
          response.data === "Assignment to constant variable."
        ) {
          Navigate("/EventManager");
        } else if (response.data === "Assignment to constant variable.") {
          Navigate("/Details");
        } else console.log("else:", response);
      });
  };

  return (
    <div>
      <form>
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
        >
          {(props.a === "manager") ? (
            <Typography variant="h2" padding={3} textAlign="center">
              Login as a manager
            </Typography>
          ) : (
            <Typography variant="h2" padding={3} textAlign="center">
              Login
            </Typography>
          )}

          <TextField
            onChange={handelchange}
            name="email"
            value={input.email}
            margin="normal"
            type={"email"}
            variant="outlined"
            placeholder="Email"
            label="Email"
          />

          <TextField
            onChange={handelchange}
            name="password"
            value={input.password}
            margin="normal"
            type={"password"}
            variant="outlined"
            placeholder="Password"
            label="Password"
          />

          <Button
            onClick={handleClick}
            sx={{ margin: 3, borderRadius: 3 }}
            variant="contained"
            size="large"
            type="submit"
          >
            Login
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Login;
