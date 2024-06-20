import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img
          src="https://res.cloudinary.com/dcprg19es/image/upload/v1718844458/MapMySchool/pra8dpptakgzooclxsrz.jpg"
          alt="About MapMySchool"
        />
      </div>
      <div className="about-text">
        <h1>About MapMySchool</h1>
        <p>
          MapMySchool is an innovative platform designed to help students,
          parents, and educators locate schools in their area. Our mission is to
          provide comprehensive and accurate information to help you make
          informed decisions about your educational journey. With our
          user-friendly interface, you can easily search for schools, view their
          profiles, and save your favorites for future reference. Whether you're
          looking for the best schools in your neighborhood or exploring new
          areas, MapMySchool is here to guide you every step of the way!
        </p>
      </div>
    </div>
  );
};

export default About;
