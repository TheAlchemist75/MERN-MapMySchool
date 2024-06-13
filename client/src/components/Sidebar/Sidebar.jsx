// import React, { useState } from "react";

// import jugendberufshilfenData from "../../api/Jugendberufshilfen.geojson";
// import kindertageseinrichtungen from "../../api/Kindertageseinrichtungen.geojson";
// import "./Sidebar.css";

// import DashboardIcon from "@mui/icons-material/Dashboard";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
// import TravelExploreIcon from "@mui/icons-material/TravelExplore";
// import SettingsIcon from "@mui/icons-material/Settings";
// import LogoutIcon from "@mui/icons-material/Logout";

// function Sidebar() {
//   const [dataDropdown, setDataDropdown] = useState(false);
//   const [searchDropdown, setSearchDropdown] = useState(false);
//   const [selectedData, setSelectedData] = useState([]);

//   const handleDataClick = (dataType) => {
//     console.log(`Data type clicked: ${dataType}`);
//     if (dataType === "jugendberufshilfen") {
//       setSelectedData(jugendberufshilfenData.features);
//       console.log(
//         "Jugendberufshilfen data set:",
//         jugendberufshilfenData.features
//       );
//     } else if (dataType === "kindertageseinrichtungen") {
//       setSelectedData(kindertageseinrichtungen.features);
//       console.log(
//         "Kindertageseinrichtungen data set:",
//         kindertageseinrichtungen.features
//       );
//     }
//   };

//   return (
//     <div className="sidebar">
//       <div className="profile">
//         <div className="profile-info">
//           <h2 className="profile-name">Hello, John Doe</h2>
//           <span className="profile-link"></span>
//         </div>
//       </div>
//       <div className="menu">
//         <ul className="menu-list">
//           <li>
//             <a
//               rel="noopener noreferrer"
//               href="#"
//               className="menu-item"
//               onClick={() => setSearchDropdown(!searchDropdown)}
//             >
//               <TravelExploreIcon className="menu-icon" /> Search
//             </a>
//             {searchDropdown && (
//               <div className="search-dropdown">
//                 <input
//                   type="text"
//                   className="search-input"
//                   placeholder="Search..."
//                 />
//               </div>
//             )}
//           </li>
//           <li>
//             <a
//               rel="noopener noreferrer"
//               href="#"
//               className="menu-item"
//               onClick={() => setDataDropdown(!dataDropdown)}
//             >
//               <DashboardIcon className="menu-icon" /> Data
//               {dataDropdown ? (
//                 <ExpandLessIcon className="expand-icon" />
//               ) : (
//                 <ExpandMoreIcon className="expand-icon" />
//               )}
//             </a>
//             {dataDropdown && (
//               <ul className="submenu-list">
//                 <li>
//                   <a
//                     rel="noopener noreferrer"
//                     href="#"
//                     className="submenu-item"
//                     onClick={() => handleDataClick("jugendberufshilfen")}
//                   >
//                     Jugendberufshilfen
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     rel="noopener noreferrer"
//                     href="#"
//                     className="submenu-item"
//                     onClick={() => handleDataClick("kindertageseinrichtungen")}
//                   >
//                     Kindertageseinrichtungen
//                   </a>
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li>
//             <a rel="noopener noreferrer" href="#" className="menu-item">
//               <BookmarkIcon className="menu-icon" /> Saved
//             </a>
//           </li>

//           <li>
//             <a rel="noopener noreferrer" href="#" className="menu-item">
//               <SettingsIcon className="menu-icon" /> Settings
//             </a>
//           </li>
//           <li>
//             <a rel="noopener noreferrer" href="#" className="menu-item">
//               <LogoutIcon className="menu-icon" /> Logout
//             </a>
//           </li>
//         </ul>
//       </div>
//       {selectedData && selectedData.length > 0 && (
//         <div className="data-container">
//           {selectedData.map((item, index) => (
//             <div key={index} className="data-card">
//               <h3>{item.properties.TRAEGER}</h3>
//               <p>{item.properties.LEISTUNGEN}</p>
//               <p>{item.properties.STRASSE}</p>
//               <p>{item.properties.ORT}</p>
//               <p>{item.properties.TELEFON}</p>
//               {item.properties.EMAIL && <p>{item.properties.EMAIL}</p>}
//               {item.properties.FAX && <p>{item.properties.FAX}</p>}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Sidebar;

// ------------------------------------------------------------------------------------------------------------

import React, { useState, useEffect } from "react";
import jugendberufshilfenData from "../../api/Jugendberufshilfen.geojson";
import kindertageseinrichtungen from "../../api/Kindertageseinrichtungen.geojson";
import AddHomeModal from "./Addhomemodal";
import UpdateProfileModal from "./UpdateProfileModal";
import DeleteProfileModal from "./DeleteProfileModal";
import "./Sidebar.css";
import "./Modal.css";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

