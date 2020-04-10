import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="logo" />
      </Link>
      <div className="navbar-collapse collapse show ml-sm-5">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <Link to="/" className="nav-link text-dark">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/recepies" className="nav-link text-dark">
              Recepies
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
