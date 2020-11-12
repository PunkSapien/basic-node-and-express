var express = require('express');
var app = express();
console.log("Hello World");

app.get("/", (req, res) => {
    app.send("Hello Express");
});






























 module.exports = app;
