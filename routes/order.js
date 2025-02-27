const express = require("express");
const { protect } = require("../middlewares/auth");
const { placeOrder, getOrders } = require("../controllers/order");
const router = express.Router();

router.post("/", protect, placeOrder);
router.get("/", protect, getOrders);

module.exports = router;
