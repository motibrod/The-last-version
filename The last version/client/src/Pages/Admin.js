import React from "react";
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

function createData(User_Name, password, first_name, last_name, email, phone) {
  return {
    User_Name,
    password,
    first_name,
    last_name,
    email,
    phone,
    History: [
      {
        date: "2020-01-05",
        name_of_couple: "jony & lily",
        Total_Gift: 300,
        blessing: "Mazal Tov",
        images: "yes",
        recording: "no",
        video: "yes",
      },
      {
        date: "2020-01-02",
        name_of_couple: "yuval & bracha",
        Total_Gift: 500,
        blessing: "Mazal Tov",
        images: "no",
        recording: "no",
        video: "no",
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
            size="large"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.User_Name}
        </TableCell>
        <TableCell align="right">{row.password}</TableCell>
        <TableCell align="right">{row.first_name}</TableCell>
        <TableCell align="right">{row.last_name}</TableCell>
        <TableCell align="right">{row.email}</TableCell>
        <TableCell align="right">{row.phone}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0, border: "0px" }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box
              sx={{
                margin: 1,
                width: "113%",
                backgroundColor: "#7395AE",
                minHeight: 36,
                textAlign: "center",
                alignItems: "center",
                fontSize: 18,
                borderRadius: 3,
              }}
            >
              <Typography variant="h6" gutterBottom component="div">
                Gifts History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell align="center">Name of couple</TableCell>
                    <TableCell align="center">Total Gift</TableCell>
                    <TableCell align="center">Blessing</TableCell>
                    <TableCell align="center">Images</TableCell>
                    <TableCell align="center">Recording</TableCell>
                    <TableCell align="center">Video</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.History.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell align="center">
                        {historyRow.name_of_couple}
                      </TableCell>
                      <TableCell align="center">
                        {historyRow.Total_Gift}
                      </TableCell>
                      <TableCell align="center">
                        {historyRow.blessing}
                      </TableCell>
                      <TableCell align="center">{historyRow.images}</TableCell>
                      <TableCell align="center">
                        {historyRow.recording}
                      </TableCell>
                      <TableCell align="center">{historyRow.video}</TableCell>
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
    User_Name: PropTypes.string.isRequired,
    password: PropTypes.number.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.number.isRequired,
        name_of_couple: PropTypes.string.isRequired,
        Total_Gift: PropTypes.number.isRequired,
        blrssing: PropTypes.number.isRequired,
        images: PropTypes.string.isRequired,
        recording: PropTypes.string.isRequired,
        video: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

const rows = [
  createData("moti", 12345, "moti", "brodetsky", "moti@gmail.com", 545665164),
  createData("avi", 12345, "avi", "brodetsky", "avi@gmail.com", 545665166),
  createData("jony", 12345, "jony", "jacks", "jony@gmail.com", 545665166),
  createData("yuval", 12345, "yuval", "big", "yuval@gmail.com", 545665166),
  createData("moshe", 12345, "moshe", "mizrachy", "moshe@gmail.com", 545665166),
];

export default function CollapsibleTable() {
  return (
    <div>
        <Navbar />
      <div>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={1100}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={15}
          marginBottom={15}
          padding={3}
          borderRadius={3}
          boxShadow={"5px 5px 10px #ccc"}
          backgroundColor="#557A95"
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell
                    style={{
                      fontSize: 20,
                      fontStyle: "inherit",
                      fontFamily: "fantasy",
                    }}
                  >
                    User Name
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: 17,
                      fontStyle: "inherit",
                      fontFamily: "inherit",
                    }}
                    align="right"
                  >
                    password
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: 17,
                      fontStyle: "inherit",
                      fontFamily: "inherit",
                    }}
                    align="right"
                  >
                    first name
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: 17,
                      fontStyle: "inherit",
                      fontFamily: "inherit",
                    }}
                    align="right"
                  >
                    last name
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: 17,
                      fontStyle: "inherit",
                      fontFamily: "inherit",
                    }}
                    align="right"
                  >
                    email
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: 17,
                      fontStyle: "inherit",
                      fontFamily: "inherit",
                    }}
                    align="right"
                  >
                    phone
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <Row key={row.User_Name} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </div>
    </div>
  );
}