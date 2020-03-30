var express = require("express");
var router = express.Router();
const connection = require("../connection/connection");

router.get('/', function (req, res) {
    res.render("home");
    })

module.exports = router;