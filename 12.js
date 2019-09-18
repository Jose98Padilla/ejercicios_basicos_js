pares=0;
impares=0;
temporal=0;
for(i=0; i<=100; i++){
    temporal = i%2;
    if(temporal == 0){
        pares = pares+i;
        //console.log(pares);
    }else if(temporal ==1){
        impares = impares+i;
    }
}
console.log("La suma de los pares son: " + pares);
console.log("La suma de los impares son: " + impares);