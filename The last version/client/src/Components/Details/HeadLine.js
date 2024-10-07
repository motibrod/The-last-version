import React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";


const HeadLine = (props) => {
  console.log("props HeadLine : ", props);
  return (
    <table
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: "10px",
      }}
    >
      <tbody>
        <tr>
          <td>
            <Typography
              sx={{ margin: 10, fontSize: 100, fontFamily: "Dancing Script" }}
              variant="h4"
              gutterBottom
            >
              {props.a}
            </Typography>
          </td>
          <td>
            <Avatar
              sx={{ height: 200, width: 200 }}
              src={require("./images/FCE50652-AE25-4C9E-BC7D-182B49DDDC78.jpg")}
              alt="pic"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default HeadLine;
