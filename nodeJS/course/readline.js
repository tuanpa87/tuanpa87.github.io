const readline = require('readline');
var rline = readline.createInterface(process.stdin, process.stdout);
rline.question('What is your name', (name) => {
    console.log(name);
    rline.setPrompt(`${name} how old are you? `);
    rline.prompt();
})
