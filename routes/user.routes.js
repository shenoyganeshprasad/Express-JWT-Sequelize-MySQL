const express = require("express");
const router = express.Router();

// Controllers
const {
  getAllUsers,
  createUser,
  getUser,
  deleteUser,
} = require("../controller/user.controller");

// Get All Users
router.get("/users", getAllUsers);

// Create Users
router.post("/users", createUser);

// Get Single User
router.get("/users/:id", getUser);

// Delete User
router.delete("/users/:id", deleteUser);

module.exports = router;
