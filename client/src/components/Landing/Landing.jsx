import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{
        background:
          "linear-gradient(135deg, #fbfbff 0%, #d5e6fd 50%, #fbfbff 100%, #7db9e8 100%)",
      }}
    >
      <div className="flex flex-col gap-8 items-center justify-center text-center">
        <h1 className="text-5xl font-bold text-gray-800 custom-font">
          Discover the Best Schools Near You
          <br />
          with MapMySchool
        </h1>
        <p className="text-gray-600 text-lg">
          Navigate Your Education Journey with Ease with MapMySchool
        </p>
        <div className="flex flex-col gap-4">
          <button
            className="bg-gray-800 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
            onClick={handleGetStarted}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
