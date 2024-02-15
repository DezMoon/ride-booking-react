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
