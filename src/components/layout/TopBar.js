import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
// import { useDispatch } from 'react-redux'
// import { getCities } from '../../actions/flight'

export const TopBar = () => {
 // const dispatch = useDispatch()
 // useEffect(() => {
 //   dispatch(getCities());
 // }, [])
  return (
    <>
      <nav className="navigation">
        <NavLink
          exact="true"
          className="app-navlink "
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          exact="true"
          className="app-navlink"
          to="/flightBooking"
        >
          Mis reservas
        </NavLink>
      </nav>
    </>
  );
};
