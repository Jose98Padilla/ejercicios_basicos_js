var readline = require('readline-sync');
let numero1 = readline.question("Introduce el primer numero: ");
let numero2 = readline.question("Introduce el segundo numero: ");

let resultado =0;
console.log("1. suma\n2. resta\3. multiplicacion\4. division\n");
let opcion = readline.question("Tu eleccion: ");

switch(opcion){
    case 1:
            resultado = numero1 + numero2
            console.log(resultado);
            break;

    case 2:
        console.log("algo");
        break;
}