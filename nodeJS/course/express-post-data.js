
const express = require('express');
const bodyParser = require('body-parser')
let app = express();
const port = process.env.PORT || 3009;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/assets',express.static(__dirname + '/public')); 


app.use((req, res, next) => {
    console.log('middleware');
    next();
})

app.post('/post', (req,res) => {
    console.log(`it works:  ${req.body.email}`);
    console.log(req.body);
})



//create a server
app.listen(port);
console.log('it working');