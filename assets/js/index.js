$(document).ready(function() {
  //Modals for the recipes page
  $("#exampleModal").on("shown.bs.modal", function() {
    $("#myInput").trigger("focus");
  });

  //Modals for the newletter
  $("#newsletterModal").on("shown.bs.modal", function() {
    $("#myInput").trigger("focus");
  });

  //Maps for main page
  $("#lenexaMap").hide();

  $("#opMap").on("click", function() {
    $("#overlandParkMap").show();
    $("#lenexaMap").hide();
  });

  $("#lenMap").on("click", function() {
    $("#overlandParkMap").hide();
    $("#lenexaMap").show();
  });

  //Microgreens 101 Page
  $("#harvestWash").hide();
  $("#useThem").hide();
  $("#vegetables").hide();
  $("#sprouts").hide();

  //Show info for first slide
  $("#firstSlide").on("click", function() {
    $("#knowMicrogreens").show();
    $("#harvestWash").hide();
    $("#useThem").hide();
    $("#vegetables").hide();
    $("#sprouts").hide();
  });

  //Show info for second slide
  $("#secondSlide").on("click", function() {
    $("#knowMicrogreens").hide();
    $("#harvestWash").show();
    $("#useThem").hide();
    $("#vegetables").hide();
    $("#sprouts").hide();
  });

  //Show info for third slide
  $("#thirdSlide").on("click", function() {
    $("#knowMicrogreens").hide();
    $("#harvestWash").hide();
    $("#useThem").show();
    $("#vegetables").hide();
    $("#sprouts").hide();
  });

  //Show info on fourth slide
  $("#fourthSlide").on("click", function() {
    $("#knowMicrogreens").hide();
    $("#harvestWash").hide();
    $("#useThem").hide();
    $("#sprouts").show();
    $("#vegetables").hide();
  });

  //Show info on fifth slide
  $("#fifthSlide").on("click", function() {
    $("#knowMicrogreens").hide();
    $("#harvestWash").hide();
    $("#useThem").hide();
    $("#sprouts").hide();
    $("#vegetables").show();
  });

  //Product page jumbotron
  $(".koenigHill").click(function() {
    var koenigHill = $(this).attr("data-link");
    window.open(koenigHill);
    return false;
  });

  $("#varieties").hide();
  $("#wholesale-container").hide();

  $("#living").click(function() {
    $("#varieties").show();
    $("#varieties-categories").hide();
    $("#switch-container").css("visibility", "visible");
  });

  $("#wholesale").click(function() {
    $("#wholesale-container").show();
    $("#varieties-categories").hide();
    $("#switch-container").css("visibility", "visible");
  });

  $("#switch-varieties").click(function() {
    $("#wholesale-container").hide();
    $("#varieties").show();
  });

  $("#switch-wholesale").click(function() {
    $("#wholesale-container").show();
    $("#varieties").hide();
  });
});
