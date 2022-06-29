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

const cluster = require("cluster");
const os = require("os");
const cpuCount = os.cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < cpuCount; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${process.pid} died`);
    cluster.fork();
  });
} else {
  // this is a worker
  // All workers (children processes) will listen to the same port
  // app.listen(process.env.PORT, () => {
  //   console.log(`${process.pid} worker listenning to port ` + process.env.PORT);
  // });
  require("/app.js");
}
