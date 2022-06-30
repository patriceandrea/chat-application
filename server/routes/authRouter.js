const express = require("express");
const router = express.Router();

const validateForm = require("../controllers/validateForm")


//POST - login
router.post("/login", (req, res) => {
  validateForm(req, res);
});

//POST - sign up
router.post("/signup", (req, res) => {
  validateForm(req, res);
});

module.exports = router;