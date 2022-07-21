require("dotenv").config();
var jwt = require("jsonwebtoken");

// Auth User middleware or App Launcher
const authUser = (req, res, next) => {
  console.log("received");
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "Unauthenticated user" });
  }
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, process.env.TOKEN_SECRET, function (err, decoded) {
    if (err) {
      res.status(401).json({ error: err, message: "Unauthenticated user" });
    } else {
      req.user = decoded;
      req.body.mission
        ? res.json({ status: "Verified", user: decoded })
        : next();
    }
  });
};

module.exports = { authUser };
