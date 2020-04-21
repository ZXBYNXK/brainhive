import React from "react";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <nav style={style}>
      <li>
        <NavLink to="/">
        <div className="nav-item">
          <img className="logo" src="https://bit.ly/3ep0Q4Y" />
          <span className="title">BrainHive </span>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink to="/share-resource">
        <br />
        <div className="nav-item">
          <span className="nav-link">Share</span>
          </div>
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
  justifyContent: "space-around"
};

export default NavBar;
