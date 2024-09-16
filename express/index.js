const express = require("express");
const app = express();


//console.dir(app);
let port = 8080;

app.listen(port, () => {
    console.log(`app is listening onn port ${port}`);
});
  
// app.use((req, res) => {
//     // console.log(req);
//     console.log("request recived");
//     res.send("heyy... It's Shashank Soni");
// });

app.get("/", (req, res) => {
    res.send("you contacted root path");
});

app.get("/apple", (req, res) => {
    res.send("you contacted apple path");
});

app.get("/orange", (req, res) => {
    res.send("you contacted orange path");
});

app.get("*", (req, res) => {
    res.send("you contacted default path");
});