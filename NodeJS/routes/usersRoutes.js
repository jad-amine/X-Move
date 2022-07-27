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
  getReservations,
  updateProfile,
  getLocations,
  addFriend,
  addPost,
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

// Update Profile
router.post("/updateProfile", authUser, updateProfile);

// Get Field Information
router.get("/getReservations/:field", authUser, getReservations);

// Get Locations
router.get("/getLocations/:type/:sport", authUser, getLocations);

// Add Friend
router.post("/addFriend/", authUser, addFriend);

// Add Post
router.post("/addPost/", authUser, addPost);

module.exports = router;
