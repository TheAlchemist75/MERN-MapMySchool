import React from "react";
import { Link } from "react-router-dom";

import "./NavbarStyles.css";

function Navbar() {
  return (
    <div>
      <nav className="navbarRoot">
        <Link to="/map-school">
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
        </Link>

        <div className="rightContainer">
          <div className="navbarLinks">
            <Link to="/map-school" className="navbarLink">
              Home
            </Link>
            <Link to="/about" className="navbarLink">
              About
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
