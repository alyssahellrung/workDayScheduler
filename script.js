$(document).ready(function() {
  $("#currentDay").text(moment().format("MMMM Do YYYY"));
  
  var milTime = moment().format("H");
 
  for (var hour = 9; hour <= 17; hour++) {
  var index = hour;
  var blockTime = $("#" + index).data("military");
  
  if (blockTime == milTime) {
    $("#" + index).css({"background-color": "#ff6961", "color": "white"});
  } 
  else if (blockTime < milTime) {
    $("#" + index).css({"background-color": "#d3d3d3", "color": "white"});
  }
  else if (blockTime > milTime) {
    $("#" + index).css({"background-color": "#77dd77", "color": "white"});
  }
  }

  var nineAM = localStorage.getItem("9");
  $("#9").val(nineAM);

  var tenAM = localStorage.getItem("10");
  $("#10").val(tenAM);

  var elevenAM = localStorage.getItem("11");
  $("#11").val(elevenAM);

  var noon = localStorage.getItem("12");
  $("#12").val(noon);

  var onePM = localStorage.getItem("13");
  $("#13").val(onePM);

  var twoPM = localStorage.getItem("14");
  $("#14").val(twoPM);

  var threePM = localStorage.getItem("15");
  $("#15").val(threePM);

  var fourPM = localStorage.getItem("16");
  $("#16").val(fourPM);

  var fivePM = localStorage.getItem("17");
  $("#17").val(fivePM);
        

  $(".btn").on("click", function() {
    var messageId = $(this).data("time");
    $("#" + messageId).val();
    localStorage.setItem(messageId, $("#" + messageId).val());
  })
});