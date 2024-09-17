const express = require("express");
const app = express();

const port = 8080;

app.set("view engine", "ejs");

app.get("/set", (req, res) => {
    res.render("home.ejs");
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});