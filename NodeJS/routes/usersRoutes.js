const express = require("express");
const usersController = require("../controllers/usersController");
const { login, authUser } = require("../middlewares/usersMiddleware");

const router = express.Router();

router.get("/", login);

// Get all users
router.get("/", admin, getAllUsers);

module.exports = router;
