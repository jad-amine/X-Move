//Express ROUTER
const express = require("express");
const { login, authUser } = require("../middlewares/usersMiddleware");
const usersController = require("../controllers/usersController");

const router = express.Router();

router.post("/", login);

// Get all users
router.get("/", admin, getAllUsers);

module.exports = router;
