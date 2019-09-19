pares=0;
trimples=0;
for(i=0; i<=100 ; i++){
    pares = i%2;
    trimples = i%3;
    if(pares == 0 || trimples == 0){
        console.log(i);
    }
}