// import React from "react";
// import "./NavbarStyles.css";
// import { Search } from "@mui/icons-material";

// function Navbar() {
//   return (
//     <div>
//       <nav className="navbarRoot">
//         <div className="leftContainer">
//           <div className="logo">
//             <img
//               src="/images/logo.png"
//               style={{ width: "70px", marginLeft: "10px" }}
//               alt="MapMySchool Logo"
//             />
//           </div>
//           <span className="logoText">MapMySchool</span>
//         </div>

//         <div className="centerContainer">
//           <div className="navbarLinks">
//             <span className="navbarLink">Home</span>
//             <span className="navbarLink">Services</span>
//             <span className="navbarLink">About</span>
//           </div>
//           <div className="navbarIcons">
//             <div className="navbarIconsItem"></div>
//           </div>
//         </div>

//         <div className="leftContainer">
//           <div className="search">
//             <Search className="searchIcon" />
//             <input placeholder="Explore places..." className="searchInput" />
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;

import React from "react";
import "./NavbarStyles.css";
import { Search } from "@mui/icons-material";

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

        <div className="centerContainer">
          <div className="navbarLinks">
            <span className="navbarLink">Home</span>
            <span className="navbarLink">Services</span>
            <span className="navbarLink">About</span>
          </div>
        </div>

        <div className="rightContainer">
          <div className="search">
            <Search className="searchIcon" />
            <input placeholder="Explore places..." className="searchInput" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
