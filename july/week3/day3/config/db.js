const mongoose = require("mongoose");
const userModel = require("../models/userModel");

const connectDB = async() => {
    try {
        const connection = mongoose.connect(process.env.mongo_url);
        console.log("Data base connected")

        // userModel.insertOne({name:"xyz",age:29,email:"xyz@gmail.com",password:"1234"})
        // console.log("data saved")
    } catch (error) {

    }
}

module.exports = connectDB