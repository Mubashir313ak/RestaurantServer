const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Order = require("../models/order");
const Meal = require("../models/meal");
const User = require("../models/user");

const createPaymentIntent = async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd", // or your desired currency
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create payment intent" });
  }
};
const placeOrder = async (req, res) => {
  try {
    const { items, address, paymentMethod, cardPaymentDetails } = req.body;
    console.log("items", items);

    // Validate required fields
    if (!items || !address || !paymentMethod) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Fetch the user details (you can replace this with dynamic user fetching if needed)
    const user = await User.findById("67c034c940df205e424839df");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Calculate total price
    let totalAmount = 0;
    const itemDetails = [];

    for (const item of items) {
      const meal = await Meal.findById(item.meal);
      if (!meal) {
        return res
          .status(400)
          .json({ message: `Meal with ID ${item.meal} not found` });
      }

      // Log the fetched meal for debugging
      console.log(
        `Item: ${item.meal}, Quantity: ${item.quantity}, Price: ${meal.price}`
      );
      console.log(`Meal price for ${meal.name}: $${meal.price}`);
      // Calculate the price for the current item
      totalAmount += meal.price * item.quantity; // Accumulate price for each item
      itemDetails.push({ meal: meal._id, quantity: item.quantity });
    }

    // Log the total amount calculated
    console.log("Total amount calculated:", totalAmount); // For debugging

    let paymentStatus = "pending"; // Default status
    let paymentIntentId = null;

    // Handle card payments
    if (paymentMethod === "card") {
      // If paymentMethod is card, ensure card details are provided
      if (!cardPaymentDetails || !cardPaymentDetails.paymentIntentId) {
        return res.status(400).json({ message: "Invalid payment method" });
      }

      paymentIntentId = cardPaymentDetails.paymentIntentId; // Use paymentIntentId

      // Retrieve the PaymentIntent from Stripe using paymentIntentId
      const paymentIntent = await stripe.paymentIntents.retrieve(
        paymentIntentId
      );

      // Check payment status
      if (paymentIntent.status === "succeeded") {
        paymentStatus = "completed";
      } else if (paymentIntent.status === "requires_action") {
        // If the payment requires further action (like 3D Secure), send the client secret
        return res.status(400).json({
          message: "Payment requires further authentication.",
          clientSecret: paymentIntent.client_secret, // Send the client secret to frontend
        });
      } else {
        return res
          .status(400)
          .json({ message: "Payment failed. Please try again." });
      }
    }

    // Create the order with the calculated total and payment status
    const newOrder = new Order({
      customerId: user._id,
      items: itemDetails,
      totalAmount,
      address,
      paymentMethod,
      paymentStatus,
      paymentIntentId,
    });

    // Save the order to the database
    await newOrder.save();

    // Respond with success
    res.status(201).json({
      message: "Order placed successfully!",
      order: newOrder,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
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
module.exports = { placeOrder, getOrders, createPaymentIntent };
