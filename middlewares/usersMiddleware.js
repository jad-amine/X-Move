var jwt = require("jsonwebtoken");
require("dotenv").config();

const login = (req, res, next) => {
  console.log(req.body)
  res.json(req.data)
  var token = jwt.sign({ foo: "bar" }, process.env.TOKEN_SECRET);
};




// token = req.headers.authorization.split(" ")[1];
// console.log(token);
// jwt.verify(token, process.env.TOKEN_SECRET, function (err, decoded) {
//   console.log(decoded.foo); // bar
//   res.json(decoded);
// });

module.exports = { login };
