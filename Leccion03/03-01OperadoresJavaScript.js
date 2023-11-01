/*
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
*/

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

/*
//Precedencia de operadores
let a = 3, b = 2, c = 1, d = 4;

let z = a * b + c / d; //Se ejecuta primeto la multiplicaci'on, despues la division y al final la suma
console.log(z)

z =  c + a * b / d; //Se ejecuta primeto a * b, el resultado de esto se multiplica ṕor d y al final se suma c
console.log(z)

z = (c + a) * b / c; //Se puede alterar el orden que se eejecutan las operaciones utilizando parentesis
console.log (z);
*/

/*
//Operador de asgnación (los valores se asignan de izquierda a derecha).
let a = 1;

a += 3;  //Esto es igual a hacer a = a + 3 (Asignación compuesto)
console.log(a);


 a-= 2; //Esto es igual a hacer a = a -2 (Asignación compuesto)
 console.log(a);
 
 *=
 /=
 %=
 **=
 */

/*
 //Operadores de comparación
let a = 3, b = 2, c = "3";

let z = a == b; // Se revisa el valor sin importar el tipo
console.log(z)

z = a === c; //Revisa los valores, per tambien los tipos
console.log(z)
*/

//operador ternario 

let resultado = (3>2) ? "verdadero" : "falso";

console.log(resultado);
