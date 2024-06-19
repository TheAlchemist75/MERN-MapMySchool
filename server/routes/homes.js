const express = require("express");
const router = express.Router();
const Home = require("../models/Home"); // Import the Home model
const auth = require("../middleware/auth"); // Import authentication middleware

// POST /api/homes
router.post("/", auth, async (req, res) => {
  const { name, address, coordinates } = req.body;

  if (!name || !address || !coordinates) {
    return res.status(400).send("Missing required fields");
  }

  try {
    const newHome = new Home({
      user: req.user.id, // Assign the user ID from auth middleware
      name,
      address,
      coordinates,
    });

    await newHome.save();
    res.status(201).send(newHome);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// GET /api/homes
router.get("/", auth, async (req, res) => {
  try {
    const homes = await Home.find({ user: req.user.id }); // Ensure you are fetching homes for the authenticated user
    res.status(200).json(homes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
