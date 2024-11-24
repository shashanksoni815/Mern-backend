const express = require("express");
const app = express();
const ExpressError = require("./ExpressError")

// app.use((req, res, next) => {
//     console.log("Hi, I am a middleware");
//     // res.send("middleware finnished")
//     next();
// })

const classToken = (req, res, next) => {
    let {token} = req.query;
    if (token === "giveaccess") {
        next();
    }
    throw new ExpressError(401, "ACCESS DENIED!");
};

app.get("/api", classToken, (req, res) => {
    res.send("data");
});

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

app.get("/err", (req, res, next) => {
    abcd = abcd
});

app.use((err, req, res, next) => {
    console.log("-----ERROR-----")
    res.send(err);
})

app.listen(8080, () => {
    console.log("Server is working")
})