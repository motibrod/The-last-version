import React, { useState, useContext } from "react";
import { Box, Button, TextField, Link } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import TheatersIcon from "@mui/icons-material/Theaters";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import Navbar from "../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import HeadLine from "../Components/Details/HeadLine";
import axios from "axios";
import { Context } from "../App";

const Details = () => {
  const Navigate = useNavigate();
  const { userId } = useContext(Context);
  const { event } = useContext(Context);
  const { setState } = useContext(Context);
  const [inputs, setInput] = useState({
    name: "",
    phone: "",
    blessing: "",
    amount: "",
  });
  const handelchange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handeClick = (e) => {
    e.preventDefault();
    const newGift = {
      name: inputs.name,
      phone: inputs.phone,
      blessing: inputs.blessing,
      amount: inputs.amount,
      userid_gift: userId,
      toEventId: event._id.$oid,
      toEventName: event.NameOfGroom + " & " + event.NameOfBride,
    };
    setState(newGift.amount);
    axios.post("http://localhost:5000/api/gift/addGift", newGift);
    Navigate("/Payment");
  };

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <HeadLine a={event.NameOfGroom + " & " + event.NameOfBride} />
      </div>

      <form>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={600}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          marginBottom={10}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              onChange={handelchange}
              name="name"
              value={inputs.name}
              id="outlined-basic"
              label="name"
              variant="outlined"
              margin="normal"
            />
          </Box>

          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              onChange={handelchange}
              name="phone"
              value={inputs.phone}
              id="outlined-basic"
              label="phone"
              variant="outlined"
              margin="normal"
            />
          </Box>

          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              onChange={handelchange}
              name="blessing"
              value={inputs.blessing}
              id="outlined-basic"
              label="blessing"
              variant="outlined"
              multiline
              rows={4}
              margin="normal"
            />
          </Box>
          <Button
            sx={{ marginTop: 2, marginBottom: 2, borderRadius: 2 }}
            size="small"
          >
            <Link
              href="https://greetier.com/wedding/wedding-greeting/"
              style={{ textDecoration: "none" }}
              target="_blank"
              color="inherit"
            >
              List of written blessing
            </Link>
          </Button>
          <div>
            <Button
              sx={{ marginBottom: 2, borderRadius: 3, margin: 1 }}
              variant="contained"
              component="label"
            >
              <AddPhotoAlternateIcon />
              <input type="file" hidden />
            </Button>
            <Button
              sx={{ marginBottom: 2, borderRadius: 3, margin: 1 }}
              variant="contained"
              component="label"
            >
              <TheatersIcon />
              <input type="file" hidden />
            </Button>
            <Button
              sx={{ marginBottom: 2, borderRadius: 3, margin: 1 }}
              variant="contained"
              component="label"
            >
              <KeyboardVoiceIcon />
              <input type="file" hidden />
            </Button>
          </div>
          <TextField
            onChange={handelchange}
            name="amount"
            value={inputs.amount}
            id="outlined-basic"
            label="Amount to pay"
            variant="outlined"
            margin="normal"
          />
          <Button
            onClick={handeClick}
            sx={{ marginBottom: 3, marginTop: 2, borderRadius: 3 }}
            variant="contained"
            size="large"
          >
            go to payment
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Details;
