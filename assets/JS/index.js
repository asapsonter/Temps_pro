
$(document).ready(function () {
  var currentDate = new Date().getFullYear();
  $("#copyRight").html(`Copyright © ${currentDate} asapsonter ltd <br>`);
});

window.onload = function () {
  if (window.jQuery) {
    // jQuery is loaded
    console.log("jQuery has loaded!");
  } else {
    // jQuery is not loaded
    console.log("jQuery has not loaded!");
  }
};
