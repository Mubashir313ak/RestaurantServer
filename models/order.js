const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [
    {
      meal: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Meal",
        required: true,
      },
      quantity: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
  status: { type: String, default: "Pending" }, // Pending, In Progress, Completed
  orderDate: { type: Date, default: Date.now },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  paymentMethod: {
    type: String,
    enum: ["cash", "card"],
    required: true,
  }, // cash or card
  paymentStatus: {
    type: String,
    enum: ["pending", "completed", "failed"],
    default: "pending",
  },
  cardPaymentDetails: {
    cardNumber: { type: String },
    cardExpiry: { type: String },
    cardCVV: { type: String },
  },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
