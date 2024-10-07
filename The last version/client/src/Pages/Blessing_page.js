import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Navbar from "../Components/Navbar/Navbar";
import Box from "@mui/material/Box";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ListItemButton from "@mui/material/ListItemButton";


export default function AlignItemsList() {
  return (
    <form>
      <Navbar />
      <div>
        <Typography
          margin="200"
          variant="h2"
          padding="50px"
          style={{
            textAlign: "center",
            fontSize: 100,
            fontStyle: "inherit",
            fontFamily: "Nerko",
          }}
        >
          Blessing
        </Typography>

        <div className="App">
          <div
            className="head"
            style={{
              width: "fit-content",
              margin: "auto",
            }}
          ></div>
          <br />
          <center>
            <Box
              marginBottom={10}
              boxShadow={"5px 5px 10px #ccc"}
              sx={{
                width: "100%",
                maxWidth: 1000,
                bgcolor: "#D6E4F0",
                borderRadius: 5,
                padding: "15px",
                ":hover": {
                  boxShadow: "10px 10px 20px #ccc",
                },
              }}
            >
              <nav>
                <List>
                  <ListItem divider>
                    <ListItemButton>
                      <ArrowRightIcon />
                      <ListItemText primary="May you each bring your best self to the other." />
                    </ListItemButton>
                  </ListItem>
                  <ListItem divider>
                    <ListItemButton>
                      <ArrowRightIcon />
                      <ListItemText primary="May you each bring commitment as well as faith to the task that is set before you." />
                    </ListItemButton>
                  </ListItem>

                  <ListItem divider>
                    <ListItemButton>
                      <ArrowRightIcon />
                      <ListItemText primary="May you maintain enduring respect and trust." />
                    </ListItemButton>
                  </ListItem>
                  <ListItem divider>
                    <ListItemButton>
                      <ArrowRightIcon />
                      <ListItemText primary="May all who follow your lives have cause often to rejoice, not only in your happiness, but also in your brave and generous living." />
                    </ListItemButton>
                  </ListItem>
                  <ListItem divider>
                    <ListItemButton>
                      <ArrowRightIcon />
                      <ListItemText primary="May God hold you in the palm of His hand." />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Box>
          </center>
        </div>
      </div>
    </form>
  );
}