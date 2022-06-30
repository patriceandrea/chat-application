const { Pool } = require("pg");
const { process } = require("uniqid");
require("dotenv").config();

const pool = new Pool({
  database: process.env.DATABSE_NAME,
  host: process.env.DATABSE_HOST,
  password: process.env.DATABSE_PASSWORD,
  user: process.env.DATABSE_USER,
  port: process.env.DATABSE_PORT
});

module.exports = pool; 