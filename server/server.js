// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const connectDB = require("./config/db");
// require("dotenv").config();

// const app = express();

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // Connect to MongoDB
// connectDB();

// // Routes
// const authRoutes = require("./routes/auth");
// const dataRoutes = require("./routes/dataRoutes");
// app.use("/api/auth", authRoutes); // Ensure this is correct
// app.use("/api/data", dataRoutes); // Ensure this is correct

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

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Middleware to handle JSON
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/data", dataRoutes);
app.use("/api/homes", homesRoute);

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

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
