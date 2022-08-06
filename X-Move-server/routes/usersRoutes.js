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
  likePost,
  addComment,
} = require("../controllers/usersController");

const router = express.Router();

// Login
router.post("/login", login);

// Register
router.post("/register", register);

// Auth user on App Launch
router.post("/getUserData", authUser);

// Get users with similar sports interest
router.get("/getSimilarUsers/:sport", authUser, fetchSimilarUsers);

// Add Profile Picture
router.post("/addProfilePicture", authUser, addProfilePicture);

// Add Favorite Sport
router.post("/addSport", authUser, addSport);

// Remove Favorite Sport
router.post("/removeSport", authUser, removeSport);

// Update Profile Information
router.post("/updateProfile", authUser, updateProfile);

// Get Property for rent Information
router.get("/getReservations/:field", authUser, getReservations);

// Get Players/Fields Locations
router.get("/getLocations/:type/:sport", authUser, getLocations);

// Add/Remove Friend
router.post("/addFriend", authUser, addFriend);

// Add Post
router.post("/addPost", authUser, addPost);

// Add comment to Post
router.post("/addComment/:id", authUser, addComment);

// Like/Unlike Post
router.get("/likePost/:like/:id", authUser, likePost);

module.exports = router;
