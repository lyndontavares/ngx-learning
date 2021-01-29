'use strict';

var $email, $password, $password2;

$(function() {
  $('button').click(registerUser);
});

function registerUser(e) {
  e.preventDefault();
  var email = $('#email').val();
  var password = $('#password').val();
  var password2 =$('#password2').val();
  var username = $('#username').val();

  if(password !== password2) {
    $('.password').val('');
    return alert('Passwords must match.');
  }

  var newUser = {email: email, password: password, username: username};

  $.post('/users/register', newUser)
  .success(function(data) {
    location.href = '/login';
  })
  .fail(function(err) {
    alert('Error.  Check console.');
    console.log('err:', err);
  });
}
