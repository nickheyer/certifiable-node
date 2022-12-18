
var url = 'http://mylogger.io/log'; // Hypothetical url, doesn't exist

function log(message) {
    // Send an HTTP request
    console.log(message);
    console.log(__filename);
}

module.exports = log; // Instead of creating an object for log with exports.log, we export the function itself with exports = log





