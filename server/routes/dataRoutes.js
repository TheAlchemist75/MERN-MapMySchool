const express = require("express");
const router = express.Router();
const { fetchData, getData } = require("../controllers/datacontroller");

router.get("/fetch", fetchData);
router.get("/:type", getData);

module.exports = router;
