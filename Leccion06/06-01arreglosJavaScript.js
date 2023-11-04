// Declaración de un arreglo en javaScript

//Forma antigua
//let autos = new Array('BMW','Mercedez-Benz', 'Volvo');

const autos = ['BMW','Mercedez-Benz', 'Volvo'];
console.log(autos);

console.log(autos[0]);
console.log(autos[1]);

for(let i = 0; i < autos.length; i++){
    console.log(i+ ": " + autos[i])
}

//modificar el valor de un arreglo
autos[1] = "Ferrari";
console.log(autos);


//Agregar valor a un arreglo
autos.push("Nissan");
console.log(autos);

//Otra forma de agregar valores a un arreglo.
autos[autos.length] = "McLarent";
console.log(autos);

//Agregar un arreglo saltando indices(No se debe hacer, pero es para demostrar que se puede)
autos[6] = "Ford";
console.log(autos);


//Preguntar si es array

console.log(Array.isArray(autos));
console.log(autos instanceof Array);