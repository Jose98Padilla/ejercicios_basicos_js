var readline = require('readline-sync');
var cantidad = readline.question("Hasta que numero quieres llegar? ");
contador=0;
for(i=1; i<= cantidad; i++){
    residuo = i%3;
    if(residuo==0){
        console.log(i);
        contador++;
    }

}
console.log("Fueron: " + contador);