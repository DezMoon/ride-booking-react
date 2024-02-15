const jwt = require("jsonwebtoken");

// Generate JWT token for authenticated user
exports.generateToken = (user) => {
  const token = jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET, // Your secret key for signing JWT tokens
    { expiresIn: "1h" } // Token expiration time
  );
  return token;
};
