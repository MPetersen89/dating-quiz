$(document).ready(function() {
  $("form#yourInfo").submit(function() {
    const name = $("#inputName").val();

    if (name === "") {
      $("#yourInfoDiv").addClass("has-error");
      $("span#helpBlock1").text("Please enter your name");
    }
    else {

    }
    event.preventDefault();
  });
});