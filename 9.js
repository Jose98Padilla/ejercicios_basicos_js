var readline = require('readline-sync');
var numero = readline.question("Introduce una numero: ");
console.log("la letra que introduciste es: " + numero);
if(numero < 0)
    console.log("El numero es negativo");
else
    console.log("El numero es positivo o 0");
