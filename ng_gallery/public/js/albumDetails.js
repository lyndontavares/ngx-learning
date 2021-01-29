"use strict";

$(document).ready(init);

function init(){
  $('table').on("click", "#delete", questionDelete);
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
  var $row = $this.closest('tr');
  var photoId = $row.data('photo');

  $.ajax({
    method: "DELETE",
    url: "/profile/delete" ,
    data: {photoId: photoId}
  }).success(function(){
    $row.remove();
  });
}
