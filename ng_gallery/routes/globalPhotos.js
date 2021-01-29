'use strict';

var express = require('express');
var router = express.Router();

var authMiddleware = require('../config/auth');

var User = require('../models/user');
var Album = require('../models/album');
var Photo = require('../models/photo');

router.use(authMiddleware);

router.get('/', function(req, res){
  Photo.find({userId: {$ne: req.user._id}}, function(err, photos){
    res.render('globalPhotos', {photos: photos});
  }).populate('albumId userId');
});


router.get('/:photoId', function(req, res) {
  Photo.findById(req.params.photoId, function(err, photo) {
    if (err) return res.status(400).send(err);
    res.render('globalPhoto', {photo: photo});
  }).populate('userId');
});


module.exports = router;
