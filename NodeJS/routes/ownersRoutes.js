const express = require("express");
const { register } = require("../controllers/ownersController");

const router = express.Router();

// Register
router.post("/register", register);

module.exports = router;
