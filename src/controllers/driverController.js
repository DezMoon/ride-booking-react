const Driver = require("../models/Driver");

exports.updateDriverLocation = async (req, res) => {
  const { driverId, latitude, longitude } = req.body;
  try {
    // Update driver's location in the database
    await Driver.findByIdAndUpdate(driverId, { latitude, longitude });
    res.status(200).json({ message: "Driver location updated successfully" });
  } catch (error) {
    console.error("Error updating driver location:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getDriverLocation = async (req, res) => {
  const driverId = req.params.driverId;
  try {
    // Fetch driver's location from the database
    const driver = await Driver.findById(driverId);
    if (!driver) {
      return res.status(404).json({ error: "Driver not found" });
    }
    const { latitude, longitude } = driver;
    res.status(200).json({ latitude, longitude });
  } catch (error) {
    console.error("Error fetching driver location:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
