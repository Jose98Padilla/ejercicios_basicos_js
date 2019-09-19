const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let character;
let count = 0;
rl.question("Enter the character to search: ", (answer)=>{
    character = answer;
});

rl.on('line', (line) =>{ 
    for(let c of line){
        if (c === character) count++;
    }
    let msg = `Number of ${character}´s in phrase is ${count}`
    console.log(msg);
    rl.close();
});

rl.prompt();