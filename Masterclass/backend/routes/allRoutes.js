const express = require("express");
const allRoutes = require("./authRoutes")
const routes = express.Router();


routes.use("/auth", allRoutes);

module.exports = routes;