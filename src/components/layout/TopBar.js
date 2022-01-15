import React from "react";
import { NavLink } from "react-router-dom";

export const TopBar = () => {
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
