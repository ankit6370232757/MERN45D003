const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    fullName: {
        type: String,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    dob: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },

});

const User = mongoose.model("users", userschema);
module.exports = User;