let getHTML = require("../http-functions");

let requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/reverse.html'
  };

function printReverse(html){
    let reversed = html.split("").reverse().join("");
    console.log("html is", reversed);
}

getHTML(requestOptions, printReverse);