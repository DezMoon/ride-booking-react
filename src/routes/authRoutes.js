const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/login", authController.loginUser);
router.post("/logout", authController.logoutUser);
// Add other routes as needed

module.exports = router;
