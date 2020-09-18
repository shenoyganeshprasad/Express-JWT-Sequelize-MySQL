// Express
const express = require("express");
const app = express();

// Body-Parser
const bodyParser = require("body-parser");

// parse application/json
app.use(bodyParser.json());

// dotenv
require("dotenv").config();

// Database Config
const sequelize = require("./config/database");

const conn = require("./controller/db_test.controller");

// Add basic route
app.get("/", conn, (req, res) => {
  res.status(200).json({
    message: "Express is up",
  });
});

// Start the app
app.listen(process.env.PORT, () => {
  console.log("SERVER STARTED");
});
