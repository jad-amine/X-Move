const express = require("express");
const { authOwner } = require("../middlewares/ownersMiddleware");
const {
  register,
  login,
  addProperty,
  addGame,
  getReservations,
} = require("../controllers/ownersController");

const router = express.Router();

// Register
router.post("/register", register);

// Login
router.post("/login", login);

// Auth owner on App Launch
router.post("/authOwner", authOwner);

// Add property information
router.post("/addProperty", authOwner, addProperty);

// Add a Game
router.post("/addGame", authOwner, addGame);

// Get Reservations
router.get("/getReservations", authOwner, getReservations);

module.exports = router;
