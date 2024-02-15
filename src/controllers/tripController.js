const Trip = require("../models/Trip");

exports.createTrip = async (req, res) => {
  try {
    // Implementation for creating a new trip
    const { startLocation, endLocation } = req.body;
    const newTrip = new Trip({
      startLocation,
      endLocation,
      user: req.user._id,
    });
    await newTrip.save();
    res.status(201).json(newTrip);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getAllTrips = async (req, res) => {
  try {
    const trips = await Trip.find({ user: req.user._id });
    res.json(trips);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateTripStatus = async (req, res) => {
  try {
    // Implementation for updating trip status
    const { id } = req.params;
    const { status } = req.body;
    const trip = await Trip.findByIdAndUpdate(id, { status }, { new: true });

    if (!trip) {
      return res.status(404).json({ error: "Trip not found" });
    }

    res.json(trip);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
