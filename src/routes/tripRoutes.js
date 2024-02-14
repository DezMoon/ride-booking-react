const express = require("express");
const router = express.Router();
const tripController = require("../controllers/tripController");

router.post("/", tripController.createTrip);
router.get("/", tripController.getAllTrips);
router.put("/:id", tripController.updateTripStatus);
// Add other routes as needed

module.exports = router;
