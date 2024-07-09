require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
    res.send("minaal");
});

app.get("/login", (req, res) => {
    res.send("<h2>chai or code</h2>");
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
});
