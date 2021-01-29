'use strict';

$(function() {
  $('form').on('submit', changePassword);
});

function changePassword(e) {
  e.preventDefault();

  var email = $('#email').val();
  var oldPassword = $('#oldPassword').val();
  var newPassword = $('#newPassword').val();

  $.post('/users/changePassword', {email: email, oldPassword: oldPassword, newPassword: newPassword})
  .success(function(data) {
    $('#alertPasswordChanged').show();
    $('form').trigger('reset');
    setTimeout(function() {
      location.href='/';
    }, 1500);
  })
  .fail(function(err) {
    alert('Error.  Check console.');
    console.log('err:', err);
  });
}
