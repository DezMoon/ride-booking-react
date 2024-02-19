const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: {
    type: String,
    required: true,
  },
  role: String, // 'admin', 'driver', 'user'
  approved: { type: Boolean, default: false }, // Indicates if the user account is approved by an admin
});

// Define isValidPassword method as an instance method
userSchema.methods.isValidPassword = async function (password) {
  // Compare password with hashed password and return boolean
  return await bcrypt.compare(password, this.password);
};

// Configure password hashing before saving
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10); // Adjust salt rounds as needed
  }
  next();
});

module.exports = mongoose.model("User", userSchema);
