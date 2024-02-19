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

    // Extract user information from decoded token
    const { user, role } = decoded; // Assuming 'user' and 'role' fields are present

    if (!user || !role) {
      return res.status(401).json({ error: "Invalid token" });
    }

    req.user = { ...user, role }; // Store user and role in request object

    next();
  } catch (error) {
    console.error("Error authenticating user:", error);
    return res.status(401).json({ error: "Unauthorized" });
  }
};

exports.checkAdminRole = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res
      .status(403)
      .json({ error: "Unauthorized: Only admins can access this resource" });
  }
  next();
};
