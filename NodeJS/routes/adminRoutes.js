const express = require("express");
const User = require("../models/userModel");
const { authAdmin } = require("../middlewares/adminMiddleware");

const router = express.Router();

router.get("/getUsers", authAdmin, async (req, res, next) => {
  const users = await User.find();
  res.status(200).json(users);
});

module.exports = router;
