const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  const jwtSecret = process.env.JWT_SECRET;

  try {
    // Check if user exists
    const user = await User.findOne({ username });

    if (!user || !user.isValidPassword(password)) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    // Generate token
    const token = jwt.sign({ userId: user._id }, jwtSecret, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.logoutUser = async (req, res) => {
  try {
    // Implementation for user logout
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
