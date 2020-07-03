import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
function Navbar() {
  return (
    <div className="navbar">
      <NavLink to={"/"}>Books</NavLink>
      <NavLink to={"/movies"}>Movies</NavLink>
    </div>
  );
}
export default Navbar;
