// import React, { useState, useEffect } from "react";
// import AddHomeModal from "./Addhomemodal";
// import UpdateProfileModal from "./UpdateProfileModal";
// import DeleteProfileModal from "./DeleteProfileModal";
// import DataModal from "./DataModal";
// import "./Sidebar.css";
// import "./Modal.css";
// import config from "../../config";

// import DashboardIcon from "@mui/icons-material/Dashboard";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
// import TravelExploreIcon from "@mui/icons-material/TravelExplore";
// import SettingsIcon from "@mui/icons-material/Settings";
// import LogoutIcon from "@mui/icons-material/Logout";

// const apiUrls = {
//   jugendberufshilfen: `${config.backendUrl}/api/data/jugendberufshilfen`,
//   kindertageseinrichtungen: `${config.backendUrl}/api/data/kindertageseinrichtungen`,
//   schulsozialarbeit: `${config.backendUrl}/api/data/schulsozialarbeit`,
//   schulen: `${config.backendUrl}/api/data/schulen`,
// };

// function Sidebar() {
//   const [dataDropdown, setDataDropdown] = useState(false);
//   const [settingsDropdown, setSettingsDropdown] = useState(false);
//   const [searchDropdown, setSearchDropdown] = useState(false);
//   const [selectedData, setSelectedData] = useState(null);
//   const [user, setUser] = useState(null);
//   const [isAddHomeModalOpen, setIsAddHomeModalOpen] = useState(false);
//   const [isUpdateProfileModalOpen, setIsUpdateProfileModalOpen] =
//     useState(false);
//   const [isDeleteProfileModalOpen, setIsDeleteProfileModalOpen] =
//     useState(false);
//   const [isDataModalOpen, setIsDataModalOpen] = useState(false);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const handleDataClick = async (dataType) => {
//     try {
//       const response = await fetch(apiUrls[dataType]);
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const data = await response.json();
//       setSelectedData(data.features);
//       setIsDataModalOpen(true);
//     } catch (error) {
//       console.error("Fetch error:", error);
//     }
//   };

//   return (
//     <div className="sidebar">
//       <div className="profile">
//         <div className="profile-info">
//           <h2 className="profile-name">
//             {user ? `Hello, ${user.username}` : "Hello, Guest"}
//           </h2>
//         </div>
//       </div>
//       <div className="menu">
//         <ul className="menu-list">
//           <li>
//             <a
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
//                     href="#"
//                     className="submenu-item"
//                     onClick={() => handleDataClick("jugendberufshilfen")}
//                   >
//                     Jugendberufshilfen
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="submenu-item"
//                     onClick={() => handleDataClick("kindertageseinrichtungen")}
//                   >
//                     Kindertageseinrichtungen
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="submenu-item"
//                     onClick={() => handleDataClick("schulsozialarbeit")}
//                   >
//                     Schulsozialarbeit
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="submenu-item"
//                     onClick={() => handleDataClick("schulen")}
//                   >
//                     Schulen
//                   </a>
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li>
//             <a href="#" className="menu-item">
//               <BookmarkIcon className="menu-icon" /> Saved
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="menu-item"
//               onClick={() => setSettingsDropdown(!settingsDropdown)}
//             >
//               <SettingsIcon className="menu-icon" /> Settings
//               {settingsDropdown ? (
//                 <ExpandLessIcon className="expand-icon" />
//               ) : (
//                 <ExpandMoreIcon className="expand-icon" />
//               )}
//             </a>
//             {settingsDropdown && (
//               <ul className="submenu-list">
//                 <li>
//                   <a
//                     href="#"
//                     className="submenu-item"
//                     onClick={() => setIsAddHomeModalOpen(true)}
//                   >
//                     Add Home
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="submenu-item"
//                     onClick={() => setIsUpdateProfileModalOpen(true)}
//                   >
//                     Update Profile
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="submenu-item"
//                     onClick={() => setIsDeleteProfileModalOpen(true)}
//                   >
//                     Delete Profile
//                   </a>
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li>
//             <a href="#" className="menu-item">
//               <LogoutIcon className="menu-icon" /> Logout
//             </a>
//           </li>
//         </ul>
//       </div>
//       <AddHomeModal
//         isOpen={isAddHomeModalOpen}
//         onClose={() => setIsAddHomeModalOpen(false)}
//       />
//       <UpdateProfileModal
//         isOpen={isUpdateProfileModalOpen}
//         onClose={() => setIsUpdateProfileModalOpen(false)}
//       />
//       <DeleteProfileModal
//         isOpen={isDeleteProfileModalOpen}
//         onClose={() => setIsDeleteProfileModalOpen(false)}
//       />
//       <DataModal
//         isOpen={isDataModalOpen}
//         onClose={() => setIsDataModalOpen(false)}
//         data={selectedData}
//       />
//     </div>
//   );
// }

