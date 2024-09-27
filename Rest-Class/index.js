const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// app.use(express.static('public'));
app.use('/public', express.static('public'));

//app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static(path.join(__filename, "style.css")));

let posts = [
    {
        id: uuidv4(),
        username : "Chameli Devi",
        content : "I love Coding!",
    },
    {
        id: uuidv4(),
        username : "Shashank Soni",
        content : "Fresher",
    },
    {
        id: uuidv4(),
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
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({id, username, content });
    // res.send("post request is working");
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post });
});

app.patch("/posts", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.send("/posts");
    
});

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post });
});

app.listen(port, () => {
    console.log("listening to port : 8080");
});