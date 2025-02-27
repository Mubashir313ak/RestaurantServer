const express = require("express");
const { getCategories, addCategory } = require("../controllers/category");
const { protect } = require("../middlewares/auth");

const router = express.Router();

// Get all categories
router.get("/", getCategories);

// Add a new category
router.post("/", protect, addCategory);

module.exports = router;
