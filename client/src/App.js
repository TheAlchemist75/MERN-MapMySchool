import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@mui/material";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MapSchool from "./components/MapSchool/MapSchool";
import Sidebar from "./components/Sidebar/Sidebar";
import LandingPage from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (token) => {
    setToken(token);
    setIsLoggedIn(true);
    localStorage.setItem("token", token);
  };

  return (
    <div className="App">
      <CssBaseline />
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/map-school"
            element={
              isLoggedIn ? (
                <Grid container style={{ width: "100%" }}>
                  <Grid item xs={12} md={3}>
                    <Sidebar />
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <MapSchool token={token} />
                  </Grid>
                </Grid>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
