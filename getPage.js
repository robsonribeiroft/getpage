var request = require('request');
var file = require('fs');
var url = 'http://www.google.com.br';
/*
Página de exemplo do airbnb :)
https://www.airbnb.com.br/rooms/798483
*/


request(url, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  file.writeFile('content.html', body, function(err){
    if (err) {
      console.log(err);
    }
    console.log("The file was saved!");
  });
});
