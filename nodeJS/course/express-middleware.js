
const express = require('express');
let app = express();
const port = process.env.PORT || 3009;


app.use('/css',express.static(__dirname + '/public')); 


app.use((req, res, next) => {
    console.log('middleware');
    next();
})

app.get('/', function (req, res) {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>

    </head>
    <body>
        <h1>Hello world</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore asperiores suscipit assumenda tenetur possimus repudiandae voluptate tempora eligendi doloribus officia! Saepe harum enim quasi. Laudantium ipsum repellat odio fugiat cupiditate. Nisi, ipsa adipisci. Laudantium vel animi eos possimus accusamus vitae eius veniam soluta inventore fugiat quae quo, mollitia sequi aliquam.</p>
    </body>
    </html>
    `)
});



//create a server
app.listen(port);
console.log('it working');