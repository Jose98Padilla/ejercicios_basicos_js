/*
# npm install readline-sync

var readline = require('readline-sync');

var name = readline.question("What is your name?");

console.log("Hi " + name + ", nice to meet you.");
*/

var readline = require('readline-sync');
var cantidad = readline.question("Cual es el maximo: ");
for(i=1 ; i<= cantidad; i++){
    console.log(i);
}