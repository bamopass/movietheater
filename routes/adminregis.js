var express = require("express");
var router = express.Router();
const connection = require("../connection/connection");

router.get('/adminregis', function (req, res) {
    res.render("adminregis");
    })

module.exports = router;