
const emitter = require('./modules/SendEmail');

emitter.on('newEvent', (message) => {
    console.log(`Message: ${message}`);
});

emitter.emit('newEvent', 'Sending email to user after registation');
