var readline = require('readline-sync');
var numero = readline.question("Introduce una numero: ");
console.log("la letra que introduciste es: " + numero);
residuo = numero%2;
console.log(residuo);
if(residuo == 0)
    console.log("Es par");
else
    console.log("Es impar");
