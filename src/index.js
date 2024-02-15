const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const tripRoutes = require("./routes/tripRoutes");
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
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/trips", tripRoutes);

// Error handling middleware
app.use(handleErrors);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
