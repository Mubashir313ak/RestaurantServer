const express = require("express");
const { protect } = require("../middlewares/auth");
const {
  placeOrder,
  getOrders,
  createPaymentIntent,
} = require("../controllers/order");
const router = express.Router();

router.post("/create-payment-intent", createPaymentIntent);
router.post("/place-order", placeOrder);
router.get("/", protect, getOrders);

module.exports = router;
