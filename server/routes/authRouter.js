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
  .post(validateForm, rateLimiter, attempLogin);

//POST - sign up/register
router
  .post("/register", validateForm, rateLimiter, attempRegister);

module.exports = router;