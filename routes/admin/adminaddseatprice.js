var express = require("express");
var router = express.Router();
const connection = require("../../connection/connection");

router.get('/adminaddseatprice', function (req, res) {
    res.render("admin/adminaddseatprice");
    })

module.exports = router;