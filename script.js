$(document).ready(function() {
  // Sets the date at the top of the page (in the header).
  $("#currentDay").text(moment().format("MMMM Do YYYY"));
  
  //Creates a variable to register the current, real world time in 12-hour format
  var currentTime = moment().format("h");
  //Creates a variable to register the current, real world time in 24-hour format
  var milTime = moment().format("H");
 
  // Sets the color attributes for the blocks according to what the current time is
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

  //Sets a variable that allows us to get previously submitted items out of local storage for each time block
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
          
  //When the submit button for any time block is clicked, the value of that time block (the message that has been written there) is set in local storage.
    $(".btn").on("click", function() {
      var messageId = $(this).data("time");
      // console.log($(this).data("time"));
      $("#" + messageId).val();
      localStorage.setItem(messageId, $("#" + messageId).val());
    })
  });