const express = require("express");
const { protect } = require("../middlewares/auth");
const { getAllUsers } = require("../controllers/user");
const router = express.Router();

// router.get("/", protect, getAllUsers);

module.exports = router;
