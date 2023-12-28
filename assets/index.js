// var jsdom = require("jsdom");
// var $ = require("jquery")(new jsdom.JSDOM().window);

// const items = document.querySelector(".button");
// button.animate(
//   [{ transform: "translateX(0px)" }, { transform: "translateX(20px)" }],
//   {
//     duration: 2000,
//     easing: "ease-in-out",
//     direction: "alternate",
//     iterations: Infinity,
//   }
// );

$(function () {
  var currentDate = new Date().getFullYear();
  $("#copyRight").html("Copyright © " + currentDate + " Fireship LLC <br>");
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

$(document).onload = function () {
  alert("jQuery has loaded!");
};
