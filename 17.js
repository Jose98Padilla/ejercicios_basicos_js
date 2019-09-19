var readline = require('readline-sync');
inicio = readline.question("Introduce el numero en el que quieres inciar: ");
final = readline.question("Introduce el numero en el que quieres terminar: ");
let contador=0;
let suma=0;
if(final>=inicio) {
  for (i = inicio; i <= final; i++) {
    if (i%2==0) {
      contador++;
      suma = parseInt(suma) + i;
      console.log(i);
    }
  }
  console.log("la cantidad es: " + contador);
  console.log("la suma es: " + suma);
}else {
  console.log("el segundo tiene que ser mayor que el primero");
}