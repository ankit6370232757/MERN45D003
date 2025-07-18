const express = require("express");
const router = require("./routes/allroutes");
const connectDB = require("./config/db")


const app = express();
const port = 8000;

connectDB();
app.use("/api", router)





app.listen(port, () => {
    console.log("my server is running on the port", port);

})

















// // this is use of middleware
// const validation = (req, res, next) => {
//         console.log("validation ");
//         next();

//     }
//     // this auth middlewear
// const auth = (req, res, next) => {

//     console.log("authentication");


//     next();
// }router.get("/", validation, auth, (req, res) => {
//     res.send("get method called")

// })