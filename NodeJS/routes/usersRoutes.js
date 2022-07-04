//Express ROUTER
const express = require("express");
const { authUser } = require("../middlewares/usersMiddleware");
const {
  addSport,
  removeSport,
  login,
  register,
} = require("../controllers/usersController");

const router = express.Router();

// Login
router.post("/login", login);

// Register
router.post("/register", register);

// Auth user on App Launch
router.post("/getData", authUser);

// Add Sport
router.post("/addSport", authUser, addSport);

// Remove Sport
router.post("/removeSport", authUser, removeSport);

module.exports = router;
