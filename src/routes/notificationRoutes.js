const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notificationController");

// Send notification to user
router.post("/send", notificationController.sendNotification);

module.exports = router;
