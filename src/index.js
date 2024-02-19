const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const tripRoutes = require("./routes/tripRoutes");
const authRoutes = require("./routes/authRoutes");
const { handleErrors } = require("./middleware/errorMiddleware");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://admin:j4ZEsm8i8EWOPooB@cluster0.vuozzy7.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Middleware
app.use(bodyParser.json());

// Configure CORS (assuming your frontend is on http://localhost:3000)
const corsOptions = {
  origin: "http://localhost:3000", // Replace with your frontend's domain
  methods: "GET,POST,PUT,DELETE", // Allow specific methods
};
app.use(cors(corsOptions));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/auth", authRoutes);

// Error handling middleware
app.use(handleErrors);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
