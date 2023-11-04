/*let contador = 0;

/*
while (contador < 3){
    console.log(contador);
    contador ++;
}



do{
    console.log(contador);
    contador ++;
}while(contador < 3);

console.log("Fin ciclo do while")
*/
/*
for(let contador = 0; contador < 3; contador ++){
    console.log(contador);
}
console.log("Fin ciclo for");
*/

/*
for(let contador = 0; contador <= 10; contador ++){
    if(contador % 2 == 0){
        console.log(contador);
        break; //Rompe el ciclo, os ea que se detiene si se cumple la condición
    }
}
*/


for (let contador = 0; contador <= 10; contador ++){
     if (contador % 2 !== 0) {
        continue; //ir a la siguiente iteración
     }
    console.log(contador);
}



