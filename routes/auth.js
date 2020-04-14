var express = require("express");
var router = express.Router();
const connection = require("../connection/connection");

router.get('/login', function (req, res) {
    res.render("login",{error:''});
    })

//handling user sign in กดlogin check db 
router.post("/login", function (req, res) {
    var email = req.body.email;
    var password = req.body.pass;
    if (email && password) {
        connection.query('SELECT * FROM Member WHERE email = ? AND password = ?', [email, password], function (error, results, fields) {
            console.log(results);
            if (results.length > 0) {
                req.session.email = email;
                //req.flash("success","welcome to yelp camp" + req.session.username);
                res.redirect('/');
            } else {
                res.render("login",{error:1});
            }
            res.end();
        });
    } else {
        res.send('Please enter Username and Password!');
        res.end();
    }
});

//logout routes
router.get("/logout", function (req, res) {
    req.session.destroy();
    res.redirect("/");
});

router.get('/regis', function (req, res) {
    res.render("register");
    })

module.exports = router;