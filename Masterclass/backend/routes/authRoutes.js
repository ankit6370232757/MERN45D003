const express = require("express");
const { Register, login, GetAllUser } = require("../controller/auth.controller");
const { isUser } = require("../middleware/isUser");

const authRoutes = express.Router()

authRoutes.post("/register", Register);
authRoutes.post("/login", login);
authRoutes.get("/", isUser, GetAllUser)

module.exports = authRoutes