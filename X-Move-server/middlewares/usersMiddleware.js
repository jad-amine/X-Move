require("dotenv").config();
var jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// Auth User
const authUser = (req, res, next) => {
  console.log("received");
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "Unauthenticated user" });
  }
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, process.env.TOKEN_SECRET, async function (err, decoded) {
    if (err) {
      res.status(401).json({ error: err, message: "Unauthenticated user" });
    } else {
      try {
        const user = await User.findById(decoded._id)
          .populate({ path: "friends", populate: { path: "posts" } })
          .populate({
            path: "pendingFriendRequests",
            populate: { path: "posts" },
          })
          .populate({ path: "friendRequests", populate: { path: "posts" } })
          .populate("posts");
        req.user = user;
        // Check if the application is launching or the user is sending HTTP requests
        req.body.mission
          ? res.json({
              status: "Verified",
              user: { ...user._doc, password: "###" },
            })
          : next();
      } catch (error) {
        res
          .status(500)
          .json({ error: err, message: "Couldn't fetch user data" });
      }
    }
  });
};

module.exports = { authUser };
