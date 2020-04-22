/* var nombre = "Wolverine"; 
   var nombre = "Margneto";

console.log(`hola${nombre}`); */
let nombre = "Wolverine"; //let : es sea nombre igual a :
//nombre = "Bruce ware"; //vale utilizar la variable, lo que no hay que  definir la variable otra vez 
// var 
if (true) {
    //let : local en el if 
    let nombre = "Magneto"; // esta en un bloque de codigo dentro de las llaves
    /* console.log(`nombre principal: ${nombre}`);  //imprime lo que esta adentro , let es local del bloque */
}
console.log(`Hola ${nombre}`); // imprime la variable global

let i;

for (i = 0; i <= 5; i++) {
    /*  */
    console.log(`i=${i}`); //(console.log) -> clg
}
console.log(`Valor final de i : ${i}`);