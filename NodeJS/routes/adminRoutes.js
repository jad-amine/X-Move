const express = require("express");
const { authAdmin } = require("../middlewares/adminMiddleware");
const { getAllUsers } = require("../controllers/adminController");

const router = express.Router();

router.get("/getUsers", authAdmin, getAllUsers);

module.exports = router;
