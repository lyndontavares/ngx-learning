'use strict';

$(function() {
  $('form').on('submit', loginUser);
});

function loginUser(e) {
  e.preventDefault();
  var email = $('#email').val();
  var password = $('#password').val();

  $.post('/users/login', {email: email, password: password})
  .success(function(data) {
    location.href = '/profile';
  })
  .fail(function(err) {
    alert('Error.  Check console.');
    console.log('err:', err);
  });
}
