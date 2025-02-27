const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { addExcessiveMeals } = require("../controllers/meal");
dotenv.config();
const createAdmin = async () => {
  const adminExists = await User.findOne({ role: "admin" });

  if (!adminExists) {
    const admin = new User({
      username: "admin",
      email: "admin@example.com", // Change email as needed
      password: "123456",
      role: "admin",
    });

    await admin.save();
    console.log("First admin user created");
  }
};
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("MongoDB connected");
    // await createAdmin();
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
