$(document).ready(function() {
  $("form#yourInfo").submit(function(event) {
    const name = $("#inputName").val();
    const band = $("#inputBand").val();
    const horoscope = $("#inputHoroscope").val();
    const food = $("#inputFood").val();

    if (name === "") {
      $("#yourNameDiv").addClass("has-error");
      $("span#helpBlock1").text("Please enter your name");
    }

    if (band === "") {
      $("#yourBandDiv").addClass("has-error");
      $("span#helpBlock2").text("Please enter your favorite band");
    }

    if (horoscope === "1") {
      $("#yourHoroscopeDiv").addClass("has-error");
      $("span#helpBlock3").text("Please enter your sign");
    }

    if (food === "") {
      $("#yourFoodDiv").addClass("has-error");
      $("span#helpBlock4").text("Please enter your favorite food");
    }

    if (name !== "" && band !== "" && horoscope !== "1" && food !== "") {
      $("form#yourInfo").toggle();
      $("#everybodyLovesDevito").show();
    }

    event.preventDefault();
  });
});