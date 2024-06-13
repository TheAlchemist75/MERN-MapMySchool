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
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Middleware to handle JSON
app.use(express.json());

// Routes
const authRoutes = require("./routes/auth");
const dataRoutes = require("./routes/dataRoutes");
app.use("/api/auth", authRoutes);
app.use("/api/data", dataRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
