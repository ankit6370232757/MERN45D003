const userModel = require("../models/userModel");

// user creation
const createUser = async(req, res) => {
    try {
        const data = req.body;
        // console.log(data)


        const user = new userModel(data);


        const newUser = await user.save();

        if (!newUser) {
            return res.status(400).json({ message: "User not created" })
        } else {
            return res.status(201).json({ message: "User created successfully", newUser })
        }

        // res.send("data saved")
    } catch (error) {
        console.log("Error is ", error)
    }
}

// user data fetching
const fetchUser = async(req, res) => {
    try {
        const fetchedData = await userModel.find();
        // console.log(fetchedData)

        if (!fetchedData) {
            return res.status(400).json({ message: "No user found" })
        } else {
            return res.status(200).json({ message: "User fetched successfully", fetchedData })
        }
    } catch (error) {
        console.log("error is ", error)
    }
}

// user object updation

const updateUser = async(req, res) => {
    try {
        const { id } = req.params;
        // console.log(id)

        const { name, age, email, password } = req.body;
        // console.log(name,age,email,password)

        const updateData = await userModel.findByIdAndUpdate({ _id: `${id}` }, { name, age, email, password });

        if (!updateData) {
            return res.status(400).json({ message: "User not found" })
        } else {
            return res.status(200).json({ message: "User updated successfully", updateData })
        }

    } catch (error) {
        console.log("error is ", error)
    }
}
module.exports = { createUser, fetchUser, updateUser }