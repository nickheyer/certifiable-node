const logger = require('./logger'); // Importing the exported objects from the logger.js file --- Best practice is to store exports into a CONSTANT, since we won't be changing the data. 

console.log(logger); // Printing the object containing the exports, k:v pairs

logger("testing"); // Calling the log function by prefixing the function name with the variable name "logger"