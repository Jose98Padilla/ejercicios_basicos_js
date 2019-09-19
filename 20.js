var readline = require('readline-sync');
numero = readline.question("De cual numero quieres calcular factorial? ");

function factorial(numero){
    let fac = 1;
    for(i = 1 ; i<= numero; i++){
        fac*=i;
    }

    return fac;
}

console.log(factorial(numero));

