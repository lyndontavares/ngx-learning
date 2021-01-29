'use strict';

var mongoose = require('mongoose');
var User = require('../models/user');
var Photo = require('../models/photo');
var Album;

var albumSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {type: String, default: Date.now().toString()},
  coverImg: {type: String, default: "http://images.clipartpanda.com/silliness-clipart-Photo_Album_Clip_Art.gif"}
});

// class methods
albumSchema.statics.renderAlbums = function(userId, callback) {
  Album.find({userId: userId}, function(err, albums){
    if (err) return res.status(400).send(err);
    callback(null, albums);
  });
};

albumSchema.statics.displayAlbum = function(albumId, callback) {
  Album.findById(albumId, function(err, album){
    if (err) return res.status(400).send(err);
    Photo.find({albumId: albumId}, function(err, photos){
      if (err) return res.status(400).send(err);
      callback(null, {album: album, photos: photos});
    });
  });
};

Album = mongoose.model('Album', albumSchema);

module.exports = Album;
