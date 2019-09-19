var readline = require('readline-sync');
console.log("hola arreglo");
tabla = new Array(5);
numero =0;
min=1000000000000000000;
max=0;
temporal=0;
for(i=0; i<5 ;i++){
    //console.log();
    numero = readline.question("Introduce el " + (i+1) + " numero: " );
    tabla[i]= numero;
    if(tabla[i] > max)
        max = tabla[i];
    if (tabla[i] < min)
        min = tabla[i];
}
console.log("El minimo es: " + min);
console.log("El maximo es: " + max);