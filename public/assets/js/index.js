$("body").on("click", ".unthrown", function(event) {
  var id = $(this).attr("id");
  $.ajax(`/api/discs/${id}`, { type: "PUT", data: id }).then(function(data) {
    location.reload();
  });
});
