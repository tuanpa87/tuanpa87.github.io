const express = require('express');
let app = express();
const port = process.env.PORT || 3009;

app.get('/', function (req,res) {
    res.send('home')
})

app.get('/post/:id', (req,res) => {
    res.send(`
       
        <p> Here is post number ${req.params.id} </p>
    `)
})


//create a server
app.listen(port);
console.log('it working');