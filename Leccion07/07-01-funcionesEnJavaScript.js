//miFuncion(4,2); //Se puede llamar a la funcion desde cualquier parte del archivo, a esto se le llama hoisting

//Declaración de la función
function miFuncion(a,b){
    console.log(arguments.length);
    return a + b;
}

//Se llama a la función
let resultado = miFuncion(2,3);

console.log(resultado);


//Funcion de tipo expresión
let sumar = function(a, b){
    return a + b;
}; // Se puede omitir el ";", pero se pone por buena practica

resultado = sumar(1, 2);
console.log(resultado);

//Funciones tipo self invoking (funciones que se llaman a si mismas), no se pueden volver a llamar, solo es en el momento de ejecución
(function(a,b){ //puede tener o no parametros
    console.log("Ejecutando la funcion: " + (a+b));
})( 4,5); //En estos parentesis van los parametros que se definen al inicio de la funcion


//Funciones como objetos
console.log(typeof miFuncion);

//Las funciones(métodos) al ser objetos tienes propiedades y métodos
var miFuncionTexto = miFuncion.toString();

console.log(miFuncionTexto);

//funciones flecha en JavaScript
const sumarFuncionTipoFlecha = (a,b) => a + b;

resultado = sumarFuncionTipoFlecha(3,5);
console.log(resultado);

//Argumentos y parametros en javascript
 let sumar2 = function(a = 4, b = 5){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b;
 }

 resultado = sumar2();
 console.log(resultado); 