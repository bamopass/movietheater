var express = require("express");
var app = express();
const connection = require("./connection/connection");
 
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.static("JS"));
 
app.get('/', function (req, res) {
    var findUser = "SELECT * FROM `Employee`"
    connection.query(findUser, function (err, foundUser) {
        if (err) {
        throw err;
        }
        console.log(foundUser);
        res.render("login", {
        user: foundUser[0]
        });
    });
 })


 
var server = app.listen(3000,function(){
 console.log("We have started our server on port 3000");
});