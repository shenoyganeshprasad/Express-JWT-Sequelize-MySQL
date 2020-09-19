const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

// Create a user model
const User = sequelize.define("user", {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  email: {
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
