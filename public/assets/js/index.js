$("body").on("click", ".unthrown", function(event) {
  var id = $(this).attr("id");
  $.ajax(`/api/discs/${id}`, { type: "PUT", data: id }).then(function(data) {
    location.reload();
  });
});

$("#reset").on("click", function(event) {
  $.ajax("/api/reset", { type: "PUT" }).then(function(data) {
    location.reload();
  });
});

$("body").on("click", "#delete", function(event) {
  $("#delete").text("Done Deleting");
  $("#delete").attr("id", "done");
  $(".thrown").after("<button class='delete'>Del</button>");
  $(".unthrown").after("<button class='delete'>Del</button>");
});

$("body").on("click", "#done", function(event) {
  $("#done").text("Delete Discs");
  $("#done").attr("id", "delete");
  $(".delete").remove();
});

$("#create-form").on("submit", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  var newDisc = {
    disc_name: $("#new-disc")
      .val()
      .trim(),
    thrown: false
  };

  // Send the POST request.
  $.post("/api/newdisc", newDisc).then(function() {
    // Reload the page to get the updated list
    location.reload();
  });
});
