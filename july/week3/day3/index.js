const express = require("express");
const connectDB = require("./config/db");
const router = require("./routes/userRoute");
const dotenv = require("dotenv")

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.json());
connectDB()


app.use("/api", router)

app.listen(port, (req, res) => {
    console.log(`server is running on port ${port}`)
})