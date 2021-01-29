'use strict';

var express = require('express');
var router = express.Router();

var authMiddleware = require('../config/auth');
var multer = require('multer');
var upload = multer({ storage: multer.memoryStorage() });
var Photo = require('../models/photo');

router.use(authMiddleware);

router.post('/:albumId', upload.array('images'), function(req, res){
  var albumId = req.params.albumId;
  var files = req.files;
  var userId = req.user._id;
  Photo.addPhotos(albumId, userId, files, function(err, data){
    if (err) return res.status(400).send(err);
    res.redirect('/profile/albums/' + req.params.albumId);
  });
});

module.exports = router;
