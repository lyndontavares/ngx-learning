'use strict';

var express = require('express');
var router = express.Router();

var authMiddleware = require('../config/auth');
var User = require('../models/user');


/* POST to create new user */
router.post('/register', function(req, res, next) {
  User.register(req.body, function(err, savedUser) {
    res.status(err ? 400 : 200).send(err || savedUser);
  });
});

/* POST to log in */
router.post('/login', function(req, res, next) {
  User.login(req.body, function(err, token) {
    if(err) return res.status(400).send(err);
    res.cookie('mytoken', token).send();
  });
});

/* GET to rend reset password page */
router.get('/resetPassword', function(req, res, next){
  res.render('resetPassword');
});

/* POST request to reset password */
router.post('/resetPassword', function(req, res, next){
  User.resetPassword(req.body.email, function(err) {
    if (err) return res.status(400).send(err);
    res.send("password reset successful");
    });
});

/* POST request to change user password */
router.post('/changePassword', function(req, res, next){
  User.changePassword(req.body, function(err) {
    if (err) return res.status(400).send(err);
    res.send("password change successful");
  });
});

/* GET request to clear cookies to log a user out */
router.get('/logout', function(req, res, next) {
  res.clearCookie('mytoken').redirect('/');
});


module.exports = router;
