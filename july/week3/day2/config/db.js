const mongoose = require("mongoose");
const connectDB = async() => {
    try {
        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/Myproject");
        console.log("DB connect");

        await UserModel.insertOne({ name: "ankit", email: "ueehdehd", age: "21", password: "uhddhhd" });
        console.log("data send");

    } catch (error) {
        console.log("error", error);

    }
}

const UserSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,

}, {
    versionKey: false
})

const UserModel = mongoose.model("user", UserSchema);
module.exports = connectDB