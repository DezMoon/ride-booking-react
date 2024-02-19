const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.use(authMiddleware.authenticateUser, authMiddleware.checkAdminRole);

router.get("/", userController.getUsers);
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get(
  "/profile",
  authMiddleware.authenticateUser,
  userController.getUserProfile
);
router.put("/:userId", userController.updateUserProfile);
router.get("/count", userController.getUserCount);
// Admin-only route

module.exports = router;
