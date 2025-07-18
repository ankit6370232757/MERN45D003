const express = require("express")

const app = express();
const port = 9000;
const router = express.Router()
app.use(express.json())

app.use("/api", router)
router.get("/user", (req, res) => {
    res.send('working')
})
router.post("/user", (req, res) => {
    const { name, age, Email, userid } = req.body;
    console.log(name, age, Email, userid);



    res.send("server sent")
})
router.put("/user/:userid", (req, res) => {
    const { name, age } = req.query
    const { userid } = req.params;
    console.log(userid)
    console.log(age);

    res.send(`name is :${name} id: ${userid}`)
})

router.delete("/user/:id", (req, res) => {
    const { id } = req.params;
    res.send(`delete merhod called: $ { id }
                `)
})














// app.get("/", (req, res) => {
//     res.send("my server is accepted")

// })
// app.post("/user", (req, res) => {
//     const { name, age, Email, userid } = req.body;
//     console.log(name, age, Email, userid);



//     res.send("server sent")
// })

// app.put("/user/:userid", (req, res) => {
//     const { name, age } = req.query
//     const { userid } = req.params;
//     console.log(userid)
//     console.log(age);

//     res.send(`name is :${name} id: ${userid}`)
// })

// app.delete("/user/:id", (req, res) => {
//     const { id } = req.params;
//     res.send(`delete merhod called: $ { id }
//                 `)
// })

app.listen(port, () => {
    console.log("my server is running on port");

})