// export default Sidebar;
// ----------------------------------------------------------

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddHomeModal from "./Addhomemodal";
import UpdateProfileModal from "./UpdateProfileModal";
import DeleteProfileModal from "./DeleteProfileModal";
import DataModal from "./DataModal";
import BookmarkModal from "./BookmarkModal";
import "./Sidebar.css";
import "./Modal.css";
import config from "../../config";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const apiUrls = {
  jugendberufshilfen: `${config.backendUrl}/api/data/jugendberufshilfen`,
  kindertageseinrichtungen: `${config.backendUrl}/api/data/kindertageseinrichtungen`,
  schulsozialarbeit: `${config.backendUrl}/api/data/schulsozialarbeit`,
  schulen: `${config.backendUrl}/api/data/schulen`,
};

function Sidebar() {
  const [dataDropdown, setDataDropdown] = useState(false);
  const [settingsDropdown, setSettingsDropdown] = useState(false);
  const [searchDropdown, setSearchDropdown] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [user, setUser] = useState(null);
  const [isAddHomeModalOpen, setIsAddHomeModalOpen] = useState(false);
  const [isUpdateProfileModalOpen, setIsUpdateProfileModalOpen] =
    useState(false);
  const [isDeleteProfileModalOpen, setIsDeleteProfileModalOpen] =
    useState(false);
  const [isDataModalOpen, setIsDataModalOpen] = useState(false);
  const [isBookmarkModalOpen, setIsBookmarkModalOpen] = useState(false);
  const [bookmarkedItem, setBookmarkedItem] = useState(null);

  const navigate = useNavigate(); // Initialize the useNavigate hook

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    const fetchBookmarkedItem = async () => {
      try {
        console.log(`${config.backendUrl}/api/bookmark`);
        const response = await fetch(`${config.backendUrl}/api/bookmark`, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch bookmarked item");
        }

        const result = await response.json();
        setBookmarkedItem(result.item);
      } catch (error) {
        console.error("Error fetching bookmarked item:", error);
      }
    };

    fetchBookmarkedItem();
  }, []);

  const handleDataClick = async (dataType) => {
    try {
      const response = await fetch(apiUrls[dataType]);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setSelectedData(data.features);
      setIsDataModalOpen(true);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const handleBookmark = (item) => {
    setBookmarkedItem(item);
  };

  const handleLogout = () => {
    localStorage.clear(); // Clear all local storage data
    navigate("/login"); // Redirect to the login page
  };

  return (
    <div className="sidebar">
      <div className="profile">
        <div className="profile-info">
          <h2 className="profile-name">
            {user ? `Hello, ${user.username}` : "Hello, Guest"}
          </h2>
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
                    onClick={() => handleDataClick("schulsozialarbeit")}
                  >
                    Schulsozialarbeit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="submenu-item"
                    onClick={() => handleDataClick("schulen")}
                  >
                    Schulen
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a
              href="#"
              className="menu-item"
              onClick={() => setIsBookmarkModalOpen(true)}
            >
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
            <a href="#" className="menu-item" onClick={handleLogout}>
              <LogoutIcon className="menu-icon" /> Logout
            </a>
          </li>
        </ul>
      </div>
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
      <DataModal
        isOpen={isDataModalOpen}
        onClose={() => setIsDataModalOpen(false)}
        data={selectedData}
        onBookmark={handleBookmark}
      />
      <BookmarkModal
        isOpen={isBookmarkModalOpen}
        onClose={() => setIsBookmarkModalOpen(false)}
        bookmarkedItem={bookmarkedItem}
      />
    </div>
  );
}

export default Sidebar;
