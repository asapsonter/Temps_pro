// get news feeds from yahoo news API
alert("yahoo news");
// Get the news feeds from Yahoo News API
$.ajax({
  url: "http://newsapi.org/v2/top-headlines?sources=yahoo-news&apiKey=108eaed5470f4e2995d7f386979078c5",
  method: "GET",
  dataType: "json",
  success: function (data) {
    console.log("here is the data::" + data);
    console.log("success on api call");
    // Check if the data is an object and has an articles property
    if (typeof data === "object" && data.articles) {
      // Loop through the first 4 articles
      for (var i = 0; i < 4; i++) {
        // Check if the index is within the array length
        if (i < data.articles.length) {
          // Get the headline and the picture from the data
          var headlines = data.articles[i].title;
          var picture = data.articles[i].urlToImage;

          // Create an h3 element for the headline and an img element for the picture
          var h3 = $("<h3> </h3>").text(headlines);
          var img = $("<img></img>").attr("src", picture);

          // Append the h3 and the img elements to the corresponding div box
          $(".grid-item").eq(i).append(h3, img);
        }
      }
    }
  },
  error: function (error) {
    // Handle the error
    console.log(":::there is error");
    console.log(error);
  },
});

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

///// testing yahoo api code //////////////////////////////////
//GET https://newsapi.org/v2/everything?q=Apple&from=2024-01-04&sortBy=popularity&apiKey=API_KEY

var url =
  "https://newsapi.org/v2/top-headlines?sources=yahoo-news&apiKey=108eaed5470f4e2995d7f386979078c5";
 

var req = new Request(url);
fetch(req)
.then(function (response) {
  console.log( response.json());
})


///test sample.
// Import the JSON file
const data = require('./sample.json');

// Access the 'title' and 'full_description' properties
data.results.forEach(result => {
  const title = result.title;
  const fullDescription = result.full_description;

  // Now you can use 'title' and 'fullDescription' in your code
  console.log(`Title: ${title}`);
  console.log(`Full Description: ${fullDescription}`);
});
