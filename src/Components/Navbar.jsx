import React from "react";
import "./ComponentsStyles/navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../sparue.png";
const Navbar = () => {
  return (
    <div className="Navbar">
      <nav>
        <img src={logo} alt="logo" />
        <ul>
          <li>
            <NavLink exact activeClassName="current" to="/">
              {" "}
              Home{" "}
            </NavLink>{" "}
          </li>{" "}
          <li>
            <NavLink exact activeClassName="current" to="/Services">
              {" "}
              Services{" "}
            </NavLink>{" "}
          </li>{" "}
          <li>
            <NavLink exact activeClassName="current" to="/CaseStudy">
              {" "}
              Case Study{" "}
            </NavLink>{" "}
          </li>{" "}
          <li>
            <NavLink exact activeClassName="current" to="/About">
              {" "}
              About us{" "}
            </NavLink>{" "}
          </li>{" "}
        </ul>{" "}
        <button> Contact Us </button>{" "}
      </nav>{" "}
    </div>
  );
};
export default Navbar;
