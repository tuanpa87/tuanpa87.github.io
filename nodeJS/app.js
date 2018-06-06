// const logger = require('./logger');
// logger.log('message');


// const path = require('path');
// var pathObj = path.parse(__filename);
// console.log(pathObj);



// const os = require('os');
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();
// console.log(totalMemory);
// console.log(freeMemory);



//const fs = require('fs');
// const files = fs.readdirSync('./');
// console.log(files);
// fs.readdir('./', function(err, files) {
//     if(err) {
//         console.log('error', err);
//     } else {
//         console.log('Result', files);
//     }
// })


// const EventEmitter = require('events');
// const emitter = new EventEmitter();


// //register a listener
// emitter.on('messageLogged', (arg) => {
//     console.log('listener called' , arg)
// })



// //Raise an event
// emitter.emit('messageLogged', {id: 1, url: 'http://'});


//const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

//register a listener
logger.on('messageLogged', (arg) => {
    console.log('listener called' , arg)
})

logger.log('message');

