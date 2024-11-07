const mongoose = require('mongoose');

// MediaDeviceInfo().catch(err => console.log(err));
main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));  

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

// schema 

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

// const user1 = new User ({
//     name: "ABC",
//     email: "abc.gmail.com",
//     age: 40,
// });

// user1.save()

// const user2 = new User ({
//     name: "def",
//     email: "def.gmail.com",
//     age: 41,
// });

// user2
//     .save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// User.insertMany([
//     { name: "tony", email: "tony.gmail.com", age: 42},
//     { name: "rony", email: "rony.gmail.com", age: 43},
//     { name: "sony", email: "sony.gmail.com", age: 40},
// ]).then((res) => {
//     console.log(res);
// });

// User.find()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     }); 