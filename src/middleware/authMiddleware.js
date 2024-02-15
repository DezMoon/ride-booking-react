// middleware/authMiddleware.js

const jwt = require("jsonwebtoken");

exports.authenticateUser = (req, res, next) => {
  // Check if user is authenticated (e.g., by verifying JWT token)
  // Example: Verify JWT token from request headers

  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, "your-secret-key");
    req.user = decoded.user;
    next();
  } catch (error) {
    console.error("Error authenticating user:", error);
    return res.status(401).json({ error: "Unauthorized" });
  }
};
