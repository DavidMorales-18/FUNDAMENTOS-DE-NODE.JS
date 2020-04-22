/*  setTimeout(function() {
     console.log("hola muchachos");

 }, 300); //va a ejecutar despues de tres segunsdo
 */
// //funcion fecha
// setTimeout(() =>{
//     console.log("hola muchachos");

// }, 300); //va a ejecutar despues de tres segunsdo



// id = usuario basae de datos 

//callback funcion 
//callbackes una funcion que se va a realizar algo que ya esta funcionando
let getUsuarioById = (id, nickname, callback) => {
        let n = nickname + " Perez"
        let usuario = {
            nombre: n,
            id
        }

        if (id === 20) {
            callback(`El usuario con id ${id} no existe!`);
        } else {
            callback(null, usuario, 23);
        }


    }
    //Invocar a la funcion 
getUsuarioById(10, 'David', (err, usuario, edad) => {
    if (err) {
        return console.log(err);
    }

    console.log("Usuario de la Base de Datos :", usuario, `edad: ${edad}`);
});