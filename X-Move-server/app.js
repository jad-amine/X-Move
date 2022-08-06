// Import modules and dependencies
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const cluster = require("cluster");

// Create an Express app
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

// Routes
const usersRoutes = require("./routes/usersRoutes");
const ownersRoutes = require("./routes/ownersRoutes");
const adminRoutes = require("./routes/adminRoutes");

// Connect to db
mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => {
    // To be able to test the mobile app on a real mobile device I used my local IPv4 address
    // as stated in the "How To Run" section in the README.md file
    app.listen(process.env.PORT, "192.168.1.3", () => {
      console.log("Connected to db & listening to port " + process.env.PORT);
    });
  })
  .catch((err) => console.log("Failed to connect to MongoDB", err));

// APIs
app.use(express.static("public"));
app.use("/api/users", usersRoutes);
app.use("/api/owners", ownersRoutes);
app.use("/api/admin", adminRoutes);

// Using cluster module to spin several node.js instances on the same device
// const os = require("os");
// const cpuCount = os.cpus().length;

// if (cluster.isMaster) {
//   for (let i = 0; i < cpuCount; i++) {
//     cluster.fork();
//   }
//   cluster.on("exit", (worker, code, signal) => {
//     console.log(`worker ${process.pid} died`);
//     cluster.fork();
//   });
// } else {
//   this is a worker
//   All workers (children processes) will listen to the same port
//   app.listen(process.env.PORT, () => {
//     console.log(`${process.pid} worker listenning to port ` + process.env.PORT);
//   });
//   require("/app.js");
// }
