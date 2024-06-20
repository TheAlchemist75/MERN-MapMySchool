import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footerRoot">
      <div className="footerLeft">
        <img
          src="/images/logo.png"
          className="footerLogoImage"
          alt="MapMySchool Logo"
        />
        <span className="footerLogoText">MapMySchool</span>
      </div>
      <div className="footerRight">
        <span className="footerLink">Privacy Policy</span>
        <span className="footerLink">Terms of Service</span>
        <Link to="/feedback" className="footerLink">
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Footer;
