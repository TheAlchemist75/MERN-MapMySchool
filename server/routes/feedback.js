const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");

router.post("/", async (req, res) => {
  const { email, comment } = req.body;
  if (!email || !comment) {
    return res.status(400).json({ message: "Email and comment are required" });
  }

  const newFeedback = new Feedback({
    email,
    comment,
  });

  try {
    await newFeedback.save();
    res.status(201).json({ message: "Feedback submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to submit feedback", error });
  }
});

module.exports = router;
