const Meal = require("../models/meal");
const Category = require("../models/category");
const { sampleAppetizers } = require("../data/meals");

// Get all meals
const getMeals = async (req, res) => {
  try {
    // Fetch all meals and populate the category field with its associated data
    const meals = await Meal.find().populate("category", "name description");
    res.json(meals); // Respond with the list of meals
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Add a new meal
const addMeal = async (req, res) => {
  const { name, description, price, category, imageUrl } = req.body;

  // Check if all required fields are provided
  if (!name || !description || !price || !category) {
    return res
      .status(400)
      .json({ message: "Please provide all required fields" });
  }

  // Check if the category exists
  const categoryExists = await Category.findById(category);
  if (!categoryExists) {
    return res.status(400).json({ message: "Invalid category ID" });
  }

  try {
    const newMeal = new Meal({
      name,
      description,
      price,
      category,
      imageUrl,
    });

    const savedMeal = await newMeal.save(); // Save the new meal to the database
    res.status(201).json(savedMeal); // Respond with the saved meal
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update a meal by ID
const updateMeal = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, category, imageUrl } = req.body;

  try {
    const meal = await Meal.findById(id);

    if (!meal) {
      return res.status(404).json({ message: "Meal not found" });
    }

    // Check if the new category exists
    if (category) {
      const categoryExists = await Category.findById(category);
      if (!categoryExists) {
        return res.status(400).json({ message: "Invalid category ID" });
      }
    }

    // Update meal fields
    meal.name = name || meal.name;
    meal.description = description || meal.description;
    meal.price = price || meal.price;
    meal.category = category || meal.category;
    meal.imageUrl = imageUrl || meal.imageUrl;

    const updatedMeal = await meal.save(); // Save the updated meal
    res.json(updatedMeal); // Respond with the updated meal
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a meal by ID
const deleteMeal = async (req, res) => {
  const { id } = req.params;

  try {
    const meal = await Meal.findById(id);

    if (!meal) {
      return res.status(404).json({ message: "Meal not found" });
    }

    await meal.remove(); // Remove the meal from the database
    res.json({ message: "Meal deleted successfully" }); // Respond with success message
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Add excessive meals
const addExcessiveMeals = async (req, res) => {
  try {
    // Check if the category exists
    const categoryExists = await Category.findById(
      sampleAppetizers[0].category
    );
    if (!categoryExists) {
      return res.status(400).json({ message: "Invalid category ID" });
    }

    // Loop through each item in the sampleAppetizers array
    const mealPromises = sampleAppetizers.map(async (meal) => {
      // Check if the meal already exists in the database (based on name)
      const mealExists = await Meal.findOne({ name: meal.name });
      if (mealExists) {
        console.log(`Meal "${meal.name}" already exists. Skipping.`);
        return null; // Don't add the meal if it already exists
      }

      // Create a new meal if it doesn't exist
      const newMeal = new Meal({
        name: meal.name,
        description: meal.description,
        price: meal.price,
        category: meal.category,
        imageUrl: meal.imageUrl,
      });

      // Save the meal to the database
      return await newMeal.save();
    });

    // Wait for all meal saves to complete
    const savedMeals = await Promise.all(mealPromises);

    // Filter out any null entries (meals that were skipped because they already exist)
    const validSavedMeals = savedMeals.filter((meal) => meal !== null);

    const totalMeals = await Meal.find();
    const allMealsLength = totalMeals.length;
    // const categ = await Category.find();
    // const alCate = categ.map((i) => {
    //   return { id: i._id, name: i.name };
    // });
    res.status(201).json({ savedMeals: validSavedMeals, allMealsLength }); // Respond with the saved meals
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getMeals,
  addMeal,
  updateMeal,
  deleteMeal,
  addExcessiveMeals,
};
