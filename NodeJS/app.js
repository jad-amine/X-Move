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

// Connect to db
mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening to port 4000");
    });
  })
  .catch((err) => console.log(err));

// APIs
app.use("/api/users", usersRoutes);
