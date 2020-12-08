//Check off Specified Todos By Clicking
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    //Get input from user
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append(
      '<li><span id="delete"><i class="fa fa-trash"></i></span> ' +
        todoText +
        "</li>"
    );
  }
});

$(".fa-plus").click(function () {
  $("input[type='text']").fadeToggle();
});
