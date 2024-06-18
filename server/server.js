// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// require("dotenv").config();

// const connectDB = require("./config/db");
// const authRoutes = require("./routes/auth");
// const dataRoutes = require("./routes/dataRoutes");
// const homesRoute = require("./routes/homes");

// const app = express();

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // Connect to MongoDB
// connectDB();

// // Middleware to handle JSON
// app.use(express.json());

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/data", dataRoutes);
// app.use("/api/homes", homesRoute);

// // Bookmarks
// let bookmarkedItem = null;
// app.get("/api/bookmark", (req, res) => {
//   if (bookmarkedItem) {
//     res.status(200).json({ item: bookmarkedItem });
//   } else {
//     res.status(404).json({ message: "No bookmarked item found" });
//   }
// });

// // POST Endpoint to save bookmarked item
// app.post("/api/bookmark", (req, res) => {
//   const { item } = req.body;
//   if (item) {
//     bookmarkedItem = item; // Store the bookmarked item in memory (replace with database logic in production)
//     res.status(200).json({ message: "Bookmark saved successfully" });
//   } else {
//     res.status(400).json({ message: "Invalid data" });
//   }
// });

// // Define the homes endpoint
// app.get("/api/homes", (req, res) => {
//   // Fetch homes data from your database or any other source
//   homesRoute.find({}, (err, homesData) => {
//     if (err) {
//       return res.status(500).json({ error: "Error fetching homes data" });
//     }
//     res.json({ features: homesData });
//   });
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const dataRoutes = require("./routes/dataRoutes");
const homesRoute = require("./routes/homes");
const userRoutes = require("./routes/user");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/data", dataRoutes);
app.use("/api/homes", homesRoute);
app.use("/api/user", userRoutes); // Ensure user routes are added here

// Bookmarks
let bookmarkedItem = null;
app.get("/api/bookmark", (req, res) => {
  if (bookmarkedItem) {
    res.status(200).json({ item: bookmarkedItem });
  } else {
    res.status(404).json({ message: "No bookmarked item found" });
  }
});

// POST Endpoint to save bookmarked item
app.post("/api/bookmark", (req, res) => {
  const { item } = req.body;
  if (item) {
    bookmarkedItem = item; // Store the bookmarked item in memory (replace with database logic in production)
    res.status(200).json({ message: "Bookmark saved successfully" });
  } else {
    res.status(400).json({ message: "Invalid data" });
  }
});

// Define the homes endpoint
app.get("/api/homes", (req, res) => {
  // Fetch homes data from your database or any other source
  homesRoute.find({}, (err, homesData) => {
    if (err) {
      return res.status(500).json({ error: "Error fetching homes data" });
    }
    res.json({ features: homesData });
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
