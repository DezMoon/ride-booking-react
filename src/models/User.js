const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  role: String, // 'admin', 'driver', 'user'
});

module.exports = mongoose.model("User", userSchema);
