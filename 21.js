let sumPares = 0;
let sumImpares = 0;
for (let i = 1; i<= 1000; i++){
    if(i % 2 == 0) sumPares += i;
    else sumImpares += i;
}
console.log("Suma de pares: "+sumPares);
console.log("suma de impares: " +sumImpares);