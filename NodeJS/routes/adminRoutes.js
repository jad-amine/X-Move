const express = require("express");
const { authAdmin } = require("../middlewares/adminMiddleware");
const {
  getAllUsers,
  login,
  getProperties,
} = require("../controllers/adminController");

const router = express.Router();

// Login
router.post("/login", login);

// Get all users
router.get("/getUsers", authAdmin, getAllUsers);

// Get all properties
router.get("/getProperties", authAdmin, getProperties);

module.exports = router;
