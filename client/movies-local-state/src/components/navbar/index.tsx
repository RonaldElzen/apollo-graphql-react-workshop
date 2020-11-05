import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
function Navbar() {
  return (
    <div className="navbar">
      <NavLink to={"/"}>Books</NavLink>
      <NavLink to={"/movies"}>Movies</NavLink>
      <NavLink to={"/filteredMovies"}>Movies filter</NavLink>
    </div>
  );
}
export default Navbar;
