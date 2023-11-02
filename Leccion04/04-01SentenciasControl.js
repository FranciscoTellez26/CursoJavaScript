/*
let numero = 20;

if(numero == 1){
    console.log("Número uno")
}
else if (numero == 2 ){
    console.log("Número dos")
}
else if (numero == 3){
    console.log("Número tres")
}
else if (numero == 4){
    console.log("Número cuatro")
}
else {
    console.log("Número desconocido")
}
*/


/*
//Ejercicio calcular estación del año
let mes = 4;
let estacion;

if(mes == 1 || mes == 2 || mes == 12){
    estacion = "Invierno";
}
else if(mes == 3 || mes == 4 || mes == 5){
    estacion = "Primavera";
}
else if(mes == 6 || mes == 7 || mes == 8){
    estacion = "Verano";
}
else if(mes == 9 || mes == 10 || mes == 11){
    estacion = "Otoño";
}
else{
    estacion = "Incorrecto";
}

console.log(estacion);

*/


//Ejercicio conocer hora del dia
let hora = 9 
let mensaje;

if (hora >= 6 && hora <= 11) {
    mensaje = "Buenos dias";
} else if(hora >= 12 && hora <= 18) {
    mensaje = "Buenas tardes";
}else if(hora >= 19 && hora <= 24){
    mensaje = "Buenas noches";
}else if(hora >=0 && hora < 6){
    mensaje = "Durmiendo";
}else{
    mensaje = "incorrecto";
}

console.log(mensaje);


let numero = 4;
let numeroTexto = "Valor desconocido";

switch(numero){
    case 1: 
        numeroTexto = "Número uno";
        break;
    case 2:
        numeroTexto = "Número dos";
        break;
    case 3:
        numeroTexto = "Numero tres";
        break;
    case 4:
        numeroTexto = "Número cuatro";
        break;
    default : 
        numeroTexto = "Caso no encontrado";
}

console.log(numeroTexto);


let mes = 4;
let estacion;

switch(mes){
    case 1: case 2: case 12:
        estacion = "Invierno";
        break;
    case 3: case 4: case 5:
        estacion = "Primavera";
        break;
    case 6: case 7: case 8:
        estacion = "Verano";
        break;
    case 9: case 10: case 11:
        estacion = "Otoño";
        break;
    default:
        estacion = "Valor incorrecto";
}

console.log(estacion);