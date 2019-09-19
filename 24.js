
var readline = require('readline-sync');
numero = readline.question("Hasta que numero quieres llegar? ");
//let c = 100;
let j = 2;
let numerosPrimos = [];

for (j=0; j < numero; j++) {

  if (primo(j)) {
    numerosPrimos.push(j);
  }
  
}

console.log(numerosPrimos);

function primo(numero) {

  for (var i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}