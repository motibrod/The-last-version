import { useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Navbar from "../Components/Navbar/Navbar";
import AddEvent from "../Components/Manager/AddEvent";
import { Context } from "../App";

const Manager = () => {
  const {IsEvent, setIsEvent} = useContext(Context);
  

  const handelClick = (e) => {
    e.preventDefault();

    

    setIsEvent(!IsEvent);
    console.log("IsEvent:",IsEvent);
  };

  return (
    <form>
      <Navbar />
      <div>
        <Typography
          variant="h2"
          padding="50px"
          style={{
            textAlign: "center",
            fontSize: 100,
            fontFamily: "Dancing Script",
          }}
        >
          Event Manager
        </Typography>
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
          {IsEvent && (
            <Button onClick={handelClick}>
              add event
              <AddIcon />
            </Button>
          )}
          {!IsEvent && <AddEvent />}
        </Box>
      </div>
    </form>
  );
};
export default Manager;
