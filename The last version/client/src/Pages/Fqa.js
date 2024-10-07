import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Navbar from "../Components/Navbar/Navbar";

const data = {
  title: "FAQ (How it works)",
  rows: [
    {
      id: 1,
      title: "What are the services do you offer in 'Easy Gift' ?",
      content:
        "Our website offers gift transfer for the event in a simple and clean way. In addition, it offers summary services for receiving gifts or adding a new event depending on the level of registration in the system (guest, registered, event owner, admin).",
    },
    {
      id: 2,
      title: "what are our preferred method of payment ?",
      content:
        "The site currently has one option to pay through PayPal in the form of dollars. In the next version there will be more possibility of different types of coins and api.",
    },
    {
      id: 3,
      title: "How do I open an account ?",
      content:
        "On the first page of the site there are 4 registration options: the first is for those already registered, the second for new registration, the third for guests, and the fourth for the owner of the event.",
    },
    {
      id: 4,
      title: "How do I track how many people send an gifts",
      content:
        "The guest does not have such an option, to register you can see on the history page (found in the navigation bar above) a summary of all the gifts, on which event, dates and amount and which greeting was sent.",
    },
    {
      id: 5,
      title: "Where are your offices located around the world",
      content:
        "Currently in Israel only, I wish we would expand to the whole world",
    },
    {
      id: 6,
      title: "How do I open an new event ?",
      content:
        "After entering the site as an event owner, on the add events page there is a button to add a new event and fill in all the required details",
    },
    {
      id: 7,
      title: "Can I cancel a gift ?",
      content:
        "No, maybe there will be an option in the next version",
    },
    {
      id: 8,
      title: "How do I get started in 'Easy Gift' ?",
      content:
        "Enters the site, registers or is a guest, fills in the required details and sends.",
    },
    {
      id: 9,
      title: "How do I download the 'Easy Gift' app ?",
      content:
        "At the moment, unfortunately, there is no application, but the extension to the application is at the peak of its work and will be very soon.",
    },
    {
      id: 10,
      title: "What are the supported devices for 'Easy Gift' ?",
      content:
        "At the moment, the preferred and cleanest way is through a computer or laptop.",
    },
    {
      id: 11,
      title: "What are the system requirements for 'Easy Gift' ?",
      content:
        "Names, email, password, phone number, credit details or PayPal account.",
    },
    {
      id: 12,
      title: "Who can use 'Easy Gift' ?",
      content:
        "Anyone who needs and has access to credit or a PayPal account.",
    },
    {
      id: 13,
      title: "How do I change the language ?",
      content:
        "button in the navigation bar at the top on the right side, currently the site is only available in English, there will also be Hebrew in the next version",
    },
    {
      id: 14,
      title: "How do I reset my password ?",
      content:
        " ",
    },
    {
      id: 15,
      title: "How do I update my profile/account ?",
      content:
        " ",
    },
    {
      id: 16,
      title: "I can't solve the issue, what do I do?",
      content:
        " ",
    },
    {
      id: 17,
      title: "What are the 'Easy Gift' requirements?",
      content:
        " ",
    },
    {
      id: 18,
      title: "What can I/can't I do in the 'Easy Gift'?",
      content:
        " ",
    },
    {
      id: 19,
      title: "What are the age restrictions to use 'Easy Gift' ?",
      content:
        " ",
    },
    {
      id: 20,
      title: "Can I change my blessings?",
      content:
        " ",
    },
    {
      id: 21,
      title: "My credit card was declined, what do I do?",
      content:
        " ",
    },
  ],
};

const styles = {
  bgColor: "#D6E4F0",
  titleTextColor: "black",
  rowTitleColor: "black",
  rowContentColor: "black",
  arrowColor: "black",
};

// const config = {
//   // animate: true,
//   // arrowIcon: "V",
//   // tabFocus: true
// };

export default function SampleFaqApp() {
  const [rows, setRowsOption] = useState(null);

  useEffect(() => {
    if (rows) {
      setTimeout(() => {
        rows[0].expand();
      }, 2500);

      setTimeout(() => {
        rows[0].close();
      }, 5000);

      setTimeout(() => {
        rows[0].scrollIntoView();
        // rows[0].scrollIntoView(true);
      }, 10000);
    }
  }, [rows]);

  return (
    <div>
      <Navbar />
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
        FAQ section
      </Typography>
      <Box
        display="flex"
        flexDirection={"column"}
        maxWidth={1100}
        alignItems="center"
        justifyContent={"center"}
        margin={10}
        marginLeft={18}
        marginTop={1}
        padding={5}
        borderRadius={5}
        backgroundColor={"#D6E4F0"}
        boxShadow={"5px 5px 10px #ccc"}
        sx={{
          ":hover": {
            boxShadow: "10px 10px 20px #ccc",
          },
        }}
      >
        <div className="faq-style-wrapper">
          {/* <Faq data={data.id} /> */}
          <Faq data={data} getRowOptions={setRowsOption} styles={styles} />
        </div>
      </Box>
    </div>
  );
}