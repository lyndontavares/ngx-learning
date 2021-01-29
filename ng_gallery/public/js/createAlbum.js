'use strict';

$(function() {
  $('form').on('submit', createAlbum);
});

function createAlbum(e) {
  e.preventDefault();
  var title = $('#title').val() || 'untitled';

  $.post('/profile/albums', {title: title})
  .success(function(data) {
    location.href = '/profile/albums';
  }).
  fail(function(err) {
    console.log('error creating album:', err);
  });
}
