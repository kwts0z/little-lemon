import { Routes, Route} from "react-router-dom"
import React, {useReducer} from "react";

import HomePage from "./Components/HomePage";
import About from "./Components/About";
import Menu from "./Components/Menu";
import Order from "./Components/Order";
import Login from "./Components/Login";
import BookingPage from "./Components/BookingPage";

function Main(){
  const updateTimes = (state, action) => {
    if (action.type === 'example') return ["15:00", "16:00", "19:00"];
    return state;
  }

  const initializeTimes = () => {
    const initialTimes = ["15:00", "16:00", "17:00", "18:00", "19:00"];
    return initialTimes;
  }

  const initialTimess = ["15:00", "16:00", "17:00", "18:00", "19:00"];

  const [availableTimes, dispatch] = useReducer(updateTimes, initialTimess);

  return(
    <main>
      <Routes>
          <Route path="/" element={<HomePage/>}>HomePage</Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/menu" element={<Menu/>}></Route>
          <Route path="/reservation" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch}/>}></Route>
          <Route path="/order" element={<Order/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </main>
  );
}

export default Main;