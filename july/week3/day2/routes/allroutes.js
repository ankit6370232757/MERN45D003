const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("get method called")
})


router.post("/user", (req, res) => {
    res.send("post method called")
})

router.put("/user/:id", (req, res) => {
    res.send("put method called")
})

router.delete("/user/:id", (req, res) => {
    res.send("delete method called")
})

module.exports = router