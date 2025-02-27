const Category = require("../models/category");

// Get all categories
const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories); // Respond with the list of categories
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Add a new category
const addCategory = async (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res
      .status(400)
      .json({ message: "Please provide both name and description" });
  }

  try {
    const newCategory = new Category({ name, description });
    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory); // Respond with the saved category
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getCategories, addCategory };
