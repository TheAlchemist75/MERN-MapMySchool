const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const dataRoutes = require("./routes/dataRoutes");
const homesRoute = require("./routes/homes");
const userRoutes = require("./routes/user");
const bookmarkRoutes = require("./routes/bookmarkRoutes");
const feedbackRouter = require("./routes/feedback");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json({ extended: false }));

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/data", dataRoutes);
app.use("/api/homes", homesRoute);
app.use("/api/user", userRoutes);
app.use("/api/bookmarks", bookmarkRoutes);
app.use("/api/feedback", feedbackRouter);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
