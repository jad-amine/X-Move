const User = require("../models/userModel");
const mongoose = require("mongoose");

// Add user favorite sport
const addSport = async (req, res) => {
  if (!req.body.sport) {
    return res.status(401).json({ message: "Please select a sport" });
  }
  const sport = req.body.sport;
  console.log(req.user._id);
  if (!mongoose.Types.ObjectId.isValid(req.user._id)) {
    return res.status(404).json({ error: "Not a user" });
  }
  const user = await User.findByIdAndUpdate(req.user._id, {
    $push: { sports: sport },
  });
  console.log(req.user.name);
  res.json(user);
};

// Remove use favorite sport
const removeSport = async (req, res) => {
  if (!req.body.sport) {
    return res.status(401).json({ message: "Please select a sport" });
  }
  const sport = req.body.sport;
  console.log(req.user._id);
  if (!mongoose.Types.ObjectId.isValid(req.user._id)) {
    return res.status(404).json({ error: "Not a user" });
  }
  const user = await User.findByIdAndUpdate(req.user._id, {
    $pull: { sports: sport },
  });
  console.log(req.user.name);
  res.json(user);
};

module.exports = { addSport, removeSport };
