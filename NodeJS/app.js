// Import modules and dependencies
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// console.log(process.env.S3_BUCKET);

// Expres app
const app = express();
app.use(cors());
app.use(express.json());

// Routes
const usersRoutes = require("./routes/usersRoutes");
const adminRoutes = require("./routes/adminRoutes");

// Connect to db
mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected to db & listening to port " + process.env.PORT);
    });
  })
  .catch((err) => console.log("Failed to connect to MongoDB", err));

// APIs
app.use("/api/users", usersRoutes);
app.use("/api/admin", adminRoutes);
