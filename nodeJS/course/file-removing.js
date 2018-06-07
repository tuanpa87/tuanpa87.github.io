const fs = require('fs');


try {
    fs.unlinkSync('./newDir/newfile.js');
} catch (err) {
    console.log(err + ' Here is the error');
}

//fs.rmdirSync('./newDir');