import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="navbar-logo" to="./App.js">
        SportsPredict
      </Link>

      <ul className="Sports">
        <li>
          <Link className="sports-link" to="/">
            NBA 
          </Link>
        </li>
        <li>
          <Link className="sports-link" to="/">
            NFL
          </Link>
        </li>
        <li>
          <Link className="sports-link" to="/">
            NHL
          </Link>
        </li>
        <li>
          <Link className="sports-link" to="/">
            MLS
          </Link>
        </li>
        
      </ul>
      <ul className="navbar-links">
        <li className="navbar-item">
          <Link className="navbar-link" to="/">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/about">
            About
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;