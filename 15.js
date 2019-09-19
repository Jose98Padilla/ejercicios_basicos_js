var readline = require('readline-sync');
inicio = readline.question("Introduce el numero en el que quieres inciar: ");
final = readline.question("Introduce el numero en el que quieres terminar: ");
let contador=0;
let evaluarPares=0;
let sumaPares=0;
let contadorPares=0;
for(i= inicio; i<=final ; i++){
    console.log(i);
    contador++;

    evaluarPares = i%2;
    if(evaluarPares ==0){
        contadorPares++;
        sumaPares= parseInt(sumaPares) +i;
    }
}
console.log("Esta es la cantidad de pares que hay: " + contadorPares);
console.log("la suma de los pares es: " + sumaPares);