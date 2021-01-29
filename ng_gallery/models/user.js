'use strict';

var mongoose = require('mongoose');
var Firebase = require('firebase');
var jwt = require('jwt-simple');

var JWT_SECRET = process.env.JWT_SECRET;
var ref = new Firebase('https://paigephotogallery.firebaseio.com/');

var User;

var userSchema = new mongoose.Schema({
  email: String,
  username: String,
  uid: String
});

// class methods
userSchema.statics.register = function (userObj, cb) {
  var firebaseUser = {email: userObj.email, password: userObj.password};
  ref.createUser(firebaseUser, function(err, userData) {
    if(err) return cb(err);
    var user = new User();
    user.uid = userData.uid;
    user.email = userObj.email;
    user.username = userObj.username;
    user.save(cb);
  });
};

userSchema.statics.login = function(userObj, cb) {
  ref.authWithPassword(userObj, function(err, authData) {
    if(err) return cb(err);
    User.findOne({uid: authData.uid}, function(err, user) {
      if(err || !user) return cb(err || 'User not found in db.');
      var token = user.generateToken();
      cb(null, token);
    });
  });
};

userSchema.statics.resetPassword = function(userEmail, cb) {
  ref.resetPassword({email: userEmail}, function(err) {
    if (err) return cb(err);
    cb()
  });
};

userSchema.statics.changePassword = function(userObj, cb) {
  var userInfo = {
    email: userObj.email,
    oldPassword: userObj.oldPassword,
    newPassword: userObj.newPassword,
  }
  ref.changePassword(userInfo, function(err) {
    if (err) return cb(err);
    cb()
  });
};

// instance method
userSchema.methods.generateToken = function() {
  var payload = {
    uid: this.uid,
    _id: this._id
  };
  var token = jwt.encode(payload, JWT_SECRET);
  return token;
};

User = mongoose.model('User', userSchema);

module.exports = User;
