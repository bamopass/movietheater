var express = require("express");
var router = express.Router();
const connection = require("../../connection/connection");

router.get('/welcomeadmin', function (req, res) {
    res.render("admin/welcomeadmin");
    })

module.exports = router;