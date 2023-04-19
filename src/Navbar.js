import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="navbar-logo" to="/">
        SportsPredict
      </Link>

      <ul className="Sports">
        <li>
          <Link className="navbar-link" to="/">
            NBA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; NFL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; NHL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MLS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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