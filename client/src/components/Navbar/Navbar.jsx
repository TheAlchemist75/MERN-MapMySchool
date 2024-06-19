import React from "react";
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
            <span className="navbarLink">Home</span>
            <span className="navbarLink">Contact</span>
            <span className="navbarLink">About</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
