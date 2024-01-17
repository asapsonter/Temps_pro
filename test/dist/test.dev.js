"use strict";

// get news feeds from yahoo news API
// alert("yahoo news");
$(document).ready(function () {
  var currentDate = new Date().getFullYear();
  $("#copyRight").html("Copyright \xA9 ".concat(currentDate, " asapsonter ltd <br>"));
}); // window.onload = function () {
//   if (window.jQuery) {
//     // jQuery is loaded
//     console.log("jQuery has loaded!");
//   } else {
//     // jQuery is not loaded
//     console.log("jQuery has not loaded!");
//   }
// };
///// testing yahoo api code //////////////////////////////////
//GET https://newsapi.org/v2/everything?q=Apple&from=2024-01-04&sortBy=popularity&apiKey=API_KEY
// var url =
//   "https://newsapi.org/v2/top-headlines?sources=yahoo-news&apiKey=108eaed5470f4e2995d7f386979078c5";
// var req = new Request(url);
// fetch(req)
// .then(function (response) {
//   console.log( response.json());
// })
///test sample.
// Import the JSON file
// const data = require('./newsdata.json');
// // Access the 'title' and 'full_description' properties
// data.results.forEach(result => {
//   const title = result.title;
//   const fullDescription = result.full_description;
//   var h3 = $("<h3> </h3>").text(headlines);
//   var paragrah = $("<img></img>").attr("src", picture);
//   // Now you can use 'title' and 'fullDescription' in your code
//   console.log(`Title: ${title}`);
//   console.log(`Full Description: ${fullDescription}`);
// });
// var url =
//   "http://newsapi.org/v2/top-headlines?sources=yahoo-news&apiKey=108eaed5470f4e2995d7f386979078c5";
//   console.log(url);
// $.getJSON(url ,  function(data){
//   $.each(data.results, function(i, result) {
//     var title = result.title;
//     var fullDescription = result.full_description;
//       console.log(`Title: ${title}`);
//       console.log(`Full Description: ${fullDescription}`);
//     // get tile and descrip
//     h4 = $("<h4> </h4>").text(title);
//     article = $("<p> </p>").text(fullDescription);
//     // Append the new elements to the body (or any other container element)
//     $(".grid-item").append(h4, article);
//   });});
//pub_361627a038b5ff106b13dfba0a669f9074126;

var url = "https://newsdata.io/api/1/news?apikey=pub_361627a038b5ff106b13dfba0a669f9074126";
var req = new Request(url);
fetch(req).then(function (response) {
  console.log(response.json());
}); //var url = "https://newsdata.io/api/1/news?apikey=pub_361627a038b5ff106b13dfba0a669f9074126";