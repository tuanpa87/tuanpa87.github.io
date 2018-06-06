const fs = require('fs');
fs.writeFile('./modules/data.html', 'hello this file has just been created \n', 'utf8', (err, content) => {
    if(err) return err;
    console.log('this file has been saved');
});

fs.appendFile('./modules/data.html', 'extra data apppended to this file', 'utf8', (err, content) => {
    if(err) return err;
    console.log('this file has been saved');
})