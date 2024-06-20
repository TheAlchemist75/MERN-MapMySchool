const express = require("express");
const router = express.Router();
const Home = require("../models/Home");
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
  const { name, address, coordinates } = req.body;

  if (!name || !address || !coordinates) {
    return res.status(400).send("Missing required fields");
  }

  try {
    const newHome = new Home({
      user: req.user.id,
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

router.get("/", auth, async (req, res) => {
  try {
    const homes = await Home.find({ user: req.user.id });
    res.status(200).json(homes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
