const express = require("express");
const { protect } = require("../middlewares/auth");
const {
  getMeals,
  addMeal,
  updateMeal,
  deleteMeal,
  addExcessiveMeals,
} = require("../controllers/meal");
const router = express.Router();

router.get("/get-all-meals", getMeals);
router.post("/", protect, addMeal);
router.post("/add-excessive-meals", protect, addExcessiveMeals);

router.put("/:id", protect, updateMeal);
router.delete("/:id", protect, deleteMeal);

module.exports = router;
