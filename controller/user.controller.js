const User = require("../model/user");
const crypto = require("crypto");

// Get all Users
exports.getAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.status(200).json({ response: users });
};

// Create User
exports.createUser = async (req, res) => {
  const { name, password } = req.body;
  // Encrypt password
  const hash = crypto
    .createHmac("sha256", process.env.SECRET)
    .update(password)
    .digest("hex");
  const userCreated = await User.create({ name: name, password: hash });
  res.json({ userCreated, message: "Account Created Successfully" });
};

// Get Single User
exports.getUser = async (req, res) => {
  const userId = req.params.id;
  const user = await User.findOne({ where: { id: userId } });
  if (!user) {
    res.json({ message: "User Not Found" });
  }
  res.json({ user, message: "User Found" });
};

// Delete User
exports.deleteUser = async (req, res) => {
  const userId = req.params.id;
  const user = await User.destroy({ where: { id: userId } });
  if (!user) {
    res.json({ message: "User Not Found in the database" });
  } else {
    res.json({ user, message: "User Deleted" });
  }
};
