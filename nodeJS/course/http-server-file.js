const http = require('http');
const fs = require('fs');

http.createServer((req,res) =>{
    console.log(req.method);

    if (req.url === '/') {
        fs.readFile('./global.html', 'utf8', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);


        })
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 error');
    }

}).listen(3009);

console.log('listening');
