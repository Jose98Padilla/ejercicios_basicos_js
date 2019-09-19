
var readline = require('readline-sync');
do{
    numero = readline.question("A partir de que numero quieres comenzar? ");
    if (numero <=0)
        console.log("Nel");
}while(numero<=0);

//let numero =1;
for (let i = 1; i<=10; i++) {
    for (let j = 1; j <=10; j++) {
        console.log(j + " x " + numero + " = " + numero*j);
    }
    numero++;
    console.log("\n");
}