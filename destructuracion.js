let deadpool = { //Objeto ---> Deadpool
    nombre: 'Wade',
    apellido: 'Wilson',
    poder: 'regeneración',
    getNombre: function() { //funcion 
        return `${deadpool.nombre} ${this.apellido} . poder: ${this.poder} `
    }
}

//Opcion 1 :
console.log(`primera opcion :${deadpool.getNombre()}`);
/* Coger los atributos del objeto y poner en variables externas (forma tradicional)*/
let nom = deadpool.nombre;
let ape = deadpool.apellido;
let pod = deadpool.poder;

//Obcion2: Destructuracion --> 

/* Se crea los tributos y los obtiene del objeto deadpool 
let { nombre, apellido, poder } = deadpool; 
*/

let { nombre: primerNombre, apellido, poder } = deadpool;
/* Agarramos el identificador en este caso nombre : y 
el nombre por el que vamos a cambiar */

console.log(primerNombre, apellido, poder);
console.log(`${primerNombre}`);