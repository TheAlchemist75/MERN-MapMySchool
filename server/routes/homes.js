const express = require("express");
const router = express.Router();
const Home = require("../models/Home");

// POST /api/homes
router.post("/", async (req, res) => {
  const { name, address, coordinates } = req.body;

  if (!name || !address || !coordinates) {
    return res.status(400).send("Missing required fields");
  }

  try {
    const newHome = new Home({
      name,
      address,
      coordinates,
    });

    await newHome.save();
    res.status(201).send(newHome);
  } catch (error) {
    res.status(500).send(error);
  }
});

// GET /api/homes
router.get("/", async (req, res) => {
  try {
    const homes = await Home.find();
    res.status(200).send(homes);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
