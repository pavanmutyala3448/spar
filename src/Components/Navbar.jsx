import React from "react";
import "./ComponentsStyles/navbar.css";
import { Link } from "react-router-dom";
import logo from "../sparue.png";
const Navbar = () => {
  return (
    <div className="Navbar">
      <nav>
        <img src={logo} alt="logo" />
        <ul>
          <li>
            <Link to="/"> Home </Link>{" "}
          </li>{" "}
          <li>
            <Link to="/Services"> Services </Link>{" "}
          </li>{" "}
          <li>
            <Link to="/Home"> Case Study </Link>{" "}
          </li>{" "}
          <li>
            <Link to="/Home"> About us </Link>{" "}
          </li>{" "}
        </ul>{" "}
        <button> Contact Us </button>{" "}
      </nav>{" "}
    </div>
  );
};
export default Navbar;
