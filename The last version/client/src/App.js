import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsPage from "./Pages/Details_page";
import LoginPage from "./Pages/Login_page";
import Payment from "./Pages/Payment";
import Admin from "./Pages/Admin";
import CoupleNames from "./Components/Details/Couple_names";
import History from "./Pages/History";
import Manager from "./Pages/Event_manager_page";
import AddEvent from "./Components/Manager/AddEvent";
import Blessing from "./Pages/Blessing_page";
import Fqa from "./Pages/Fqa";
import TheEnd from "./Pages/TheEnd";

export const Context = createContext();

function App() {
  const [IsEvent, setIsEvent] = useState(true);
  const [userId, setUserId] = useState("");
  const [detailsId, setDetailsId] = useState([]);
  const [state, setState] = useState();
  const [event, setEvent] = useState({
    _id: {
      $oid: "63932607ce449ca31a572268",
    },
    NameOfGroom: "Moti",
    NameOfBride: "Ayelet",
    NameOfManager: "Moti Brodetsky",
    TypeOfEvent: "Wedding",
    NumOfGuests: 200,
    phone: 5169919648,
    userid_event: "6394ad8e8ed751bf44bbefa9",
    DateOfEvent: {
      $date: {
        $numberLong: "2022-12-10T16:02:22.882+00:00",
      },
    },
    // image:{
    //   data:
    // }
    __v: 0,
  });
  return (
    <div>
      <Context.Provider
        value={{
          IsEvent,
          setIsEvent,
          userId,
          setUserId,
          detailsId,
          setDetailsId,
          event,
          setEvent,
          state,
          setState,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route element={<LoginPage />} path="/"></Route>
            <Route element={<DetailsPage />} path="/Details"></Route>
            <Route element={<Payment />} path="/Payment"></Route>
            <Route element={<Admin />} path="/Admin"></Route>
            <Route element={<History />} path="/History"></Route>
            <Route element={<CoupleNames />} path="/CoupleNames"></Route>
            <Route element={<Manager />} path="/EventManager"></Route>
            <Route element={<AddEvent />} path="/AddEvent"></Route>
            <Route element={<Blessing />} path="/Blessing"></Route>
            <Route element={<Fqa />} path="/Fqa"></Route>
            <Route element={<TheEnd />} path="/TheEnd"></Route>
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
