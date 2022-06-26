const express = require("express");
const usersController = require('../controllers/usersController')
const usersMiddleware = require('../middlewares/usersMiddleware')

const router = express.Router();

router.get("/", usersMiddleware.greet);

module.exports = router;