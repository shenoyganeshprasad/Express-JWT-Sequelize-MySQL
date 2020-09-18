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

module.exports = sequelize;
