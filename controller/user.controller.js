const User = require("../model/user");
const crypto = require("crypto");

// Services
const { generateAccessToken } = require("../services/auth.service");

// Get all Users
exports.getAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.status(200).json({ response: users });
};

// Create User
exports.createUser = async (req, res) => {
  const { email, password } = req.body;
  // Encrypt password
  const hash = crypto
    .createHmac("sha256", process.env.SECRET)
    .update(password)
    .digest("hex");
  const userCreated = await User.create({ email: email, password: hash });
  const token = generateAccessToken({ email: email });
  res.json({
    userCreated,
    token: token,
    message: "Account Created Successfully",
  });
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
