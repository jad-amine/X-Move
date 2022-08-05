const express = require("express");
const { authAdmin } = require("../middlewares/adminMiddleware");
const { login } = require("../controllers/adminController");

const router = express.Router();

// Login
router.post("/login", login);

// Authenticate admin
router.post("/authAdmin", authAdmin);

module.exports = router;
