import React from "react";
import { Link } from "react-router-dom";

import "./NavbarStyles.css";

function Navbar() {
  return (
    <div>
      <nav className="navbarRoot">
        <div className="leftContainer">
          <div className="logo">
            <img
              src="/images/logo.png"
              className="logoImage"
              alt="MapMySchool Logo"
            />
          </div>
          <span className="logoText">MapMySchool</span>
        </div>

        <div className="rightContainer">
          <div className="navbarLinks">
            <Link to="/map-school" className="navbarLink">
              Home
            </Link>
            <Link to="/about" className="navbarLink">
              About
            </Link>
            <Link to="/contact" className="navbarLink">
              Contact
            </Link>
            <Link to="/feedback" className="navbarLink">
              Feedback
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
