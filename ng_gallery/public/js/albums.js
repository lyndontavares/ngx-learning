"use strict";

$(document).ready(init);

function init(){
  $('table').on("click", "#delete", questionDelete);
}

function questionDelete(){
  var $this = $(this);
  swal({
    title: "Are you sure you want to delete this album?",
    text: "You will not be able to recover any of the images.",
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
  var $row = $this.closest('tr');
  var albumId = $row.data('album');

  $.ajax({
    method: "DELETE",
    url: "/profile/albums/delete" ,
    data: {albumId: albumId}
  }).success(function(){
    $row.remove();
  });
}
