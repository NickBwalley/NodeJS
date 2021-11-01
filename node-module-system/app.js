// EVENTS MODULE
const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

//Register a listener
emitter.on('messageLogged', (arg) => {
  console.log('Listener called', arg);
});

logger.log('this is my message');

// Raise: logging(data: message)

// FILE SYSTEM MODULE
/*const fs = require('fs');
const files = fs.readdirSync('./');
fs.readdir('./', function (err, files) {
    if (err) console.log('Error', err);
    else console.log('Result', files);
});
console.log(files);*/

// OS MODULE
/*const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
// Template string.
// ES6 / ES2015: ECMAScript 6
console.log(`Total Memory:  ${totalMemory}`);
console.log(`Free Memory:  ${freeMemory}`);*/

// PATH MODULE
/*const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);*/

// const logger = require('./logger');
// console.log(logger);
// logger('hello world');
