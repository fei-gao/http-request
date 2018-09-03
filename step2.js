var https = require('https');


function getAndPrintHTML () {

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step1.html'
    };
  
    /* Add your code here */
    https.get(requestOptions, function(response){

    response.setEncoding('utf-8');

    let chunks = '';
    //the callback is invoked when a `data` chunk is received
    //concatenate chunk of data to chunks string
    response.on('data', function (data) {
        chunks += data;
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
        console.log(`chunks received: ${chunks}`);
        console.log('Response stream complete.');
    });

    })
  
  };

  getAndPrintHTML();