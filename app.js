// Express
const express = require("express");
const app = express();

// Body-Parser
const bodyParser = require("body-parser");

// parse application/json
app.use(bodyParser.json());

// dotenv
require("dotenv").config();

// Sequelize
const { Sequelize } = require("sequelize");

// Initialize Sequelize
const sequelize = new Sequelize({
  host: process.env.HOST,
  database: process.env.DATABASE,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: "mysql",
});

// Test the Connection
const conn = async (req, res, next) => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  } finally {
    next();
  }
};

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
