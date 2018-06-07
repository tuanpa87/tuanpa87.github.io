const WebSocketServer = require('ws').Server;
const WSS = new WebSocketServer({port: 3233});


WSS.on('connection', (ws) => {
    console.log('connected')

})