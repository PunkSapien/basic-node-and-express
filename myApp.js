var express = require('express');
var app = express();
console.log("Hello World");

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.use("/", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
    if(process.env.MESSAGE_STYLE === "uppercase"){
        this.response = "Hello json".toUpperCase();
    } else {
        this.response = "Hello json";
    }
});






























 module.exports = app;
