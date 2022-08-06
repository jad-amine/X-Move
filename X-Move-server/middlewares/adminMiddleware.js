require("dotenv").config();
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const Field = require("../models/fieldModel");

// Auth Admin
const authAdmin = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "Unauthenticated user" });
  }
  token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, process.env.TOKEN_SECRET, async function (err, decoded) {
    if (err) {
      res.status(401).json({ error: err, message: "Unauthenticated user" });
    } else {
      const user = await User.findById(decoded._id);
      // Admins have a code of 1
      if (user.admin == 1) {
        // If the application is launching
        if (req.body.mission === "Auth Admin") {
          const fields = await Field.find();
          const players = await User.find();
          res.status(200).json({ message: "Validated", fields, players });
        }
        // If the admin is login in
        next();
      } else {
        res.status(403).json({ message: "You are not an admin!! " });
      }
    }
  });
};

module.exports = { authAdmin };
