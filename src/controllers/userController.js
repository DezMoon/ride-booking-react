const User = require("../models/User");
const { generateToken } = require("../../helpers/authHelper");

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password, approved: true });
    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const token = generateToken(user); // Generate JWT token
    res.status(200).json({ token }); // Return token to frontend
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getUserProfile = async (req, res) => {
  try {
    // Extract user information from request object (after authentication)
    const { username, email, role } = req.user;

    // Send user information as response
    res.status(200).json({ username, email, role });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateUserProfile = async (req, res) => {
  const { userId } = req.params;
  const { username, email } = req.body;
  try {
    // Update user profile in the database
    await User.findByIdAndUpdate(userId, { username, email });
    res.status(200).json({ message: "User profile updated successfully" });
  } catch (error) {
    console.error("Error updating user profile:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.registerUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const user = await User.create({ username, email, password, role });
    const token = generateToken(user); // Generate JWT token
    res.status(201).json({ token }); // Return token to frontend
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find(); // Retrieve all users from the database
    res.status(200).json(users); // Send the users as a JSON response
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

exports.getUserCount = async (req, res) => {
  try {
    const count = await User.countDocuments(); // Count the total number of users
    res.status(200).json({ count });
  } catch (error) {
    console.error("Error fetching user count:", error);
    res.status(500).json({ error: "Failed to fetch user count" });
  }
};
