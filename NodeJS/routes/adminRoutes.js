const express = require("express");
const { authAdmin } = require("../middlewares/adminMiddleware");
const { getAllUsers } = require("../controllers/adminController");

const router = express.Router();

// Get all users
router.get("/getUsers", authAdmin, getAllUsers);

module.exports = router;
