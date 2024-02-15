const express = require("express");
const router = express.Router();
const { authenticateUser } = require("../middleware/authMiddleware");
const {
  getAllTrips,
  createTrip,
  updateTripStatus,
} = require("../controllers/tripController");

router.get("/trips", authenticateUser, getAllTrips);
router.post("/trips", authenticateUser, createTrip);
router.put("/trips/:id", authenticateUser, updateTripStatus);
// Add other routes as needed

module.exports = router;
