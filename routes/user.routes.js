const express = require("express");
const router = express.Router();

// Controllers
const {
  getAllUsers,
  createUser,
  getUser,
} = require("../controller/user.controller");

// Get All Users
router.get("/users", getAllUsers);

// Create Users
router.post("/users", createUser);

// Get Single User
router.get("/users/:id", getUser);

module.exports = router;
