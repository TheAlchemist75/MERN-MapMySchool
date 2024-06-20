const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Bookmark = require("../models/Bookmark");

router.post("/", auth, async (req, res) => {
  const { item } = req.body;
  const userId = req.user.id;

  try {
    let bookmark = await Bookmark.findOne({ user: userId });

    if (bookmark) {
      bookmark.item = item;
      bookmark.date = Date.now();
      bookmark = await bookmark.save();
    } else {
      const newBookmark = new Bookmark({
        user: userId,
        item,
      });

      bookmark = await newBookmark.save();
    }

    res.json(bookmark);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const bookmarks = await Bookmark.find({ user: req.user.id });
    res.json({ bookmarks });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
