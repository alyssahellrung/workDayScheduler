$(document).ready(function() {
  // Sets the date at the top of the page (in the header).
    $("#currentDay").text(moment().format("MMMM Do YYYY"));
  
  //Creates a variable to register the current, real world time.
  var currentTime = moment().format("HH");
  console.log(currentTime);
  
  // Sets the attribute for the blocks according to what the current time is
  var index = 9;
  
  for (var i = 0900; i < 1700; i = i+100) {
  var blockTime = $("#" + index).data("military");
  console.log(blockTime);
  console.log(currentTime);
  
  if (blockTime === currentTime) {
    $("#" + index).attr("class", "present");
  } 
  else if (blockTime < currentTime) {
    $("#" + index).attr("class", "past");
  }
  else if (blockTime > currentTime) {
    $("#" + index).attr("class", "future");
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
  
    var onePM = localStorage.getItem("1");
    $("#1").val(onePM);
  
    var twoPM = localStorage.getItem("2");
    $("#2").val(twoPM);
  
    var threePM = localStorage.getItem("3");
    $("#3").val(threePM);
  
    var fourPM = localStorage.getItem("4");
    $("#4").val(fourPM);
  
    var fivePM = localStorage.getItem("5");
    $("#5").val(fivePM);
  
    
    
  //When the submit button for any time block is clicked, the value of that time block (the message that has been written there) is set in local storage.
    $(".btn").on("click", function() {
      var messageId = $(this).data("time");
      // console.log($(this).data("time"));
      $("#" + messageId).val();
      localStorage.setItem(messageId, $("#" + messageId).val());
    })
  
  });