import React from "react";
import { CssBaseline, Grid } from "@mui/material";

import Navbar from "./components/Navbar/Navbar";
import MapSchool from "./components/MapSchool/MapSchool";
import Sidebar from "./components/Sidebar/Sidebar";
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <div className="App">
      <CssBaseline />

      <Navbar />

      <Landing />

      {/* --------------Temporarily commented-----------------
      
      <Grid container style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <Sidebar />
        </Grid>

        <Grid item xs={12} md={8}>
          <MapSchool />
        </Grid>
      </Grid> 
      ---------------------------------------------------------*/}
    </div>
  );
}

export default App;
