const express = require("express");
const userRoutes = require("./user");
const authRoutes = require("./auth");
const categoryRoutes = require("./category");
const mealRoutes = require("./meal");
const orderRoutes = require("./order");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/category", categoryRoutes);

router.use("/meal", mealRoutes);
router.use("/order", orderRoutes);

module.exports = router;
