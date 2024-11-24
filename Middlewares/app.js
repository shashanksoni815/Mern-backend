const express = require("express");
const app = express();

// app.use((req, res, next) => {
//     console.log("Hi, I am a middleware");
//     // res.send("middleware finnished")
//     next();
// })

app.use((req, res, next) => {
    req.time = new Date(Date.now()).toString()
    console.log(req.method, req.time);
    next();
});

app.get("/", (req, res) => {
    res.send("server is connected");
});

app.get("/random", (req, res) => {
    res.send("HI, I am root.")
})


app.listen(8080, () => {
    console.log("Server is working")
})