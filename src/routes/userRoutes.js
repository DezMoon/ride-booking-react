const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/login", userController.loginUser);
router.get(
  "/profile",
  authMiddleware.authenticateUser,
  userController.getUserProfile
);
router.put("/:userId", userController.updateUserProfile);

module.exports = router;
