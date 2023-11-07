let persona = {
    nombre: "Francisco",
    apellido: "Tellez",
    email: "fjtellez26@gmail.com",
    edad: 25,

    //agregar métodos a objetos
    nombreCompleto: function (){
        return this.nombre + ' ' + this.apellido
    },
    //agregar mas funciones
    miFuncion: function(){

    },
    //Para obtener información se simplifica la sintaxis usando el método "get"
    get nombreCompleto2(){
        return this.nombre + ' '+ this.apellido;
    }

}


console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.nombreCompleto());

//Otra manera de crear objetos
let persona2 = new Object();
persona2.nombre = "Carlos";
persona2.direccion = "Saturno 15";
persona2.tel = "55443322";

console.log(persona2.tel);

//otra manera de acceder a las propiedades de un objeto
console.log(persona['nombre']);
console.log(persona2['nombre']);

//Se puede acceder a las propiedades de los objetos usando un "for in"
for( nombrePropiedad in persona){
    console.log(nombrePropiedad);
    //Valores de las propiedades del objeto
    console.log(persona[nombrePropiedad]);
}

//****Agregar y eliminar propiedades de un objeto****
//agregar
persona.tel = "55443322";
console.log(persona);

//modificar propiedaad de un objeto
persona.tel = "44332211";
console.log(persona);

//Eliminar propiedad de un objeto
delete persona.tel;
console.log(persona);

//****Formas de imprimir un objeto***
//Cuando solo se imprime un objeto, en el navegador puede verse de esta manera: [object object]


//Concatenar cada valor de cada propiedad
console.log(persona.nombre + ', '+ persona.apellido);

//for in
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//Con el método object(Regresa el valor en forma de un array)

let personaArray = Object.values(persona);
console.log(personaArray);

//convertir a cadena
let personaString = JSON.stringify(persona);
console.log(personaString);

//***metodo get y set en objetos***

console.log(persona.nombreCompleto2);
