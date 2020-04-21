import React from "react";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <nav style={style}>
      <li>
        <NavLink to="/">
          <img className="logo" src="https://bit.ly/3ep0Q4Y" />
          <span className="title">BrainHive </span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/share-resource">
          <span className="nav-link">Share</span>
        </NavLink>
      </li>
    </nav>
  );
}

const style = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  listStyleType: "none",
};

export default NavBar;
