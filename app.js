var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var session = require('express-session');
var methodOverride = require("method-override");
var expressSanitizer = require("express-sanitizer");



//requring route
var home = require("./routes/home");
var auth = require("./routes/auth");
var promotion = require("./routes/promotion");
var cinema = require("./routes/cinema");
var movie = require("./routes/movie");



app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.static("JS"));
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(methodOverride("_method"));
app.use(expressSanitizer());

app.use(function(req,res,next){
    res.locals.currentUser = req.session.email;
    next();
    })

    
app.use("/",home);
app.use("/",auth);
app.use("/", promotion);
app.use("/", cinema);
app.use("/", movie);
app.use(express.static(__dirname + '/views'));


 var server = app.listen(3000,function(){
 console.log("We have started our server on port 3000");
});



