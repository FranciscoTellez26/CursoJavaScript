/*
Ejemplos de tipos de datos en javascript
*/

//tipo de dato string
var nombre = "Vanessa";

console.log(nombre);

nombre = 10;
console.log(typeof nombre);

//Tipo de dato  numerico
var numero = 10000;
console.log(numero);

//Tipo de dato object
var objeto = {
    nombre : "juan",
    apellido : "perez", 
    edad : 23
}

console.log(objeto);

console.log(typeof objeto);

//Tipo de dato boolean(true, false)
var bandera = true;
console.log(typeof bandera);

//Tipo de datos function
function miFuncion(){}
console.log(typeof miFuncion);


//Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");  //Valores unicos de una variable
console.log(typeof simbolo);

//Tipo clase es una función
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
    }
}

console.log(typeof Persona);

// tipo undefined
var x;
console.log(typeof x);

//Tipo de dato null = ausencia de valor
var y = null;
console.log(typeof y);

var autos = ['Audi','BMW','volvo'];
console.log(typeof autos);

var z = '';
console.log(z);
console.log(typeof z);



/*Concatenacion de cadenas en javaScript*/

var nombre = 'Francisco';
var lastName = 'Tellez';

var nombreCompleto = nombre + ' ' + lastName;
console.log(nombreCompleto);

var nombreCompleto2 = 'francisco' + " "+ 'tellez';
console.log(nombreCompleto2);


var x = nombre + 2 + 19;
console.log (x);

x = nombre + (6 + 2);
console.log(x);

x = 2 + 8 + nombre;
console.log(x);


/*uso basico de let, const y var*/
nombre = "juan";  //literal de tipo string puede ser  1, 10.0, "carlos" (No es una buena practica)
console.log(nombre);

/*Se puede usar let cuando no se tiene el valor que se necesita en ese momento*/

const apellido = "Tellez";
apellido = "perez"  //los datos de const no se pueden cambiar


//Mejores practicas para declarar nombres de variables
let completeName = "Francisco Tellez";
console.log( completeName );

let x1, y1;
 x1 = 10, y1 = 20;

let z1 = x1 + y1;
console.log(z1);



