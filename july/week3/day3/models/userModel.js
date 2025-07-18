const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    employee_name: {
        type: String,
        required: true
    },
    employee_age: {
        type: Number,
        required: true,
    },
    employee_job: {
        type: String,
        required: true,
    },
    employee_id: {
        type: String,
        required: true
    }

}, {
    versionKey: false
})


const userModel = mongoose.model("User", userSchema);

module.exports = userModel