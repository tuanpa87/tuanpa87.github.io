const https = require('https');
const http = require('http');
const fs = require('fs');

const url = 'https://jsonplaceholder.typicode.com/posts';

http.createServer((req, res) => {

    if (req.method === 'GET' && req.url === '/posts') {

        https.get(url, (httpRes) => {

            httpRes.on('data', data => {
                httpRes.setEncoding('utf8');
                console.log(data);
                res.write(data);
            })

            httpRes.on('end', () => {
                res.end();
                console.log('request is over ')
            });

        })

    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        serverRes.end('404 error could not find what you looking for')
    }


}).listen(3009);

console.log('server is running');