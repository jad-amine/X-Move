//Express ROUTER
const express = require("express");
const { authUser } = require("../middlewares/usersMiddleware");
const {
  addSport,
  removeSport,
  login,
  register,
  fetchSimilarUsers,
  addProfilePicture,
} = require("../controllers/usersController");

const router = express.Router();

// Login
router.post("/login", login);

// Register
router.post("/register", register);

// Auth user on App Launch
router.post("/getUserData", authUser);

// Get users with similar sport interest
router.get("/getSimilarUsers/:sport", authUser, fetchSimilarUsers);

// Add Profile Picture
router.post("/addProfilePicture", authUser, addProfilePicture);

// Add Sport
router.post("/addSport", authUser, addSport);

// Remove Sport
router.post("/removeSport", authUser, removeSport);

module.exports = router;
