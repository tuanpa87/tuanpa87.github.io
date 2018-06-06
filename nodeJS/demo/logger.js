 var url = 'http://mylogger.co/log';
// function log(message) {
//     console.log(message);
// }

// module.exports.log = log;


const EventEmitter = require('events');


class Logger extends EventEmitter  {
    log(message) {
        //send HTTP request
        console.log(message);

        //Raise an event
        this.emit('messageLogged', {id: 1, url: 'http://'});
    }
}

module.exports = Logger;