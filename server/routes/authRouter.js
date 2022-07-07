const express = require("express");
const router = express.Router();
const validateForm = require("../controllers/validateForm")
const {
  handleLogin,
  attempLogin,
  attempRegister
} = require("../controllers/authController");

//POST - login
router.route("/login")
  .get(handleLogin)
  .post(validateForm, attempLogin);

//POST - sign up/register
router
  .post("/register", validateForm, attempRegister);

module.exports = router;