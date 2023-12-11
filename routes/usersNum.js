const express = require("express");
const controller = require('../controllers/usersNum');
const userNumerator = express.Router();

userNumerator.get('/', controller.userNum);


module.exports = userNumerator;