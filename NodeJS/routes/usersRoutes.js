//Express ROUTER
const express = require("express");
const { register, login, authUser } = require("../middlewares/usersMiddleware");
const usersController = require("../controllers/usersController");

const router = express.Router();

// Login
router.post("/login", login);

// Register
router.post("/register", register);

// Get all users
// router.get("/", admin, getAllUsers);

module.exports = router;
