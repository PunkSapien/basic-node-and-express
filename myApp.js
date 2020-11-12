var express = require('express');
var app = express();
console.log("Hello World");

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.use("/", express.static(__dirname + "/public"));

if(process.env.MESSAGE_STYLE === "uppercase"){
    this.response = '"message": "HELLO JSON"'
} else {
    this.response = '"message": "Hello json"'
}

app.get("/json", (req, res) => {
    res.json(response);
});






























 module.exports = app;
