// EVENTS MODULE
const EventEmitter = require('events');
// const emitter = new EventEmitter();

class Logger extends EventEmitter {
  log(message) {
    // Send a HTTP request
    console.log(message);
    // Raise an event
    this.emit('messageLogged', { id: 1, url: 'https://this' });
  }
}

module.exports = Logger;

// module.exports.log = log;
// exports.log = log;
// exports = log; // this is a bad approach.
