const express = require("express");
const router = express.Router();

// Controllers
const getAllUsers = require("../controller/user.controller");

// Get All Users
router.get("/users", getAllUsers);

module.exports = router;
