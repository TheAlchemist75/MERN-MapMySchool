// const express = require("express");
// const router = express.Router();
// const auth = require("../middleware/auth");
// const Bookmark = require("../models/Bookmark");

// // Add a bookmark
// router.post("/", auth, async (req, res) => {
//   const { item } = req.body;

//   try {
//     const newBookmark = new Bookmark({
//       user: req.user.id,
//       item,
//     });

//     const bookmark = await newBookmark.save();
//     res.json(bookmark);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server error");
//   }
// });

// // Fetch bookmarks for the authenticated user
// router.get("/", auth, async (req, res) => {
//   try {
//     const bookmarks = await Bookmark.find({ user: req.user.id });
//     res.json({ bookmarks });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server error");
//   }
// });

// // Add a bookmark or update existing
// router.post("/", auth, async (req, res) => {
//   const { item } = req.body;

//   try {
//     let bookmark = await Bookmark.findOne({ user: req.user.id });

//     if (bookmark) {
//       // Update existing bookmark
//       bookmark.item = item;
//       bookmark.date = Date.now();
//       bookmark = await bookmark.save();
//     } else {
//       // Create new bookmark
//       const newBookmark = new Bookmark({
//         user: req.user.id,
//         item,
//       });

//       bookmark = await newBookmark.save();
//     }

//     res.json(bookmark);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server error");
//   }
// });

// module.exports = router;

// server/routes/bookmarkRoutes.js

const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Bookmark = require("../models/Bookmark");

// Add or update a bookmark
router.post("/", auth, async (req, res) => {
  const { item } = req.body;
  const userId = req.user.id;

  try {
    let bookmark = await Bookmark.findOne({ user: userId });

    if (bookmark) {
      // Update existing bookmark
      bookmark.item = item;
      bookmark.date = Date.now();
      bookmark = await bookmark.save();
    } else {
      // Create new bookmark
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

// Fetch bookmarks for the authenticated user
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
