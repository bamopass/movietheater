var express = require("express");
var router = express.Router();
const connection = require("../connection/connection");

router.get('/manageAdmin', function (req, res) {
    res.render("manageAdmin");
    })

module.exports = router;