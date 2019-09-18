var readline = require('readline-sync');
console.log("Solo se pueden introducir S o N");

do{
    var letra = readline.question("Introduce una letra: ");
    console.log("la letra que introduciste es: " + letra);
    if(letra == 'S' || letra == 'N' || letra == 's' || letra == 'n'){
        console.log("Es una letra valida");
        break;
    }

    else
    console.log("Es una letra invalida");

}while(letra != 'S' || letra != 'N' || letra != 's' || letra != 'n');


