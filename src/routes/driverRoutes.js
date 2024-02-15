// File: src/routes/driverRoutes.js

const express = require("express");
const router = express.Router();
const driverController = require("../controllers/driverController");

// Update driver's location
router.get("/location/:driverId", driverController.getDriverLocation);

module.exports = router;
