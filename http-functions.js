module.exports = function getHTML (options, callback) {
    const https = require('https');

    // Send the request
    https.get(options, function(response){
        
        // Set encoding to UTF-8
        response.setEncoding('utf-8');
        
        let chunks = '';
        //the callback is invoked when a `data` chunk is received
        //append chunk of data to chunks
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
};