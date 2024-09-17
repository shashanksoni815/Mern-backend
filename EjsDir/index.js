const express = require("express");
const app = express();

const port = 8080;

app.get("view engine", "ejs");

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});