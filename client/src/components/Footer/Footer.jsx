import React from "react";
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
        <span className="footerLink">Contact Us</span>
      </div>
    </div>
  );
}

export default Footer;
