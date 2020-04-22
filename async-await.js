//let getNombre = async() => { //me debuelve una promesa
//  throw new Error("No exixte un usuario en la BD")
// return "Rodrigo";
//}
//console.log(getNombre());
let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Rodrigo")

        }, 3000);
    });
}

let saluda = async() => {
    let nombre = await getNombre();
    return `hola ${nombre}`;


}

saluda().then(mensaje => {
        console.log(mensaje);
    })
    //getNombre().then(nombre => {
    //console.log(nombre);
    //}).catch(err => {
    // console.log("Error en el ASyNC:", err);
    //});