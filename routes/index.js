var express = require('express');
var env = require('../app');
var router = express.Router();

var db = require('../utils/db');
var loginController = require('../controller/loginController')
//prepare : set OpenID in Session
var session = require('express-session');
router.use(session({
    secret: "hello",
    cookie: {maxAge: 600000},
    resave: true,
    saveUninitialized: true
}));

router.post('/login',loginController.userLogin)
module.exports = router;

