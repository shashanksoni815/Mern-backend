const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use("/public", express.static("public"));

main().then(() =>{console.log("connection successful")})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/chatBox');
}

// let chat1 = new Chat({
//     from: "neha",
//     to: "priya",
//     msg: "send me your exam sheet",
//     created_at: new Date()
// }) 

// chat1.save().then((res) => {
//     console.log(res);
// });

// Index Route
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs", {chats});
});

// New Route 
app.get("/chats/new", (req, res) => {
    res.render("new.ejs")
})

// Create Route
app.post("/chats", (req, res) => {
    let { from, to, msg } = req.body;
    let newChat = new Chat({
        from: from,
        msg: msg,
        to: to,
        created_at: new Date()
    });

    newChat
        .save()
        .then((res) => {
            console.log("chat was saved");
        })
        .catch((err) => {
            console.log(err);
        });
    res.redirect("/chats");
});

// Edit Route 
app.get("/chats/:id/edit", async (req, res) => {
    let id = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat});
});

app.get("/", (req, res) => {
    res.send("root is WORKING");
});

app.listen(8080, () => {
    console.log("Server listining to port 8080");
})