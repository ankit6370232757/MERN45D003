const User = require("../model/user_model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.Register = async(req, res) => {
    try {
        const { fullName, email, password, phoneNumber } = req.body;

        if (!fullName || !email || !password) {
            return res.send({ status: false, message: "Please fill all the fields" });
        }

        const existUser = await User.findOne({ email });

        if (existUser) {
            return res.send({ status: false, message: "Already exist user" });
        }

        bcrypt.hash(password, 9, async function(err, hash) {
            if (err) {
                return res.send({ status: false, message: "Error on bcrypt" });
            }

            const user = new User({
                fullName,
                email,
                password: hash,
                phoneNumber,
            });

            const result = await user.save();

            return res.send({
                status: true,
                message: "Register success",
                user: result,
            });
        });
    } catch (err) {
        return res.send({ status: false, message: "Registration failed" });
    }
};


exports.login = async(req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.send({ status: false, message: ("please fill all the blanks") })
        }
        const user = await User.findOne({ email })
        if (!user) {
            return res.send({ status: false, message: "user not found" })
        }

        bcrypt.compare(password, user.password, function(error, result) {
            if (error) {
                return res.send({ status: false, message: "error in bcrypt" });
            }
            const secret = process.env.jwt_secretes
            const token = jwt.sign({ user }, secret, { expiresIn: '1h' })
            return res.cookie("token", token).send({ status: false, message: "sussesfully login", user, token })
                // return res.send(user)
        })


    } catch (error) {
        console.log("error is", error);
        res.send({ status: false, message: "something went worng", error })
    }

}
exports.GetAllUser = async(req, res) => {
    try {
        const user = await User.find();
        if (!user) {
            return res.send({ status: false, message: "no user found" })
        } else {
            return res.send({ status: true, message: " user found", user })
        }

    } catch (error) {
        console.log("error is", error);
        res.send({ status: false, message: "somthing is error", error })     
    }
}