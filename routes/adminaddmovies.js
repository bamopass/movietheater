var express = require("express");
var router = express.Router();
const connection = require("../connection/connection");

router.get('/adminaddmovies', function (req, res) {
    res.render("adminaddmovies");
    })

module.exports = router;