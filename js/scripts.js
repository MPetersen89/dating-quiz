$(document).ready(function() {
  $("form#yourInfo").submit(function() {
    event.preventDefault;
    const name = $("#inputName").val();

    console.log(name)
  });
});