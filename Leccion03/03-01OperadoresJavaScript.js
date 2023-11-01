let a = 3, b = 2;

let  z = a + b;

//incremento
//Pre-incremento (El operador ++ antes de la variable)
z = ++a; //El valor se aumenta al instante a z
console.log(a);
console.log(z);

//Post-incremento(El operador ++ despues de la variable)
z = b++; //Se espera que se vuelva a usar la variable b para que se le aumente el valor
console.log(b);
console.log(z);

//Decremento
//Pre  - Decremento
z = --a;
console.log(a);
console.log(z);

//Post - Decremento
z  = b--;
console.log(b);
console.log(z);


/* 
console.log("El resultado de la suma es: " + z);

z = a - b;
console.log("El resultado de la resta es: " + z);

z = a * b;
console.log("El resultado de la multiplicación es: " + z);

z = a / b;
console.log("El resultado de la división es: " + z);

z = a % b; //Residuo de la divsión 
console.log("El residuo es: " + z);

z = a ** b; //Exponente
console.log("El exponente es: " + z)

*/