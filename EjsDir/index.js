const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/set", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rollDice.ejs", {num: diceVal});
});

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./views/data.json");
    // console.log(instaData);
    const data = instaData[username];
    // const followers = instaData[followers];
    // const following = instaData[following];
    console.log(data);
    res.render("instagram.ejs", {data});
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});