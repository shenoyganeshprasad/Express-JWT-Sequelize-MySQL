const express = require("express");
const router = express.Router();

// Controllers
const {
  getAllUsers,
  createUser,
  getUser,
  deleteUser,
} = require("../controller/user.controller");

// Services
const { authenticateToken } = require("../services/auth.service");

// Get All Users
router.get("/users", authenticateToken, getAllUsers);

// Create Users
router.post("/users", createUser);

// Get Single User
router.get("/users/:id", authenticateToken, getUser);

// Delete User
router.delete("/users/:id", authenticateToken, deleteUser);

module.exports = router;
