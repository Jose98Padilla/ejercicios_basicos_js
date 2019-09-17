var readline = require('readline-sync');
var cantidad = readline.question("Cuantas frases quieres introducir? ");
for(i=1 ; i<= cantidad; i++){
    frases = readline.question("Frase: ");
    console.log("\n");
    console.log("la frase es: " + frases);
}