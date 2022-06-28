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

// Import Routes
const usersRoutes = require("./routes/usersRoutes");

app.listen(3000, () => {
  console.log("listening to port 3000");
});

app.use("/api/users", usersRoutes);
