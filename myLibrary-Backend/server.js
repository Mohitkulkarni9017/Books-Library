const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

app.get("/api/books", (req, res) => {
    res.send("Hello from the server");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});