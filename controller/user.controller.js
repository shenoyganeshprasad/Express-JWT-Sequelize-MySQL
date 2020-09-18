const User = require("../model/user");

// Get all Users
const getAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.status(200).json({ response: users });
};

module.exports = getAllUsers;