function Sidebar() {
  const [dataDropdown, setDataDropdown] = useState(false);
  const [settingsDropdown, setSettingsDropdown] = useState(false);
  const [searchDropdown, setSearchDropdown] = useState(false);
  const [selectedData, setSelectedData] = useState([]);
  const [user, setUser] = useState(null);
  const [isAddHomeModalOpen, setIsAddHomeModalOpen] = useState(false);
  const [isUpdateProfileModalOpen, setIsUpdateProfileModalOpen] =
    useState(false);
  const [isDeleteProfileModalOpen, setIsDeleteProfileModalOpen] =
    useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleDataClick = (dataType) => {
    if (dataType === "jugendberufshilfen") {
      setSelectedData(jugendberufshilfenData.features);
    } else if (dataType === "kindertageseinrichtungen") {
      setSelectedData(kindertageseinrichtungen.features);
    }
  };

  return (
    <div className="sidebar">
      <div className="profile">
        <div className="profile-info">
          <h2 className="profile-name">
            {user ? `Hello, ${user.username}` : "Hello, Guest"}
          </h2>
          <span className="profile-link"></span>
        </div>
      </div>
      <div className="menu">
        <ul className="menu-list">
          <li>
            <a
              href="#"
              className="menu-item"
              onClick={() => setSearchDropdown(!searchDropdown)}
            >
              <TravelExploreIcon className="menu-icon" /> Search
            </a>
            {searchDropdown && (
              <div className="search-dropdown">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search..."
                />
              </div>
            )}
          </li>
          <li>
            <a
              href="#"
              className="menu-item"
              onClick={() => setDataDropdown(!dataDropdown)}
            >
              <DashboardIcon className="menu-icon" /> Data
              {dataDropdown ? (
                <ExpandLessIcon className="expand-icon" />
              ) : (
                <ExpandMoreIcon className="expand-icon" />
              )}
            </a>
            {dataDropdown && (
              <ul className="submenu-list">
                <li>
                  <a
                    href="#"
                    className="submenu-item"
                    onClick={() => handleDataClick("jugendberufshilfen")}
                  >
                    Jugendberufshilfen
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="submenu-item"
                    onClick={() => handleDataClick("kindertageseinrichtungen")}
                  >
                    Kindertageseinrichtungen
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="submenu-item"
                    onClick={() => handleDataClick("")}
                  >
                    Schulsozialarbeit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="submenu-item"
                    onClick={() => handleDataClick("")}
                  >
                    Schule
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#" className="menu-item">
              <BookmarkIcon className="menu-icon" /> Saved
            </a>
          </li>
          <li>
            <a
              href="#"
              className="menu-item"
              onClick={() => setSettingsDropdown(!settingsDropdown)}
            >
              <SettingsIcon className="menu-icon" /> Settings
              {settingsDropdown ? (
                <ExpandLessIcon className="expand-icon" />
              ) : (
                <ExpandMoreIcon className="expand-icon" />
              )}
            </a>
            {settingsDropdown && (
              <ul className="submenu-list">
                <li>
                  <a
                    href="#"
                    className="submenu-item"
                    onClick={() => setIsAddHomeModalOpen(true)}
                  >
                    Add Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="submenu-item"
                    onClick={() => setIsUpdateProfileModalOpen(true)}
                  >
                    Update Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="submenu-item"
                    onClick={() => setIsDeleteProfileModalOpen(true)}
                  >
                    Delete Profile
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#" className="menu-item">
              <LogoutIcon className="menu-icon" /> Logout
            </a>
          </li>
        </ul>
      </div>
      {selectedData && selectedData.length > 0 && (
        <div className="data-container">
          {selectedData.map((item, index) => (
            <div key={index} className="data-card">
              <h3>{item.properties.TRAEGER}</h3>
              <p>{item.properties.LEISTUNGEN}</p>
              <p>{item.properties.STRASSE}</p>
              <p>{item.properties.ORT}</p>
              <p>{item.properties.TELEFON}</p>
              {item.properties.EMAIL && <p>{item.properties.EMAIL}</p>}
              {item.properties.FAX && <p>{item.properties.FAX}</p>}
            </div>
          ))}
        </div>
      )}
      <AddHomeModal
        isOpen={isAddHomeModalOpen}
        onClose={() => setIsAddHomeModalOpen(false)}
      />
      <UpdateProfileModal
        isOpen={isUpdateProfileModalOpen}
        onClose={() => setIsUpdateProfileModalOpen(false)}
      />
      <DeleteProfileModal
        isOpen={isDeleteProfileModalOpen}
        onClose={() => setIsDeleteProfileModalOpen(false)}
      />
    </div>
  );
}

export default Sidebar;
