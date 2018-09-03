function getAndPrintHTML (options) {

    const https = require('https');

    /* Add your code here */
    https.get(options, function(response){

        response.setEncoding('utf-8');
    
        let chunks = '';
        //the callback is invoked when a `data` chunk is received
        //concatenate chunk of data to chunks
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
  }
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };
  
  getAndPrintHTML(requestOptions);