var express = require("express");
var app = express();
const connection = require("./connection/connection");
 
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.static("JS"));
 
app.get('/', function (req, res) {
        res.render("home");
        })

app.get('/home', function (req, res) {
    res.render("home");
    })

app.get('/login', function (req, res) {
    res.render("login");
    })

app.get('/cinema', function (req, res) {
    res.render("cinema");
    })
app.get('/movie', function (req, res) {
    res.render("movie");
    })

app.get('/promotion', function (req, res) {
    res.render("promotion");
    })

 
 var server = app.listen(3000,function(){
 console.log("We have started our server on port 3000");
});



