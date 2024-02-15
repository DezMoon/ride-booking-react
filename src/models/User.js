const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  role: String, // 'admin', 'driver', 'user'
  approved: { type: Boolean, default: false }, // Indicates if the user account is approved by an admin
});

module.exports = mongoose.model("User", userSchema);
