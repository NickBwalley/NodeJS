var url = 'http://mylogger.io/log';

function log(message) {
    // Send a HTTP request
    console.log(message);
}

module.export.log = log;
// module.export.endPoint = url;
