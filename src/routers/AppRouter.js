import React from "react";
import {
 BrowserRouter as Router,
 Routes,
 Route,
 Navigate,
} from "react-router-dom";
import { Booking } from "../components/flightBooking/Booking";
import { Home } from "../components/home/Home";
import { TopBar } from "../components/layout/TopBar";

export const AppRouter = () => {
 return (
  <Router>
   <div >
    <TopBar />
    <Routes>
     <Route exact path="/" element={<Home/>} />
     <Route exact path="/flightBooking" element={<Booking />} />
     <Route path="*" element={<Navigate to="/" />} />
    </Routes>
   </div>
  </Router>
 );
};
