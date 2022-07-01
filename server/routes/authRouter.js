const express = require("express");
const router = express.Router();
const validateForm = require("../controllers/validateForm")
const pool = require("../db");
const bcrypt = require("bcrypt");

//POST - login
router.post("/login", (req, res) => {
  validateForm(req, res);
});

//POST - sign up
router.post("/signup", async (req, res) => {
  validateForm(req, res);

  const existingUser = await pool.query("SELECT username from users WHERE  username=$1", [req.body.username]
  );
  if (existingUser.rowCount === 0) {
    //register 
    const hashedPass = await bcrypt(req.body.password, 10);
    const newUserQuery = await pool.query("INSERT INTO users(username, passhash) values($1,$2) RETURNING username",
      [req.body.username, hashedPass]
    );
    res.json({ loggedIn: true, username })
  } else {
    res.json({ loggedIn: false, status: "Username taken" })
  };

});

module.exports = router;