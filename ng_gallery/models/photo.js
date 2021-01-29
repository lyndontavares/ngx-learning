'use strict';

var mongoose = require('mongoose');
require('dotenv').config();
var AWS = require('aws-sdk');
var uuid = require('node-uuid');
var each = require('async-each');
var s3 = new AWS.S3();
var moment = require('moment');

var Photo;

var photoSchema = new mongoose.Schema({
  albumId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Album'
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  filename: String,
  url: String,
  dateAdded: {type: String, default: moment().format('MMMM Do YYYY')}
});

// class methods
photoSchema.statics.addPhotos = function(albumId, userId, files, callback) {
  each(files, function(file, next){
    var filename = file.originalname;
    var ext = filename.match(/\.\w+$/)[0] || '';
    var key = uuid.v1() + ext;
    var params = {
      Bucket: process.env.AWS_BUCKET,
      Key: key,
      Body: file.buffer
    };
    s3.putObject(params, function(err, data){
      if (err) return callback(err);
      var url = process.env.AWS_URL + "/" + process.env.AWS_BUCKET + "/" + key;
      var photo = new Photo({
        filename: filename,
        url: url,
        albumId: albumId,
        userId: userId
      });
      photo.save(function(){
        next();
      });
    });
  }, function(err, contents){
      if (err) return res.status(400).send(err);
      callback();
  });
};

Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
