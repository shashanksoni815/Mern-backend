const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then(() =>{
        console.log("connection successful")
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/chatBox');
}

let allChats = ([
    {
        from: "abc",
        to: "cde",
        msg: "send me your exam sheet",
        created_at: new Date()
    },
    {
        from: "jain",
        to: "soni",
        msg: "send me your exam sheet",
        created_at: new Date()
    },
    {
        from: "rony",
        to: "tony",
        msg: "send me your exam sheet",
        created_at: new Date()
    },
    {
        from: "gita",
        to: "sunita",
        msg: "send me your exam sheet",
        created_at: new Date()
    },
    {
        from: "jiya",
        to: "riya",
        msg: "send me your exam sheet",
        created_at: new Date()
    },
    {
        from: "sonu",
        to: "monu",
        msg: "send me your exam sheet",
        created_at: new Date()
    },
    {
        from: "love",
        to: "hate",
        msg: "send me your exam sheet",
        created_at: new Date()
    },
    {
        from: "you",
        to: "me",
        msg: "send me your exam sheet",
        created_at: new Date()
    },
    {
        from: "sona",
        to: "chandi",
        msg: "send me your exam sheet",
        created_at: new Date()
    },
    {
        from: "ajab",
        to: "jagab",
        msg: "send me your exam sheet",
        created_at: new Date()
    },
]) 


// chat1.save().then((res) => {
//     console.log(res);
// });

Chat.insertMany(allChats);