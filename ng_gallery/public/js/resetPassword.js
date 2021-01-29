'use strict';

$(function() {
  $('form').on('submit', resetUser);
});

function resetUser(e) {
  e.preventDefault();
  var email = $('#email').val();
  console.log(email);

  $.post('/users/resetPassword', {email: email})
  .success(function(data) {
    $('#alertReset').show();
    $('form').trigger('reset');
    setTimeout(function() {
      location.href='/login';
    }, 3000);
  })
  .fail(function(err) {
    alert('Error.  Check console.');
    console.log('err:', err);
  });
}
