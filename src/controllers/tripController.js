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

exports.getTripHistory = async (req, res) => {
  const { userId } = req.params;
  try {
    // Fetch trip history for the user from the database
    const tripHistory = await Trip.find({ user: userId });
    res.status(200).json(tripHistory);
  } catch (error) {
    console.error("Error fetching trip history:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getTripCount = async (req, res) => {
  try {
    const count = await Trip.countDocuments(); // Count the total number of trips
    res.status(200).json({ count });
  } catch (error) {
    console.error("Error fetching Trip count:", error);
    res.status(500).json({ error: "Failed to fetch Trip count" });
  }
};
