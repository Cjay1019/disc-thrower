var selected = [];

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
  $("#delete")
    .text("Done Deleting")
    .attr("id", "done")
    .addClass("btn-danger")
    .removeClass("btn-default");
  $(".thrown")
    .removeClass("btn-outline-success thrown")
    .addClass("delete-thrown-disc btn-outline-danger");
  $(".unthrown")
    .removeClass("btn-success unthrown")
    .addClass("delete-unthrown-disc btn-danger");
});

$("body").on("click", "#done", function(event) {
  $("#done")
    .text("Delete Discs")
    .attr("id", "delete")
    .addClass("btn-default")
    .removeClass("btn-danger");
  $(".delete-thrown-disc")
    .removeClass("delete-thrown-disc btn-outline-danger")
    .addClass("btn-outline-success thrown");
  $(".delete-unthrown-disc")
    .removeClass("delete-unthrown-disc btn-danger")
    .addClass("btn-success unthrown");
  if (selected.length !== 0) {
    for (i = 0; i < selected.length; i++) {
      $.ajax(`/api/delete/${selected[i].id}`, {
        type: "DELETE",
        data: selected[i].id
      });
    }
    location.reload();
  }
});

$("body").on("click", ".delete-unthrown-disc, .delete-thrown-disc", function(
  event
) {
  var id = $(this).attr("id");
  var text = $(this).text();

  for (i = 0; i < selected.length; i++) {
    if (selected[i].id === id) {
      $(`#${id}`).text(text);
      selected.splice(i, 1);
      return;
    }
  }
  selected.push({ id: id, name: text });
  $(`#${selected[i].id}`).append(" <i class='fa fa-check'></i>");
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
