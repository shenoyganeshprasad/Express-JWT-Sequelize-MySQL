const sequelize = require("../config/database");

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

module.exports = conn;
