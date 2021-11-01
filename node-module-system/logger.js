var url = 'http://mylogger.io/log';
console.log(__filename);
console.log(__dirname);
function log(message) {
    // Send a HTTP request
    console.log(message);
}

module.exports = log;

module.exports.log = log;
// exports.log = log;
// exports = log; // this is a bad approach.
