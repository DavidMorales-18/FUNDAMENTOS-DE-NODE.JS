/* function suma(a, b) {
 return a + b;
} */

/* let suma = (a, b) => { 
return a + b;
} */

let suma = (a, b) => a + b; ///funcion fecha 

/* función flecha va ha sustituir la palabra function por => */

console.log(`la suma de 3 + 4 = ${suma(3,4)}`);


let saludar = (nombre) => `${nombre}`;
//funcion fecha de saludar con sus atributos 

console.log(`Hola : ${saludar(`David`)}`);


let saludo = ( )=>{ // funcion fecha de saludo con sus atributos 
    let a = "Morales";
    let b = 'chicos';
    return `${a}  ${b}`;
}
console.log(`${saludo()}`);



let deadpool = { //Objeto
    nombre: 'Wade',
    apellido: 'Wilson',
    poder: 'regeneracion',
    /* getNombre: function()  {
        return `${this.nombre} ${this.apellido} . poder: ${this.poder}` 
        // el this ya no funciona en un objeto para una funcion flecha
    } */
    getNombre: () => `${deadpool.nombre} ${deadpool.apellido} `

}

console.log(deadpool.getNombre());