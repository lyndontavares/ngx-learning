"use strict";

$(document).ready(init);

function init(){
  $("#delete").click(questionDelete);
  $('#makeCover').click(makeAlbumCover);
}

function makeAlbumCover(){
  var photoId = $(this).data('photo');

  $.ajax({
    method: 'POST',
    url: '/profile/changeCover',
    data: {photoId: photoId}
  }).success(function(albumId){
    location.href=`/profile/albums/${albumId}`;
  });
}

function questionDelete(){
  var $this = $(this);
  swal({
    title: "Are you sure you want to delete this image?",
    text: "You will not be able to recover it.",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "Yes, delete!",
    closeOnConfirm: true
  },
  function(){
    deletePhoto($this);
  });
}

function deletePhoto($this){
  var photoId = $this.data('photo');

  $.ajax({
    method: "DELETE",
    url: "/profile/delete" ,
    data: {photoId: photoId}
  }).success(function(albumId){
    location.href=`/profile/albums/${albumId}`
  });
}
