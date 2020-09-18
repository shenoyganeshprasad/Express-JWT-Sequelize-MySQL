const express = require("express");
const router = express.Router();

// Controllers
const { getAllUsers, createUser } = require("../controller/user.controller");

// Get All Users
router.get("/users", getAllUsers);

// Create Users
router.post("/users", createUser);

module.exports = router;
