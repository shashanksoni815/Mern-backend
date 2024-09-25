const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.urlencoded({extended: true}));
''
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static('public'));

let posts = [
    {
        username : "Chameli Devi",
        content : "I love Coding!",
    },
    {
        username : "Shashank Soni",
        content : "Fresher",
    },
    {
        username : "Coder",
        content : "Error",
    },
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render();
});

app.listen(port, () => {
    console.log("listening to port : 3000");
});