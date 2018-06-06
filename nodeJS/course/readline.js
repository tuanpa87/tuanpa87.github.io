const readline = require('readline');
const util = require('util');
var rline = readline.createInterface(process.stdin, process.stdout);
rline.question('What is your name', (name) => {
    //console.log(name);
    rline.setPrompt(`${name} how old are you? `);
    rline.prompt();

    rline.on('line', (age) => {
        if(age < 18) {
            util.log(`${name.trim()} because you are ${age} years old, you can not process`);
            rline.close();
        } else {
            util.log(`${name.trim()} welcome`);
            rline.close();
        }
    })
})
