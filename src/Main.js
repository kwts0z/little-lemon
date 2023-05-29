import { Routes, Route, redirect, useNavigate} from "react-router-dom"
import React, {useReducer} from "react";
import { useEffect } from "react";

import HomePage from "./Components/HomePage";
import About from "./Components/About";
import Menu from "./Components/Menu";
import Order from "./Components/Order";
import Login from "./Components/Login";
import BookingPage from "./Components/BookingPage";
import {fetchAPI, submitAPI} from "./bookingAPI"
import ConfirmedBooking from "./Components/ConfirmedBooking";

function Main(){

  const updateTimes = (state, action) => {
    if (action.type === 'example') return fetchAPI(action.date);
    return state;
  };

  function initializeTimes(){
    const today = new Date();
    const initialTimes = fetchAPI(today);
    return initialTimes;
  };
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const navigate = useNavigate();

  const submitForm = (formData) => {
    const confirmed = submitAPI(formData);
    if(confirmed){
      navigate('/confirmedbooking');
    }
  };

  return(
    <main data-testid="main">
      <Routes>
          <Route path="/" element={<HomePage/>}>HomePage</Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/menu" element={<Menu/>}></Route>
          <Route path="/reservation" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>}></Route>
          <Route path="/order" element={<Order/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/confirmedbooking" element={<ConfirmedBooking/>}></Route>
      </Routes>
    </main>
  );
}

export default Main;