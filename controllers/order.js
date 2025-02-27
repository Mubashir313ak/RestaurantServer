const Order = require("../models/order");
const Meal = require("../models/meal");

const placeOrder = async (req, res) => {
  const { items } = req.body; // items will contain meal IDs and quantity
  const customerId = req.user.id; // Assuming `req.user.id` is set by authentication middleware

  try {
    // Validate if meals exist
    const meals = await Meal.find({
      _id: { $in: items.map((item) => item.meal) },
    });

    // Check if all meals exist
    if (meals.length !== items.length) {
      return res
        .status(400)
        .json({ message: "Some meals in the order do not exist." });
    }

    // Calculate total amount
    let totalAmount = 0;
    items.forEach((item) => {
      const meal = meals.find((meal) => meal._id.toString() === item.meal);
      totalAmount += meal.price * item.quantity;
    });

    // Create the order
    const newOrder = new Order({
      customerId,
      items,
      totalAmount,
    });

    // Save the order
    const savedOrder = await newOrder.save();

    // Send response
    res.status(201).json({
      message: "Order placed successfully!",
      order: savedOrder,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error while placing order" });
  }
};
const getOrders = async (req, res) => {
  const customerId = req.user.id; // The authenticated user's ID

  try {
    // If the user is an admin, fetch all orders; otherwise, fetch only the customer's orders
    let orders;
    if (req.user.role === "admin") {
      orders = await Order.find().populate("customerId", "username email"); // Populating customer details
    } else {
      orders = await Order.find({ customerId }).populate(
        "customerId",
        "username email"
      );
    }

    // Send response with orders
    res.status(200).json({ orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error while fetching orders" });
  }
};
module.exports = { placeOrder, getOrders };
