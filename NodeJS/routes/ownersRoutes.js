const express = require("express");
const { authOwner } = require("../middlewares/ownersMiddleware");
const { register, login } = require("../controllers/ownersController");

const router = express.Router();

// Register
router.post("/register", register);

// Login
router.post("/login", login);

// Auth owner on App Launch
router.post("/authOwner", authOwner);

module.exports = router;
