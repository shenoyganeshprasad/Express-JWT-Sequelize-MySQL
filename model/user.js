const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

// Create a user model
const User = sequelize.define("user", {
  name: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});

User.sync()
  .then(() => console.log("User table created successfully"))
  .catch((err) =>
    console.log("BTW, did you enter wrong database credentials?")
  );

module.exports = User;
