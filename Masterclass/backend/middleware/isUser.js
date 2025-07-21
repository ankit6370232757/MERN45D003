const jwt = require("jsonwebtoken");
exports.isUser = async(req, res) => {
    try {
        const token = req.headers.authorization;
        const cookie = req.cookies
        console.log(cookie)
        res.send(token)

    } catch (error) {
        console.log("error is", error);
        res.send({ status: false, message: "something error" });

    }
}