import React, { useContext } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Navbar from "../Components/Navbar/Navbar";
import { Context } from "../App";
import axios from "axios";

function createData(name, gift, date) {
  return {
    name,
    gift,
    date,
    history: [
      {
        blessing: "May the road rise to meet you.",
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.gift}</TableCell>
        <TableCell align="right">{row.date}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box
              borderColor={"black"}
              border={2}
              bgcolor={"#F6F6F6"}
              sx={{ margin: 1, padding: 1, borderRadius: 5 }}
            >
              <Typography variant="h6" gutterBottom component="div">
                Blessing
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.blessing}>
                      <TableCell component="th" scope="row">
                        {historyRow.blessing}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    gift: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        blessing: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

const rows = [
  createData("Moti & Ayelet", 200, "12.10.2022"),
  createData("Avi & Dvora", 300, "01.10.2020"),
  createData("Jony & Lily", 400, "02.10.2000"),
];

export default function CollapsibleTable() {
  const { userId } = useContext(Context);
  const { detailsId } = useContext(Context);
  const { event } = useContext(Context);
  console.log("userId in history:", userId);
  console.log("event in history:", event);
  const giftsId = detailsId;
  let gifts = [];

  axios
    .post("http://localhost:5000/api/gift/getgift", { giftsId })
    .then((response) => {
      gifts.push(response.data);

    });
  console.log("gifts in history:", gifts);
  
  return (
    <div>
      <Navbar />
      <form>
        <div>
          <Typography
            variant="h2"
            padding="50px"
            style={{
              textAlign: "center",
              fontSize: 100,
              fontStyle: "inherit",
              fontFamily: "Nerko",
            }}
          >
            History
          </Typography>
          <Box
            display="flex"
            flexDirection={"column"}
            maxWidth={1100}
            alignItems="center"
            justifyContent={"center"}
            margin={10}
            marginLeft={25}
            marginTop={1}
            padding={0}
            borderRadius={5}
            // backgroundColor={"white"}
            boxShadow={"5px 5px 10px #ccc"}
            sx={{
              ":hover": {
                boxShadow: "10px 10px 20px #ccc",
              },
            }}
          >
            <TableContainer
              sx={{ borderRadius: 5, bgcolor: "#F6F6F6" }}
              component={Paper}
            >
              <Table sx={{ bgcolor: "#D6E4F0" }} aria-label="collapsible table">
                <TableHead sx={{ bgcolor: "#163172" }}>
                  <TableRow>
                    <TableCell />
                    <TableCell style={{ color: "white" }}>Name</TableCell>
                    <TableCell align="right" style={{ color: "white" }}>
                      Gift
                    </TableCell>
                    <TableCell align="right" style={{ color: "white" }}>
                      Date
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  
                  {rows.map((row) => (
                    <Row key={row.name} row={row} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </div>
      </form>
    </div>
  );
}
