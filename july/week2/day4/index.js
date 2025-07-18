// to import the package
// const http = require("http");
// const port = 9000;
// const myServer = http.createServer((req, res) => {
//     console.log("request is accept");
//     res.end("that is response")
// })

// // to run this server
// myServer.listen(port, () => {
//     console.log("My server is running on the port", port);

// });

const express = require("express");

const app = express();
const port = 9000;

app.get("/", (req, res) => {
    console.log("request accepted");
    res.send("response sent");

})
app.post("/user", (req, res) => {
    res.send("request sent")
})


app.listen(port, () => {
    console.log(`server is running on the port${port}`)

})