const express = require("express");
const User = require("../models/userModel");

const router = express.Router();

router.get("/getUsers", async (req, res, next) => {
  const users = await User.find();
  res.status(200).json(users);
});

module.exports = router;
