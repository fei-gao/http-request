function getHTML (options, callback) {

    /* Add your code here */
    const https = require('https');

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
            callback(chunks);
            console.log('Response stream complete.');
        });
        
    });
  }
  
  function printHTML (html) {
    console.log("html is", html);
  }
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };

  getHTML(requestOptions, printHTML);