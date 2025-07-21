const express = require("express")
const env = require("dotenv");
const DBconnect = require("./config/db");
const routes = require("./routes/allRoutes")
const cookieParser = require("cookie-parser")

const app = express();
env.config();
DBconnect();
app.use(express.json());
app.use(cookieParser())



const port = process.env.port;

app.get("/", (req, res) => {
    res.send("welcome to the user management system");

});
app.use("/api", routes);

app.listen(port, () => {
    console.log(`backend server running :${port}`);

})