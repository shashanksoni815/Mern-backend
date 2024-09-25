const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended: true}));



app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// app.use(express.static('public'));
app.use('/public', express.static('public'));

//app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static(path.join(__filename, "style.css")));

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
    // res.render('index.ejs', { async: true });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    // console.log(req.body);
    let { username, content } = req.body;
    posts.push({ username, content });
    res.send("post request is working");
});

app.listen(port, () => {
    console.log("listening to port : 8080");
});