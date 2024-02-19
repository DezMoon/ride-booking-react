const User = require("../models/User");
const { generateToken } = require("../helpers/authHelper");

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
