const User = require("../models/User");
const { generateToken } = require("../../helpers/authHelper");

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ username });

    if (!user || !user.isValidPassword(password)) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    // Generate token
    const token = generateToken(user);

    // Set token as HTTP-only cookie
    res.cookie("access_token", token, {
      httpOnly: true,
      secure: false, // Set to true if using HTTPS
      // Set to 'strict' for more security
    });

    res.json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.logoutUser = async (req, res) => {
  try {
    // Clear the access token cookie
    res.clearCookie("access_token");
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
