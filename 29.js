let checar =0;
let sumando =0;
for(i=1; i<=100 ; i++){
    let dado_1 = Math.floor(Math.random() * 100) + 1;
    let dado_2 = Math.floor(Math.random() * 100) + 1;

    sumando = dado_1 + dado_2;
    if (sumando == 10) {
        console.log("En el lanzamiento " + i + " de los dados tenian valor de: " + dado_1 + " y " + dado_2);
        
    }
    sumando =0;
}

