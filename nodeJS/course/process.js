console.log(process.argv);
process.stdout.write('ask me a question');
process.stdin.on('data', function (answer) {
    console.log(answer.toString().trim());
    process.exit();
})
