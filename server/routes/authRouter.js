const express = require("express");
const router = express.Router();
const validateForm = require("../controllers/validateForm")
const {
  handleLogin,
  attempLogin,
  attempRegister
} = require("../controllers/authController");
const { rateLimiter } = require("../controllers/rateLimiter");

//POST - login
router.route("/login")
  .get(handleLogin)
  .post(validateForm, rateLimiter(60, 10), attempLogin);

//POST - sign up/register
router
  .post("/register", validateForm, rateLimiter(30, 4), attempRegister);

module.exports = router;