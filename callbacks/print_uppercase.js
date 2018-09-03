let getHTML = require("../http-functions");

let requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/uppercase.html'
  };

function printUpperCase (html){
    console.log('html is', html.toUpperCase());
}

getHTML(requestOptions, printUpperCase);

