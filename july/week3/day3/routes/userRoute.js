const express = require("express");
const { createUser, fetchUser, updateUser } = require("../controller/userController");


const router = express.Router();

router.post("/user", createUser)
router.get("/user", fetchUser);
router.put("/user/:id", updateUser);


module.exports = router