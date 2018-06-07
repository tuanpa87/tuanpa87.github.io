const express = require('express');
let app = express();
const port = process.env.PORT || 3009;

//create routes
app.get('/', (req, res) => {
    res.send('<h1> hello world</h1>')
});


app.get('/api', (req, res) => {
    //res.send('<h1> this is api</h1>');

    res.json({name: 'John'});
})


//create a server
app.listen(port);
console.log('it working');

