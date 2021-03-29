import React from "react";
import { NavLink } from "react-router-dom";
import "./NavItems.css";

const NavItems = () => {
  return (
    <ul className="navitems">
      <li>
        <NavLink className="navtext" to="/homepage">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="navtext" to="/">
          Sign In
        </NavLink>
      </li>
      <li>
        <NavLink className="navtext" to="/signup">
          Sign Up
        </NavLink>
      </li>
    </ul>
  );
};

export default NavItems;
